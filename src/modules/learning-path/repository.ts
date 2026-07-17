import { prisma } from "@/lib/db";

import type { LearningPath, LearningPathDetail } from "./types";

function mapLearningPath(lp: {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  academyId: string;
  createdAt: Date;
  updatedAt: Date;
}): LearningPath {
  return {
    id: lp.id,
    slug: lp.slug,
    name: lp.name,
    description: lp.description ?? undefined,
    academyId: lp.academyId,
    createdAt: lp.createdAt.toISOString(),
    updatedAt: lp.updatedAt.toISOString(),
  };
}

export async function findLearningPathsByAcademy(
  academyId: string,
): Promise<LearningPath[]> {
  const paths = await prisma.learningPath.findMany({
    where: { academyId },
    orderBy: { name: "asc" },
  });
  return paths.map(mapLearningPath);
}

export async function findLearningPathBySlug(
  slug: string,
  academyId: string,
): Promise<LearningPathDetail | null> {
  const lp = await prisma.learningPath.findUnique({
    where: { academyId_slug: { academyId, slug } },
    include: {
      courses: {
        include: {
          prerequisites: { select: { requiredCourseId: true } },
        },
        orderBy: { code: "asc" },
      },
    },
  });

  if (!lp) return null;

  return {
    ...mapLearningPath(lp),
    courses: lp.courses.map((course) => ({
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
    })),
  };
}
