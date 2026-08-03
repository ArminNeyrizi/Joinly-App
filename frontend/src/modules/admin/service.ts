import { getAuthUser } from "@/modules/auth/repository";

import {
  createCourse as createCourseRepo,
  createSection as createSectionRepo,
  deleteCourse as deleteCourseRepo,
  deleteSection as deleteSectionRepo,
  findAllCoursesForAdmin,
  findHoldEnrollments,
  isAdminUser,
  setEnrollmentStatus,
  updateCourse as updateCourseRepo,
  updateSection as updateSectionRepo,
} from "./repository";
import type {
  AdminCourseInput,
  AdminEnrollmentReview,
  AdminSectionInput,
} from "./types";

export async function requireAdmin() {
  const authUser = await getAuthUser();
  const isAdmin = await isAdminUser(authUser.id);
  if (!isAdmin) {
    throw new Error("FORBIDDEN");
  }
  return authUser;
}

export async function getPendingReviews(
  academyId?: string,
): Promise<AdminEnrollmentReview[]> {
  await requireAdmin();
  const records = await findHoldEnrollments(academyId);

  return records.map((r) => ({
    enrollment: {
      id: r.id,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
    },
    student: {
      id: r.student.id,
      firstName: r.student.firstName,
      lastName: r.student.lastName,
      email: r.student.email,
    },
    course: {
      id: r.section.course.id,
      code: r.section.course.code,
      name: r.section.course.name,
      units: r.section.course.units,
    },
    section: {
      id: r.section.id,
      sectionNumber: r.section.sectionNumber,
      instructor: r.section.instructor,
    },
    semester: {
      id: r.semester.id,
      name: r.semester.name,
    },
  }));
}

export async function approveEnrollment(enrollmentId: string) {
  const admin = await requireAdmin();
  await setEnrollmentStatus(enrollmentId, "APPROVED", admin.id);
}

export async function rejectEnrollment(enrollmentId: string, reason?: string) {
  const admin = await requireAdmin();
  await setEnrollmentStatus(enrollmentId, "REJECTED", admin.id, reason);
}

export async function getCourses(academyId?: string) {
  await requireAdmin();
  return findAllCoursesForAdmin(academyId);
}

export async function createCourse(input: AdminCourseInput) {
  await requireAdmin();
  return createCourseRepo(input);
}

export async function updateCourse(
  courseId: string,
  input: Partial<AdminCourseInput>,
) {
  await requireAdmin();
  return updateCourseRepo(courseId, input);
}

export async function deleteCourse(courseId: string) {
  await requireAdmin();
  return deleteCourseRepo(courseId);
}

export async function createSection(input: AdminSectionInput) {
  await requireAdmin();
  return createSectionRepo(input);
}

export async function updateSection(
  sectionId: string,
  input: { instructor?: string; capacity?: number },
) {
  await requireAdmin();
  return updateSectionRepo(sectionId, input);
}

export async function deleteSection(sectionId: string) {
  await requireAdmin();
  return deleteSectionRepo(sectionId);
}
