import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";

import { AdminDashboard } from "@/modules/admin/components/admin-dashboard";
import { getCourses, getPendingReviews, requireAdmin } from "@/modules/admin/service";

// مسیر: src/app/admin/page.tsx
export default async function AdminPage() {
  try {
    await requireAdmin();
  } catch {
    redirect("/");
  }

  const [reviews, courses, academies] = await Promise.all([
    getPendingReviews(),
    getCourses(),
    prisma.academy.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <AdminDashboard
      initialReviews={reviews}
      initialCourses={courses}
      academies={academies.map((a) => ({ id: a.id, name: a.name }))}
    />
  );
}
