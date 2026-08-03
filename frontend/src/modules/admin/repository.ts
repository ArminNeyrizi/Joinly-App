import { prisma } from "@/lib/db";

export async function isAdminUser(userId: string): Promise<boolean> {
  const admin = await prisma.admin.findUnique({ where: { userId } });
  return admin !== null;
}

export async function findHoldEnrollments(academyId?: string) {
  return prisma.enrollment.findMany({
    where: {
      status: "HOLD",
      ...(academyId ? { student: { academyId } } : {}),
    },
    include: {
      student: true,
      section: { include: { course: true } },
      semester: true,
    },
    orderBy: { createdAt: "asc" },
  });
}

// تایید یا رد یک ثبت‌نام در وضعیت HOLD؛ در صورت رد، ظرفیت گروه آزاد می‌شود
export async function setEnrollmentStatus(
  enrollmentId: string,
  status: "APPROVED" | "REJECTED",
  adminUserId: string,
  rejectReason?: string,
) {
  return prisma.$transaction(async (tx) => {
    const enrollment = await tx.enrollment.findUnique({
      where: { id: enrollmentId },
    });

    if (!enrollment) {
      throw new Error("ENROLLMENT_NOT_FOUND");
    }
    if (enrollment.status !== "HOLD") {
      throw new Error("NOT_IN_HOLD");
    }

    const updated = await tx.enrollment.update({
      where: { id: enrollmentId },
      data: {
        status,
        reviewedByUserId: adminUserId,
        reviewedAt: new Date(),
        rejectReason: status === "REJECTED" ? (rejectReason ?? null) : null,
      },
    });

    if (status === "REJECTED") {
      await tx.courseSection.update({
        where: { id: enrollment.sectionId },
        data: { enrolledCount: { decrement: 1 } },
      });
    }

    return updated;
  });
}

export async function findAllCoursesForAdmin(academyId?: string) {
  return prisma.course.findMany({
    where: academyId ? { academyId } : undefined,
    include: {
      academy: true,
      learningPath: true,
      prerequisites: { include: { requiredCourse: true } },
      sections: { include: { schedules: true, semester: true } },
    },
    orderBy: { code: "asc" },
  });
}

export async function createCourse(data: {
  code: string;
  name: string;
  description?: string;
  units: number;
  academyId: string;
  learningPathId?: string;
  prerequisiteCourseIds: string[];
}) {
  return prisma.course.create({
    data: {
      code: data.code,
      name: data.name,
      description: data.description,
      units: data.units,
      academyId: data.academyId,
      learningPathId: data.learningPathId,
      prerequisites: {
        create: data.prerequisiteCourseIds.map((requiredCourseId) => ({
          requiredCourseId,
        })),
      },
    },
  });
}

export async function updateCourse(
  courseId: string,
  data: {
    code?: string;
    name?: string;
    description?: string;
    units?: number;
    learningPathId?: string | null;
    prerequisiteCourseIds?: string[];
  },
) {
  return prisma.$transaction(async (tx) => {
    if (data.prerequisiteCourseIds) {
      await tx.prerequisite.deleteMany({ where: { courseId } });
      if (data.prerequisiteCourseIds.length > 0) {
        await tx.prerequisite.createMany({
          data: data.prerequisiteCourseIds.map((requiredCourseId) => ({
            courseId,
            requiredCourseId,
          })),
        });
      }
    }

    return tx.course.update({
      where: { id: courseId },
      data: {
        code: data.code,
        name: data.name,
        description: data.description,
        units: data.units,
        learningPathId: data.learningPathId,
      },
    });
  });
}

export async function deleteCourse(courseId: string) {
  return prisma.course.delete({ where: { id: courseId } });
}

export async function createSection(data: {
  courseId: string;
  sectionNumber: string;
  instructor: string;
  capacity: number;
  semesterId: string;
  schedules: { day: string; startTime: string; endTime: string }[];
}) {
  return prisma.courseSection.create({
    data: {
      courseId: data.courseId,
      sectionNumber: data.sectionNumber,
      instructor: data.instructor,
      capacity: data.capacity,
      semesterId: data.semesterId,
      schedules: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        create: data.schedules.map((s) => ({ ...s, day: s.day as any })),
      },
    },
  });
}

export async function updateSection(
  sectionId: string,
  data: { instructor?: string; capacity?: number },
) {
  return prisma.courseSection.update({ where: { id: sectionId }, data });
}

export async function deleteSection(sectionId: string) {
  return prisma.courseSection.delete({ where: { id: sectionId } });
}
