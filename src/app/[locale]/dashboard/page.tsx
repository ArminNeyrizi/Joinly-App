import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BookOpen, GraduationCap } from "lucide-react";
import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDashboardData } from "@/modules/dashboard/services/dashboard.service";
import { getAuthUser } from "@/modules/auth/repository/auth.repository";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "dashboard" });

  return {
    title: t("title"),
  };
}

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("dashboard");

  let dashboardData;
  try {
    const authUser = await getAuthUser();
    dashboardData = await getDashboardData(authUser.id);
  } catch (error) {
    // If not authenticated, redirect to login
    redirect(`/${locale}/auth/login`);
  }

  const firstName = dashboardData.studentName.split(" ")[0] || dashboardData.studentName;

  return (
    <AppShell locale={locale} currentPath="dashboard">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t("welcome", { name: firstName })}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardDescription>{t("currentSemester")}</CardDescription>
              <CardTitle className="text-lg">{dashboardData.stats.currentSemesterName}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardDescription>{t("enrolledCourses")}</CardDescription>
              <CardTitle className="text-lg">{dashboardData.stats.enrolledCoursesCount}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardDescription>{t("totalUnits")}</CardDescription>
              <CardTitle className="text-lg">{dashboardData.stats.totalUnitsCount}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <GraduationCap className="size-5 text-purple-400" />
              {t("quickActions")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              nativeButton={false}
              render={<Link href={`/${locale}/enrollment`} />}
              className="bg-gradient-to-l from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500"
            >
              <BookOpen className="size-4" />
              {t("goToEnrollment")}
            </Button>
          </CardContent>
        </Card>

        {dashboardData.activeEnrollments.length > 0 && (
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">{t("enrolledCourses")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {dashboardData.activeEnrollments.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2 text-sm"
                >
                  <span>{item.courseName}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.courseUnits} {locale === "fa" ? "واحد" : "units"}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
