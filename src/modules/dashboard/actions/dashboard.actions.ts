"use server";

import { getAuthUser } from "@/modules/auth/repository/auth.repository";
import { NotFoundError } from "@/lib/errors";
import { apiError, apiSuccess } from "@/types/api";

import { getDashboardData } from "../services/dashboard.service";

export async function getDashboardDataAction() {
  try {
    const authUser = await getAuthUser();
    const data = await getDashboardData(authUser.id);
    return apiSuccess(data);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return apiError("STUDENT_NOT_FOUND");
    }
    // UnauthorizedError or other errors
    return apiError("UNAUTHORIZED");
  }
}
