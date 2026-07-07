import { prisma } from "@/lib/db";

import type { DashboardData } from "../types";

export async function findDashboardDataByUserId(
  userId: string,
): Promise<DashboardData | null> {
  const student = await prisma.student.findUnique({
    where: { userId },
    include: {
      academy: true,
    },
  });

  if (!student) return null;

  const activeSemester = await prisma.semester.findFirst({
    where: { isActive: true },
    orderBy: { enrollmentStart: "desc" },
  });

  if (!activeSemester) {
    return {
      studentName: `${student.firstName} ${student.lastName}`,
      academyName: student.academy.name,
      stats: {
        currentSemesterName: "N/A",
        enrolledCoursesCount: 0,
        totalUnitsCount: 0,
      },
      activeEnrollments: [],
    };
  }

  const enrollments = await prisma.enrollment.findMany({
    where: {
      studentId: student.id,
      semesterId: activeSemester.id,
      status: { not: "DROPPED" },
    },
    include: {
      section: {
        include: {
          course: true,
        },
      },
    },
  });

  const enrolledCoursesCount = enrollments.length;
  const totalUnitsCount = enrollments.reduce(
    (sum, e) => sum + e.section.course.units,
    0,
  );

  return {
    studentName: `${student.firstName} ${student.lastName}`,
    academyName: student.academy.name,
    stats: {
      currentSemesterName: activeSemester.name,
      enrolledCoursesCount,
      totalUnitsCount,
    },
    activeEnrollments: enrollments.map((e) => ({
      id: e.id,
      courseName: e.section.course.name,
      courseUnits: e.section.course.units,
      status: e.status,
    })),
  };
}
