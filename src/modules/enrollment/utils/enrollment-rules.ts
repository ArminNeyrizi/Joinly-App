import type { EnrollmentPageData } from "../types";

function hasScheduleConflict(
  a: { day: string; startTime: string; endTime: string }[],
  b: { day: string; startTime: string; endTime: string }[],
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

export type EnrollmentBlockReason =
  | "ENROLLMENT_CLOSED"
  | "SECTION_NOT_FOUND"
  | "ALREADY_ENROLLED"
  | "COURSE_ALREADY_SELECTED"
  | "SECTION_FULL"
  | "PREREQUISITE_NOT_MET"
  | "MAX_UNITS_EXCEEDED"
  | "SCHEDULE_CONFLICT";

export function canEnrollInSection(
  sectionId: string,
  data: EnrollmentPageData,
): EnrollmentBlockReason | null {
  const section = data.courses
    .flatMap((c) => c.sections)
    .find((s) => s.id === sectionId);
  if (!section) return "SECTION_NOT_FOUND";

  const course = data.courses.find((c) => c.id === section.courseId);
  if (!course) return "SECTION_NOT_FOUND";

  if (!data.summary.isEnrollmentOpen) return "ENROLLMENT_CLOSED";
  if (data.enrollments.some((e) => e.section.id === sectionId)) {
    return "ALREADY_ENROLLED";
  }
  if (data.enrollments.some((e) => e.course.id === course.id)) {
    return "COURSE_ALREADY_SELECTED";
  }
  if (section.enrolledCount >= section.capacity) return "SECTION_FULL";

  const metPrerequisites = course.prerequisiteIds.every(
    (prereqId) =>
      data.completedCourseIds.includes(prereqId) ||
      data.enrollments.some((e) => e.course.id === prereqId),
  );
  if (!metPrerequisites) return "PREREQUISITE_NOT_MET";

  if (data.summary.totalUnits + course.units > data.summary.maxUnits) {
    return "MAX_UNITS_EXCEEDED";
  }

  for (const item of data.enrollments) {
    if (hasScheduleConflict(section.schedules, item.section.schedules)) {
      return "SCHEDULE_CONFLICT";
    }
  }

  return null;
}
