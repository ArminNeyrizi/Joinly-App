import { prisma } from "@/lib/db";
import { UnauthorizedError } from "@/lib/errors";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import type { AuthUser } from "./types";

/**
 * Returns the currently authenticated Supabase user.
 * Throws UnauthorizedError if not authenticated.
 */
export async function getAuthUser(): Promise<AuthUser> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user || !user.email) {
    throw new UnauthorizedError();
  }

  return {
    id: user.id,
    email: user.email,
  };
}

/**
 * Returns the Prisma Student record for the current authenticated user.
 * Throws UnauthorizedError if no student profile is found.
 */
export async function getAuthStudent() {
  const authUser = await getAuthUser();

  const student = await prisma.student.findUnique({
    where: { userId: authUser.id },
    include: { academy: true },
  });

  if (!student) {
    throw new UnauthorizedError("No student profile found for this user");
  }

  return student;
}
