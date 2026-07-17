import { NotFoundError } from "@/lib/errors";

import {
  findAcademiesWithStats,
  findAcademyById,
  findAcademyBySlug,
} from "./repository";
import type { Academy, AcademyWithStats } from "./types";

export async function getAcademyList(): Promise<AcademyWithStats[]> {
  return findAcademiesWithStats();
}

export async function getAcademyBySlug(slug: string): Promise<Academy> {
  const academy = await findAcademyBySlug(slug);
  if (!academy) {
    throw new NotFoundError("Academy", slug);
  }
  return academy;
}

export async function getAcademyById(id: string): Promise<Academy> {
  const academy = await findAcademyById(id);
  if (!academy) {
    throw new NotFoundError("Academy", id);
  }
  return academy;
}
