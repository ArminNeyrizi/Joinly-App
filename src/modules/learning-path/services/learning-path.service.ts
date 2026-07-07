import { NotFoundError } from "@/lib/errors";

import {
  findLearningPathBySlug,
  findLearningPathsByAcademy,
} from "../repository/learning-path.repository";
import type { LearningPath, LearningPathDetail } from "../types";

export async function getLearningPaths(academyId: string): Promise<LearningPath[]> {
  return findLearningPathsByAcademy(academyId);
}

export async function getLearningPathDetail(
  slug: string,
  academyId: string,
): Promise<LearningPathDetail> {
  const lp = await findLearningPathBySlug(slug, academyId);
  if (!lp) {
    throw new NotFoundError("LearningPath", `${academyId}/${slug}`);
  }
  return lp;
}
