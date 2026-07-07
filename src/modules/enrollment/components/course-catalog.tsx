"use client";

import { useMemo, useState, useTransition } from "react";
import { BookOpen, Clock, Search, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { enrollInSectionAction } from "../actions/enrollment.actions";
import { canEnrollInSection } from "../utils/enrollment-rules";
import type { CourseWithSections, EnrollmentPageData } from "../types";

type Props = {
  data: EnrollmentPageData;
  onUpdate: (data: EnrollmentPageData) => void;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
};

// نگاشت روزهای هفته
const dayMap: Record<string, string> = {
  saturday: "شنبه", sunday: "یک‌شنبه", monday: "دوشنبه",
  tuesday: "سه‌شنبه", wednesday: "چهارشنبه", thursday: "پنج‌شنبه", friday: "جمعه"
};

export function CourseCatalog({ data, onUpdate, onError, onSuccess }: Props) {
  const [search, setSearch] = useState("");
  const [pathFilter, setPathFilter] = useState<string>("all");
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const enrolledSectionIds = useMemo(
    () => new Set(data.enrollments.map((e) => e.section.id)),
    [data.enrollments],
  );

  const filteredCourses = useMemo(() => {
    return data.courses.filter((course) => {
      const matchesSearch =
        search === "" ||
        course.name.includes(search) ||
        course.code.toLowerCase().includes(search.toLowerCase());
      const matchesPath =
        pathFilter === "all" || course.learningPathId === pathFilter;
      return matchesSearch && matchesPath;
    });
  }, [data.courses, search, pathFilter]);

  function handleEnroll(sectionId: string) {
    setPendingSection(sectionId);
    startTransition(async () => {
      const result = await enrollInSectionAction(sectionId);
      setPendingSection(null);
      if (result.success) {
        onUpdate(result.data);
        onSuccess("درس با موفقیت انتخاب شد");
      } else {
        // مدیریت خطاهای ثابت
        onError("خطایی در انتخاب واحد رخ داد. دوباره تلاش کنید");
      }
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="جستجوی دروس..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-lg border border-border/50 bg-card/50 ps-9 pe-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>
        <select
          value={pathFilter}
          onChange={(e) => setPathFilter(e.target.value)}
          className="h-9 rounded-lg border border-border/50 bg-card/50 px-3 text-sm outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
        >
          <option value="all">همه گرایش‌ها</option>
          {data.learningPaths.map((path) => (
            <option key={path.id} value={path.id}>
              {path.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            data={data}
            enrolledSectionIds={enrolledSectionIds}
            pendingSection={pendingSection}
            isPending={isPending}
            onEnroll={handleEnroll}
          />
        ))}
      </div>
    </div>
  );
}

type CourseCardProps = {
  course: CourseWithSections;
  data: EnrollmentPageData;
  enrolledSectionIds: Set<string>;
  pendingSection: string | null;
  isPending: boolean;
  onEnroll: (sectionId: string) => void;
};

function CourseCard({
  course,
  data,
  enrolledSectionIds,
  pendingSection,
  isPending,
  onEnroll,
}: CourseCardProps) {

  const prerequisiteNames = course.prerequisiteIds
    .map((id) => data.courses.find((c) => c.id === id)?.name)
    .filter(Boolean);

  const hasMissingPrerequisite = course.prerequisiteIds.some(
    (id) =>
      !data.completedCourseIds.includes(id) &&
      !data.enrollments.some((e) => e.course.id === id),
  );

  return (
    <Card className="border-border/50 bg-card/50 transition-colors hover:border-purple-500/20 hover:bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-base">{course.name}</CardTitle>
            <CardDescription className="mt-1 font-mono text-xs">
              {course.code}
            </CardDescription>
          </div>
          <span className="shrink-0 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-300">
            {course.units} واحد
          </span>
        </div>
        {course.description && (
          <p className="text-sm text-muted-foreground">{course.description}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="size-3.5" />
          <span>
            پیش‌نیازها: {prerequisiteNames.length > 0 ? prerequisiteNames.join("، ") : "ندارد"}
          </span>
        </div>

        {hasMissingPrerequisite && (
          <p className="text-xs text-amber-400">پیش‌نیازهای این درس را نگذرانده‌اید</p>
        )}

        <div className="space-y-2">
          {course.sections.map((section) => {
            const isEnrolled = enrolledSectionIds.has(section.id);
            const spotsLeft = section.capacity - section.enrolledCount;
            const isFull = spotsLeft <= 0;
            const blockReason = canEnrollInSection(section.id, data);
            const isDisabled =
              isEnrolled || isFull || blockReason !== null || !data.summary.isEnrollmentOpen;

            return (
              <div
                key={section.id}
                className={cn(
                  "flex flex-col gap-3 rounded-lg border border-border/40 p-3 sm:flex-row sm:items-center sm:justify-between",
                  isEnrolled && "border-purple-500/30 bg-purple-500/5",
                )}
              >
                <div className="space-y-1.5 text-sm">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="size-3.5" />
                      گروه {section.sectionNumber}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <User className="size-3.5" />
                      {section.instructor}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="size-3.5" />
                      {isFull ? "تکمیل شده" : `${spotsLeft} ظرفیت`}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.schedules.map((slot, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        <Clock className="size-3" />
                        {dayMap[slot.day] || slot.day} {slot.startTime}-{slot.endTime}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant={isEnrolled ? "secondary" : "default"}
                  disabled={isDisabled || (isPending && pendingSection === section.id)}
                  onClick={() => onEnroll(section.id)}
                  className={cn(
                    !isEnrolled &&
                      !isDisabled &&
                      "bg-gradient-to-l from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500",
                  )}
                >
                  {isEnrolled ? "انتخاب‌شده" : "انتخاب گروه"}
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}