import { ENROLLMENT_LIMITS } from "../constants";
import {
  confirmPendingEnrollments,
  createEnrollment,
  dropEnrollmentById,
  findActiveSemester,
  findCompletedCourseIds,
  findCoursesWithSections,
  findStudentByUserId,
  findLearningPaths,
  findSectionById,
  findStudentEnrollments,
  mapSemester,
  mapStudent,
  toEnrollmentItems,
} from "../repository/enrollment.repository";
import type {
  EnrollmentItem,
  EnrollmentPageData,
  EnrollmentSummary,
  ScheduleSlot,
} from "../types";

function isEnrollmentPeriodOpen(semester: {
  enrollmentStart: Date;
  enrollmentEnd: Date;
}): boolean {
  const now = new Date();
  return now >= semester.enrollmentStart && now <= semester.enrollmentEnd;
}

function hasScheduleConflict(
  a: ScheduleSlot[],
  b: ScheduleSlot[],
): boolean {
  for (const slotA of a) {
    for (const slotB of b) {
      if (slotA.day !== slotB.day) continue;
      if (slotA.startTime < slotB.endTime && slotB.startTime < slotA.endTime) {
        return true;
      }
    }
  }
  return false;
}

function buildSummary(
  enrollments: EnrollmentItem[],
  semester: NonNullable<Awaited<ReturnType<typeof findActiveSemester>>>,
): EnrollmentSummary {
  const totalUnits = enrollments.reduce((sum, item) => sum + item.course.units, 0);

  return {
    totalUnits,
    minUnits: ENROLLMENT_LIMITS.minUnits,
    maxUnits: ENROLLMENT_LIMITS.maxUnits,
    itemCount: enrollments.length,
    isEnrollmentOpen: isEnrollmentPeriodOpen(semester),
    semester: mapSemester(semester),
  };
}

async function getEnrollmentContext(userId: string) {
  const [student, semester] = await Promise.all([
    findStudentByUserId(userId),
    findActiveSemester(),
  ]);

  if (!student) {
    throw new Error("STUDENT_NOT_FOUND");
  }

  if (!semester) {
    throw new Error("SEMESTER_NOT_FOUND");
  }

  const [learningPaths, courses, enrollmentRecords, completedCourseIds] =
    await Promise.all([
      findLearningPaths(student.academyId),
      findCoursesWithSections(student.academyId, semester.id),
      findStudentEnrollments(student.id, semester.id),
      findCompletedCourseIds(student.id),
    ]);

  const enrollments = toEnrollmentItems(enrollmentRecords);

  return {
    student,
    semester,
    academy: student.academy,
    learningPaths,
    courses,
    enrollments,
    completedCourseIds,
    summary: buildSummary(enrollments, semester),
  };
}

export async function getEnrollmentPageData(userId: string): Promise<EnrollmentPageData> {
  const context = await getEnrollmentContext(userId);

  return {
    student: mapStudent(context.student),
    academy: {
      id: context.academy.id,
      slug: context.academy.slug,
      name: context.academy.name,
      description: context.academy.description ?? undefined,
    },
    learningPaths: context.learningPaths.map((path) => ({
      id: path.id,
      slug: path.slug,
      name: path.name,
      description: path.description ?? undefined,
      academyId: path.academyId,
    })),
    courses: context.courses,
    enrollments: context.enrollments,
    completedCourseIds: context.completedCourseIds,
    summary: context.summary,
  };
}

export type EnrollmentValidationError =
  | "ENROLLMENT_CLOSED"
  | "SECTION_NOT_FOUND"
  | "ALREADY_ENROLLED"
  | "COURSE_ALREADY_SELECTED"
  | "SECTION_FULL"
  | "PREREQUISITE_NOT_MET"
  | "MAX_UNITS_EXCEEDED"
  | "SCHEDULE_CONFLICT"
  | "ENROLLMENT_NOT_FOUND"
  | "MIN_UNITS_NOT_MET"
  | "STUDENT_NOT_FOUND"
  | "SEMESTER_NOT_FOUND";

