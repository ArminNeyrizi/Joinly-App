"use server";

import { NotFoundError } from "@/lib/errors";
import { apiError, apiSuccess } from "@/types/api";

import { getLearningPathDetail, getLearningPaths } from "../services/learning-path.service";

export async function getLearningPathsAction(academyId: string) {
  const paths = await getLearningPaths(academyId);
  return apiSuccess(paths);
}

export async function getLearningPathDetailAction(
  slug: string,
  academyId: string,
) {
  try {
    const path = await getLearningPathDetail(slug, academyId);
    return apiSuccess(path);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return apiError("LEARNING_PATH_NOT_FOUND");
    }
    throw error;
  }
}
