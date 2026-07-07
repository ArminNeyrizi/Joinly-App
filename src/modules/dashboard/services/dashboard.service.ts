import { NotFoundError } from "@/lib/errors";

import { findDashboardDataByUserId } from "../repository/dashboard.repository";
import type { DashboardData } from "../types";

export async function getDashboardData(userId: string): Promise<DashboardData> {
  const data = await findDashboardDataByUserId(userId);
  if (!data) {
    throw new NotFoundError("Student dashboard profile", userId);
  }
  return data;
}
