"use server";

import { revalidatePath } from "next/cache";

import { apiError, apiSuccess } from "@/types/api";

import {
  approveEnrollment,
  createCourse,
  deleteCourse,
  getCourses,
  getPendingReviews,
  rejectEnrollment,
  updateCourse,
} from "./service";
import { courseInputSchema, reviewEnrollmentSchema } from "./validation";

export async function getPendingReviewsAction() {
  try {
    return apiSuccess(await getPendingReviews());
  } catch {
    return apiError("UNAUTHORIZED");
  }
}

export async function approveEnrollmentAction(enrollmentId: string) {
  const parsed = reviewEnrollmentSchema.safeParse({ enrollmentId });
  if (!parsed.success) return apiError("INVALID_INPUT");

  try {
    await approveEnrollment(parsed.data.enrollmentId);
    revalidatePath("/admin/enrollments", "page");
    return apiSuccess(await getPendingReviews(), "APPROVED");
  } catch {
    return apiError("UNAUTHORIZED");
  }
}

export async function rejectEnrollmentAction(
  enrollmentId: string,
  reason?: string,
) {
  const parsed = reviewEnrollmentSchema.safeParse({ enrollmentId, reason });
  if (!parsed.success) return apiError("INVALID_INPUT");

  try {
    await rejectEnrollment(parsed.data.enrollmentId, parsed.data.reason);
    revalidatePath("/admin/enrollments", "page");
    return apiSuccess(await getPendingReviews(), "REJECTED");
  } catch {
    return apiError("UNAUTHORIZED");
  }
}

export async function getCoursesAction(academyId?: string) {
  try {
    return apiSuccess(await getCourses(academyId));
  } catch {
    return apiError("UNAUTHORIZED");
  }
}

export async function createCourseAction(input: unknown) {
  const parsed = courseInputSchema.safeParse(input);
  if (!parsed.success) return apiError("INVALID_INPUT");

  try {
    await createCourse(parsed.data);
    revalidatePath("/admin/courses", "page");
    return apiSuccess(await getCourses(), "CREATED");
  } catch {
    return apiError("UNAUTHORIZED");
  }
}

export async function updateCourseAction(courseId: string, input: unknown) {
  const parsed = courseInputSchema.partial().safeParse(input);
  if (!parsed.success) return apiError("INVALID_INPUT");

  try {
    await updateCourse(courseId, parsed.data);
    revalidatePath("/admin/courses", "page");
    return apiSuccess(await getCourses(), "UPDATED");
  } catch {
    return apiError("UNAUTHORIZED");
  }
}

export async function deleteCourseAction(courseId: string) {
  try {
    await deleteCourse(courseId);
    revalidatePath("/admin/courses", "page");
    return apiSuccess(await getCourses(), "DELETED");
  } catch {
    return apiError("UNAUTHORIZED");
  }
}
