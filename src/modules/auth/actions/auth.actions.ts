"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";
import { logger } from "@/lib/logger";
import { apiError, apiSuccess } from "@/types/api";

import { signInSchema, signUpSchema } from "../validation";
import { getCurrentUser, signIn, signOut, signUp } from "../services/auth.service";

export async function signInAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = signInSchema.safeParse(raw);
  if (!parsed.success) {
    return apiError("INVALID_INPUT");
  }

  const result = await signIn(parsed.data);
  if (!result.success) {
    return apiError(result.error);
  }

  return apiSuccess(null, "SIGNED_IN");
}

export async function signUpAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };

  const parsed = signUpSchema.safeParse(raw);
  if (!parsed.success) {
    return apiError("INVALID_INPUT");
  }

  const result = await signUp(parsed.data);
  if (!result.success) {
    return apiError(result.error);
  }

  // After successful signup, we need to create the Student record.
  // For now we default to Oper Academy — in a multi-academy setup this
  // would be determined by the registration flow (invite link, subdomain, etc.)
  try {
    const academy = await prisma.academy.findFirst({
      orderBy: { createdAt: "asc" },
    });

    if (academy) {
      await prisma.student.create({
        data: {
          userId: result.data.id,
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName,
          email: parsed.data.email,
          academyId: academy.id,
        },
      });

      logger.info("Student profile created after signup", {
        userId: result.data.id,
      });
    }
  } catch (error) {
    // Student creation failure is logged but doesn't break the signup.
    // The user can still log in; profile creation can be retried.
    logger.error("Failed to create student profile after signup", {
      userId: result.data.id,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  return apiSuccess(null, "SIGNED_UP");
}

export async function signOutAction() {
  await signOut();
  redirect("/fa/auth/login");
}

export async function getCurrentUserAction() {
  const user = await getCurrentUser();
  return apiSuccess(user);
}
