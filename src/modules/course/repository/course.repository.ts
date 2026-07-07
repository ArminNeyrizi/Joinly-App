import type { DayOfWeek as PrismaDayOfWeek, Schedule } from "@/generated/prisma/client";
import { prisma } from "@/lib/db";

import type {
  Course,
  CourseDetail,
  CourseSection,
  CourseWithSections,
  DayOfWeek,
  ScheduleSlot,
} from "../types";

function mapDay(day: PrismaDayOfWeek): DayOfWeek {
  return day as DayOfWeek;
}

function mapSchedule(s: Schedule): ScheduleSlot {
  return {
    day: mapDay(s.day),
    startTime: s.startTime,
    endTime: s.endTime,
  };
}

function mapSection(section: {
  id: string;
  courseId: string;
  sectionNumber: string;
  instructor: string;
  capacity: number;
  enrolledCount: number;
  semesterId: string;
  schedules: Schedule[];
}): CourseSection {
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

function mapCourse(course: {
  id: string;
  code: string;
  name: string;
  description: string | null;
  units: number;
  academyId: string;
  learningPathId: string | null;
  createdAt: Date;
  updatedAt: Date;
  prerequisites: { requiredCourseId: string }[];
}): Course {
  return {
    id: course.id,
    code: course.code,
    name: course.name,
    description: course.description ?? undefined,
    units: course.units,
    academyId: course.academyId,
    learningPathId: course.learningPathId ?? undefined,
    prerequisiteIds: course.prerequisites.map((p) => p.requiredCourseId),
    createdAt: course.createdAt.toISOString(),
    updatedAt: course.updatedAt.toISOString(),
  };
}

export async function findCoursesByAcademy(academyId: string): Promise<Course[]> {
  const courses = await prisma.course.findMany({
    where: { academyId },
    include: { prerequisites: { select: { requiredCourseId: true } } },
    orderBy: { code: "asc" },
  });
  return courses.map(mapCourse);
}

export async function findCoursesWithSectionsByAcademy(
  academyId: string,
  semesterId: string,
): Promise<CourseWithSections[]> {
  const courses = await prisma.course.findMany({
    where: { academyId },
    include: {
      prerequisites: { select: { requiredCourseId: true } },
      learningPath: { select: { name: true } },
      sections: {
        where: { semesterId },
        include: { schedules: true },
        orderBy: { sectionNumber: "asc" },
      },
    },
    orderBy: { code: "asc" },
  });

  return courses.map((c) => ({
    ...mapCourse(c),
    sections: c.sections.map(mapSection),
    learningPathName: c.learningPath?.name,
  }));
}

export async function findCourseById(id: string): Promise<CourseDetail | null> {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      prerequisites: {
        include: {
          requiredCourse: {
            include: {
              prerequisites: { select: { requiredCourseId: true } },
            },
          },
        },
      },
      sections: {
        include: { schedules: true },
        orderBy: { sectionNumber: "asc" },
      },
    },
  });

  if (!course) return null;

  return {
    ...mapCourse({
      ...course,
      prerequisites: course.prerequisites.map((p) => ({
        requiredCourseId: p.requiredCourseId,
      })),
    }),
    sections: course.sections.map(mapSection),
    prerequisites: course.prerequisites.map((p) => mapCourse(p.requiredCourse)),
  };
}

export async function findCourseByCode(
  code: string,
  academyId: string,
): Promise<Course | null> {
  const course = await prisma.course.findUnique({
    where: { academyId_code: { academyId, code } },
    include: { prerequisites: { select: { requiredCourseId: true } } },
  });
  return course ? mapCourse(course) : null;
}
