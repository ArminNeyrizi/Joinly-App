"use server";

import { NotFoundError } from "@/lib/errors";
import { apiError, apiSuccess } from "@/types/api";

import {
  getAcademyById,
  getAcademyBySlug,
  getAcademyList,
} from "./service";

export async function getAcademyListAction() {
  const academies = await getAcademyList();
  return apiSuccess(academies);
}

export async function getAcademyBySlugAction(slug: string) {
  try {
    const academy = await getAcademyBySlug(slug);
    return apiSuccess(academy);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return apiError("ACADEMY_NOT_FOUND");
    }
    throw error;
  }
}

export async function getAcademyByIdAction(id: string) {
  try {
    const academy = await getAcademyById(id);
    return apiSuccess(academy);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return apiError("ACADEMY_NOT_FOUND");
    }
    throw error;
  }
}
