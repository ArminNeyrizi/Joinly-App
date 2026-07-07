"use server";

import { revalidatePath } from "next/cache";

import { getAuthUser } from "@/modules/auth/repository/auth.repository";
import { apiError, apiSuccess } from "@/types/api";

import {
  confirmEnrollments,
  dropEnrollment,
  enrollInSection,
  getEnrollmentPageData,
} from "../services/enrollment.service";
import {
  confirmEnrollmentSchema,
  dropEnrollmentSchema,
  enrollSectionSchema,
} from "../validation";

export async function getEnrollmentDataAction() {
  try {
    const authUser = await getAuthUser();
    return apiSuccess(await getEnrollmentPageData(authUser.id));
  } catch (error) {
    return apiError("UNAUTHORIZED");
  }
}

export async function enrollInSectionAction(sectionId: string) {
  const parsed = enrollSectionSchema.safeParse({ sectionId });
  if (!parsed.success) {
    return apiError("INVALID_INPUT");
  }

  try {
    const authUser = await getAuthUser();
    const result = await enrollInSection(authUser.id, parsed.data.sectionId);
    if (!result.success) {
      return apiError(result.error);
    }

    revalidatePath("/[locale]/enrollment", "page");
    return apiSuccess(await getEnrollmentPageData(authUser.id), "ENROLLED");
  } catch (error) {
    return apiError("UNAUTHORIZED");
  }
}

export async function dropEnrollmentAction(enrollmentId: string) {
  const parsed = dropEnrollmentSchema.safeParse({ enrollmentId });
  if (!parsed.success) {
    return apiError("INVALID_INPUT");
  }

  try {
    const authUser = await getAuthUser();
    const result = await dropEnrollment(authUser.id, parsed.data.enrollmentId);
    if (!result.success) {
      return apiError(result.error);
    }

    revalidatePath("/[locale]/enrollment", "page");
    return apiSuccess(await getEnrollmentPageData(authUser.id), "DROPPED");
  } catch (error) {
    return apiError("UNAUTHORIZED");
  }
}

export async function confirmEnrollmentAction() {
  const parsed = confirmEnrollmentSchema.safeParse({ enrollmentIds: ["all"] });
  if (!parsed.success) {
    return apiError("INVALID_INPUT");
  }

  try {
    const authUser = await getAuthUser();
    const result = await confirmEnrollments(authUser.id);
    if (!result.success) {
      return apiError(result.error);
    }

    revalidatePath("/[locale]/enrollment", "page");
    return apiSuccess(await getEnrollmentPageData(authUser.id), "CONFIRMED");
  } catch (error) {
    return apiError("UNAUTHORIZED");
  }
}
