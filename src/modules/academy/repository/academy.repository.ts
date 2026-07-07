import { prisma } from "@/lib/db";

import type { Academy, AcademyWithStats } from "../types";

function mapAcademy(academy: {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}): Academy {
  return {
    id: academy.id,
    slug: academy.slug,
    name: academy.name,
    description: academy.description ?? undefined,
    createdAt: academy.createdAt.toISOString(),
    updatedAt: academy.updatedAt.toISOString(),
  };
}

export async function findAllAcademies(): Promise<Academy[]> {
  const academies = await prisma.academy.findMany({
    orderBy: { name: "asc" },
  });
  return academies.map(mapAcademy);
}

export async function findAcademyBySlug(slug: string): Promise<Academy | null> {
  const academy = await prisma.academy.findUnique({ where: { slug } });
  return academy ? mapAcademy(academy) : null;
}

export async function findAcademyById(id: string): Promise<Academy | null> {
  const academy = await prisma.academy.findUnique({ where: { id } });
  return academy ? mapAcademy(academy) : null;
}

export async function findAcademiesWithStats(): Promise<AcademyWithStats[]> {
  const academies = await prisma.academy.findMany({
    include: {
      _count: {
        select: {
          courses: true,
          students: true,
          learningPaths: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return academies.map((a) => ({
    ...mapAcademy(a),
    courseCount: a._count.courses,
    studentCount: a._count.students,
    learningPathCount: a._count.learningPaths,
  }));
}