export async function enrollInSection(
  userId: string,
  sectionId: string,
): Promise<
  | { success: true }
  | { success: false; error: EnrollmentValidationError }
> {
  const context = await getEnrollmentContext(userId);

  if (!context.summary.isEnrollmentOpen) {
    return { success: false, error: "ENROLLMENT_CLOSED" };
  }

  const section = await findSectionById(sectionId);
  if (!section || section.semesterId !== context.semester.id) {
    return { success: false, error: "SECTION_NOT_FOUND" };
  }

  const course = section.course;

  if (context.enrollments.some((item) => item.section.id === sectionId)) {
    return { success: false, error: "ALREADY_ENROLLED" };
  }

  if (context.enrollments.some((item) => item.course.id === course.id)) {
    return { success: false, error: "COURSE_ALREADY_SELECTED" };
  }

  if (section.enrolledCount >= section.capacity) {
    return { success: false, error: "SECTION_FULL" };
  }

  const prerequisiteIds = course.prerequisites.map((p) => p.requiredCourseId);
  const metPrerequisites = prerequisiteIds.every(
    (prereqId) =>
      context.completedCourseIds.includes(prereqId) ||
      context.enrollments.some((item) => item.course.id === prereqId),
  );

  if (!metPrerequisites) {
    return { success: false, error: "PREREQUISITE_NOT_MET" };
  }

  const totalUnits =
    context.enrollments.reduce((sum, item) => sum + item.course.units, 0) +
    course.units;

  if (totalUnits > ENROLLMENT_LIMITS.maxUnits) {
    return { success: false, error: "MAX_UNITS_EXCEEDED" };
  }

  const newSchedules = section.schedules.map((schedule) => ({
    day: schedule.day as ScheduleSlot["day"],
    startTime: schedule.startTime,
    endTime: schedule.endTime,
  }));

  for (const item of context.enrollments) {
    if (hasScheduleConflict(newSchedules, item.section.schedules)) {
      return { success: false, error: "SCHEDULE_CONFLICT" };
    }
  }

  try {
    await createEnrollment({
      studentId: context.student.id,
      sectionId,
      semesterId: context.semester.id,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.message === "SECTION_FULL") {
      return { success: false, error: "SECTION_FULL" };
    }
    throw error;
  }
}

export async function dropEnrollment(
  userId: string,
  enrollmentId: string,
): Promise<
  | { success: true }
  | { success: false; error: EnrollmentValidationError }
> {
  const context = await getEnrollmentContext(userId);

  if (!context.summary.isEnrollmentOpen) {
    return { success: false, error: "ENROLLMENT_CLOSED" };
  }

  try {
    await dropEnrollmentById(enrollmentId, context.student.id);
    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.message === "ENROLLMENT_NOT_FOUND") {
      return { success: false, error: "ENROLLMENT_NOT_FOUND" };
    }
    throw error;
  }
}

export async function confirmEnrollments(userId: string): Promise<
  | { success: true }
  | { success: false; error: EnrollmentValidationError }
> {
  const context = await getEnrollmentContext(userId);

  if (!context.summary.isEnrollmentOpen) {
    return { success: false, error: "ENROLLMENT_CLOSED" };
  }

  const pendingEnrollments = context.enrollments.filter(
    (item) => item.enrollment.status === "PENDING",
  );

  if (pendingEnrollments.length === 0) {
    return { success: false, error: "ENROLLMENT_NOT_FOUND" };
  }

  const pendingUnits = pendingEnrollments.reduce(
    (sum, item) => sum + item.course.units,
    0,
  );

  if (pendingUnits < ENROLLMENT_LIMITS.minUnits) {
    return { success: false, error: "MIN_UNITS_NOT_MET" };
  }

  await confirmPendingEnrollments(context.student.id, context.semester.id);
  return { success: true };
}
