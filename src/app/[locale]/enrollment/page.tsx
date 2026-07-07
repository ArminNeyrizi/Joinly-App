import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { EnrollmentPage } from "@/modules/enrollment/components/enrollment-page";
import { getEnrollmentPageData } from "@/modules/enrollment/services/enrollment.service";
import { getAuthUser } from "@/modules/auth/repository/auth.repository";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "enrollment" });

  return {
    title: t("title"),
  };
}

export default async function EnrollmentRoute({ params }: Props) {
  const { locale } = await params;

  let data;
  try {
    const authUser = await getAuthUser();
    data = await getEnrollmentPageData(authUser.id);
  } catch (error) {
    redirect(`/${locale}/auth/login`);
  }

  return (
    <AppShell locale={locale} currentPath="enrollment">
      <EnrollmentPage initialData={data} locale={locale} />
    </AppShell>
  );
}
