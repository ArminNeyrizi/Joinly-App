"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import type { AdminEnrollmentReview } from "../types";
import { CourseManager } from "./course-manager";
import { EnrollmentReviewList } from "./enrollment-review-list";

type Props = {
  initialReviews: AdminEnrollmentReview[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialCourses: any[];
  academies: { id: string; name: string }[];
};

type Tab = "reviews" | "courses";

export function AdminDashboard({ initialReviews, initialCourses, academies }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("reviews");

  const tabs: { key: Tab; label: string }[] = [
    { key: "reviews", label: "در انتظار تایید" },
    { key: "courses", label: "مدیریت دروس" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">داشبورد ادمین</h1>
        <p className="mt-1 text-muted-foreground">تایید انتخاب واحد و مدیریت دروس</p>
      </div>

      <div className="flex gap-1 rounded-lg border border-border/50 bg-card/30 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.key
                ? "bg-purple-500/10 text-purple-300"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
            {tab.key === "reviews" && initialReviews.length > 0 && (
              <span className="ms-1.5 rounded-full bg-amber-500/20 px-1.5 py-0.5 text-xs">
                {initialReviews.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeTab === "reviews" ? (
        <EnrollmentReviewList initialReviews={initialReviews} />
      ) : (
        <CourseManager initialCourses={initialCourses} academies={academies} />
      )}
    </div>
  );
}
