import type {
  EnrollmentStatus,
  Prerequisite,
  Schedule,
} from "@/generated/prisma/client";

import { prisma } from "@/lib/db";

import type {
  Academy,
  CourseSection,
  CourseWithSections,
  Enrollment,
  EnrollmentItem,
  LearningPath,
  ScheduleSlot,
  Semester,
  Student,
} from "..";


const sectionInclude = {
  schedules: true,
  course: {
    include: {
      prerequisites: true,
      academy: true,
      learningPath: true,
    },
  },
} as const;

const enrollmentInclude = {
  section: {
    include: {
      schedules: true,
      course: {
        include: {
          prerequisites: true,
          academy: true,
          learningPath: true,
        },
      },
    },
  },
} as const;

function mapSchedule(schedule: Schedule): ScheduleSlot {
  return {
    day: schedule.day as ScheduleSlot["day"],
    startTime: schedule.startTime,
    endTime: schedule.endTime,
  };
}

function mapAcademy(academy: { id: string; slug: string; name: string; description: string | null }): Academy {
  return {
    id: academy.id,
    slug: academy.slug,
    name: academy.name,
    description: academy.description ?? undefined,
  };
}

function mapLearningPath(
  learningPath: { id: string; slug: string; name: string; description: string | null; academyId: string } | null,
): LearningPath | undefined {
  if (!learningPath) return undefined;
  return {
    id: learningPath.id,
    slug: learningPath.slug,
    name: learningPath.name,
    description: learningPath.description ?? undefined,
    academyId: learningPath.academyId,
  };
}

function mapCourse(
  course: {
    id: string;
    code: string;
    name: string;
    description: string | null;
    units: number;
    academyId: string;
    learningPathId: string | null;
    prerequisites: Prerequisite[];
    academy: { id: string; slug: string; name: string; description: string | null };
    learningPath: { id: string; slug: string; name: string; description: string | null; academyId: string } | null;
  },
): CourseWithSections {
  return {
    id: course.id,
    code: course.code,
    name: course.name,
    description: course.description ?? undefined,
    units: course.units,
    academyId: course.academyId,
    learningPathId: course.learningPathId ?? undefined,
    prerequisiteIds: course.prerequisites.map((p) => p.requiredCourseId),
    sections: [],
    academy: mapAcademy(course.academy),
    learningPath: mapLearningPath(course.learningPath),
  };
}

function mapSection(
  section: {
    id: string;
    courseId: string;
    sectionNumber: string;
    instructor: string;
    capacity: number;
    enrolledCount: number;
    semesterId: string;
    schedules: Schedule[];
  },
): CourseSection {
  return {
    id: section.id,
    courseId: section.courseId,
    sectionNumber: section.sectionNumber,
    instructor: section.instructor,
    capacity: section.capacity,
    enrolledCount: section.enrolledCount,
    semesterId: section.semesterId,
    schedules: section.schedules.map(mapSchedule),
  };
}

function mapEnrollment(enrollment: {
  id: string;
  studentId: string;
  sectionId: string;
  semesterId: string;
  status: EnrollmentStatus;
}): Enrollment {
  return {
    id: enrollment.id,
    studentId: enrollment.studentId,
    sectionId: enrollment.sectionId,
    semesterId: enrollment.semesterId,
    status: enrollment.status,
  };
}

function mapStudent(student: {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  academyId: string;
}): Student {
  return {
    id: student.id,
    userId: student.userId,
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    academyId: student.academyId,
  };
}

function mapSemester(semester: {
  id: string;
  name: string;
  isActive: boolean;
  enrollmentStart: Date;
  enrollmentEnd: Date;
}): Semester {
  return {
    id: semester.id,
    name: semester.name,
    isActive: semester.isActive,
    enrollmentStart: semester.enrollmentStart.toISOString(),
    enrollmentEnd: semester.enrollmentEnd.toISOString(),
  };
}

export async function findActiveSemester() {
  return prisma.semester.findFirst({
    where: { isActive: true },
    orderBy: { enrollmentStart: "desc" },
  });
}

