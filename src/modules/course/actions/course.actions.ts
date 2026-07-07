"use server";

import { NotFoundError } from "@/lib/errors";
import { apiError, apiSuccess } from "@/types/api";

import {
  getCourseDetail,
  getCourseList,
  getCourseListWithSections,
} from "../services/course.service";

export async function getCourseListAction(academyId: string) {
  const courses = await getCourseList(academyId);
  return apiSuccess(courses);
}

export async function getCourseListWithSectionsAction(
  academyId: string,
  semesterId: string,
) {
  const courses = await getCourseListWithSections(academyId, semesterId);
  return apiSuccess(courses);
}

export async function getCourseDetailAction(courseId: string) {
  try {
    const course = await getCourseDetail(courseId);
    return apiSuccess(course);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return apiError("COURSE_NOT_FOUND");
    }
    throw error;
  }
}
