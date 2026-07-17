import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { EnrollmentPage } from "@/modules/enrollment/components/enrollment-page";
import { getEnrollmentPageData } from "@/modules/enrollment/service";
import { getAuthUser } from "@/modules/auth/repository";

export const metadata = {
  title: "انتخاب واحد",
};

export default async function EnrollmentRoute() {
  let data;
  try {
    const authUser = await getAuthUser();
    data = await getEnrollmentPageData(authUser.id);
  } catch (error) {
    // اصلاح مسیر ریدایرکت
    redirect("/auth/login");
  }

  return (
    <AppShell currentPath="enrollment">
      <EnrollmentPage initialData={data} />
    </AppShell>
  );
}