export async function findStudentByUserId(userId: string) {
  return prisma.student.findUnique({
    where: { userId },
    include: { academy: true },
  });
}

export async function findLearningPaths(academyId: string) {
  return prisma.learningPath.findMany({
    where: { academyId },
    orderBy: { name: "asc" },
  });
}

export async function findCoursesWithSections(academyId: string, semesterId: string) {
  const courses = await prisma.course.findMany({
    where: { academyId },
    include: {
      prerequisites: true,
      academy: true,
      learningPath: true,
      sections: {
        where: { semesterId },
        include: { schedules: true },
        orderBy: { sectionNumber: "asc" },
      },
    },
    orderBy: { code: "asc" },
  });

  return courses.map((course) => ({
    ...mapCourse(course),
    sections: course.sections.map(mapSection),
  }));
}

export async function findStudentEnrollments(studentId: string, semesterId: string) {
  return prisma.enrollment.findMany({
    where: {
      studentId,
      semesterId,
      status: { not: "DROPPED" },
    },
    include: enrollmentInclude,
    orderBy: { createdAt: "asc" },
  });
}

export async function findCompletedCourseIds(studentId: string) {
  const completions = await prisma.completedCourse.findMany({
    where: { studentId },
    select: { courseId: true },
  });
  return completions.map((c) => c.courseId);
}

export function toEnrollmentItems(
  enrollments: Awaited<ReturnType<typeof findStudentEnrollments>>,
): EnrollmentItem[] {
  return enrollments.map((record) => ({
    enrollment: mapEnrollment(record),
    section: mapSection(record.section),
    course: {
      ...mapCourse(record.section.course),
      sections: [],
    },
  }));
}

export async function findSectionById(sectionId: string) {
  return prisma.courseSection.findUnique({
    where: { id: sectionId },
    include: {
      schedules: true,
      course: { include: { prerequisites: true } },
    },
  });
}

export async function createEnrollment(data: {
  studentId: string;
  sectionId: string;
  semesterId: string;
}) {
  return prisma.$transaction(async (tx) => {
    const section = await tx.courseSection.findUnique({
      where: { id: data.sectionId },
    });

    if (!section) {
      throw new Error("SECTION_NOT_FOUND");
    }

    if (section.enrolledCount >= section.capacity) {
      throw new Error("SECTION_FULL");
    }

    const enrollment = await tx.enrollment.create({
      data: {
        studentId: data.studentId,
        sectionId: data.sectionId,
        semesterId: data.semesterId,
        status: "PENDING",
      },
    });

    await tx.courseSection.update({
      where: { id: data.sectionId },
      data: { enrolledCount: { increment: 1 } },
    });

    return enrollment;
  });
}

export async function dropEnrollmentById(enrollmentId: string, studentId: string) {
  return prisma.$transaction(async (tx) => {
    const enrollment = await tx.enrollment.findFirst({
      where: { id: enrollmentId, studentId, status: { not: "DROPPED" } },
    });

    if (!enrollment) {
      throw new Error("ENROLLMENT_NOT_FOUND");
    }

    await tx.enrollment.update({
      where: { id: enrollmentId },
      data: { status: "DROPPED" },
    });

    await tx.courseSection.update({
      where: { id: enrollment.sectionId },
      data: { enrolledCount: { decrement: 1 } },
    });
  });
}

export async function confirmPendingEnrollments(studentId: string, semesterId: string) {
  return prisma.enrollment.updateMany({
    where: {
      studentId,
      semesterId,
      status: "PENDING",
    },
    data: { status: "CONFIRMED" },
  });
}

export async function countPendingUnits(studentId: string, semesterId: string) {
  const enrollments = await prisma.enrollment.findMany({
    where: { studentId, semesterId, status: "PENDING" },
    include: {
      section: {
        include: { course: true },
      },
    },
  });

  return enrollments.reduce((sum, e) => sum + e.section.course.units, 0);
}

export { mapSemester, mapStudent };
