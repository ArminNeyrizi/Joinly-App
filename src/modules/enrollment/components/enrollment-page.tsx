"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CalendarDays, CheckCircle2, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import type { EnrollmentPageData } from "../types";
import { CourseCatalog } from "./course-catalog";
import { SelectedCourses } from "./selected-courses";
import { UnitProgress } from "./unit-progress";

type Props = {
  initialData: EnrollmentPageData;
  locale: string;
};

type Tab = "catalog" | "selected";

export function EnrollmentPage({ initialData, locale }: Props) {
  const t = useTranslations("enrollment");
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState<Tab>("catalog");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function showToast(type: "success" | "error", message: string) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  }

  const enrollmentEndDate = new Date(data.summary.semester.enrollmentEnd).toLocaleDateString(
    locale === "fa" ? "fa-IR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-1 text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-3 py-1 text-muted-foreground">
          <CalendarDays className="size-3.5" />
          {t("semester")}: {data.summary.semester.name}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs",
            data.summary.isEnrollmentOpen
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400",
          )}
        >
          {data.summary.isEnrollmentOpen
            ? t("enrollmentOpen", { date: enrollmentEndDate })
            : t("enrollmentClosed")}
        </span>
      </div>

      <UnitProgress
        current={data.summary.totalUnits}
        max={data.summary.maxUnits}
        min={data.summary.minUnits}
        label={t("unitsProgress", {
          current: data.summary.totalUnits,
          max: data.summary.maxUnits,
        })}
        minLabel={t("minUnits", { min: data.summary.minUnits })}
      />

      <div className="flex gap-1 rounded-lg border border-border/50 bg-card/30 p-1">
        {(["catalog", "selected"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab
                ? "bg-purple-500/10 text-purple-300"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t(`tabs.${tab}`)}
            {tab === "selected" && data.enrollments.length > 0 && (
              <span className="ms-1.5 rounded-full bg-purple-500/20 px-1.5 py-0.5 text-xs">
                {data.enrollments.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeTab === "catalog" ? (
        <CourseCatalog
          data={data}
          onUpdate={setData}
          onError={(msg) => showToast("error", msg)}
          onSuccess={(msg) => {
            showToast("success", msg);
            setActiveTab("selected");
          }}
        />
      ) : (
        <SelectedCourses
          data={data}
          onUpdate={setData}
          onError={(msg) => showToast("error", msg)}
          onSuccess={(msg) => showToast("success", msg)}
        />
      )}

      {toast && (
        <div
          className={cn(
            "fixed bottom-6 start-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl border px-4 py-3 text-sm shadow-lg backdrop-blur-xl rtl:translate-x-1/2",
            toast.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/30 bg-red-500/10 text-red-300",
          )}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="size-4" />
          ) : (
            <XCircle className="size-4" />
          )}
          {toast.message}
        </div>
      )}
    </div>
  );
}
