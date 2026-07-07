import { NotFoundError } from "@/lib/errors";

import {
  findCourseById,
  findCoursesByAcademy,
  findCoursesWithSectionsByAcademy,
} from "../repository/course.repository";
import type { Course, CourseDetail, CourseWithSections } from "../types";

export async function getCourseList(academyId: string): Promise<Course[]> {
  return findCoursesByAcademy(academyId);
}

export async function getCourseListWithSections(
  academyId: string,
  semesterId: string,
): Promise<CourseWithSections[]> {
  return findCoursesWithSectionsByAcademy(academyId, semesterId);
}

export async function getCourseDetail(courseId: string): Promise<CourseDetail> {
  const course = await findCourseById(courseId);
  if (!course) {
    throw new NotFoundError("Course", courseId);
  }
  return course;
}
