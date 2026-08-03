import { logger } from "@/lib/logger";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import type { AuthError, AuthUser, SignInInput, SignUpInput } from "./types";

type AuthResult<T> =
  | { success: true; data: T }
  | { success: false; error: AuthError };

/**
 * Signs in a user with email and password via Supabase Auth.
 */
export async function signIn(
  input: SignInInput,
): Promise<AuthResult<AuthUser>> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });

  if (error || !data.user || !data.user.email) {
    logger.warn("Sign in failed", { email: input.email, error: error?.message });
    return { success: false, error: "INVALID_CREDENTIALS" };
  }

  logger.info("User signed in", { userId: data.user.id });

  return {
    success: true,
    data: { id: data.user.id, email: data.user.email },
  };
}

/**
 * Registers a new user via Supabase Auth.
 * The Student record is created separately after successful signup.
 */
export async function signUp(
  input: SignUpInput,
): Promise<AuthResult<AuthUser>> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        first_name: input.firstName,
        last_name: input.lastName,
      },
    },
  });

  if (error) {
    logger.warn("Sign up failed", { email: input.email, error: error.message });

    if (error.message.toLowerCase().includes("already")) {
      return { success: false, error: "EMAIL_ALREADY_IN_USE" };
    }

    return { success: false, error: "SESSION_ERROR" };
  }

  if (!data.user || !data.user.email) {
    return { success: false, error: "SESSION_ERROR" };
  }

  logger.info("New user registered", { userId: data.user.id });

  return {
    success: true,
    data: { id: data.user.id, email: data.user.email },
  };
}

/**
 * Signs out the current user.
 */
export async function signOut(): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  logger.info("User signed out");
}

/**
 * Returns the current user session, or null if not authenticated.
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) return null;

  return { id: user.id, email: user.email };
}
