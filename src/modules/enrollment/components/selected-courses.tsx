"use client";

import { useState, useTransition } from "react";
import { Clock, Trash2, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  confirmEnrollmentAction,
  dropEnrollmentAction,
} from "../actions/enrollment.actions";
import type { EnrollmentPageData } from "../types";

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

export function SelectedCourses({
  data,
  onUpdate,
  onError,
  onSuccess,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [droppingId, setDroppingId] = useState<string | null>(null);

  const pendingCount = data.enrollments.filter(
    (e) => e.enrollment.status === "PENDING",
  ).length;

  function handleDrop(enrollmentId: string) {
    setDroppingId(enrollmentId);
    startTransition(async () => {
      const result = await dropEnrollmentAction(enrollmentId);
      setDroppingId(null);
      if (result.success) {
        onUpdate(result.data);
        onSuccess("درس با موفقیت حذف شد");
      } else {
        onError("خطایی در حذف درس رخ داد");
      }
    });
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await confirmEnrollmentAction();
      if (result.success) {
        onUpdate(result.data);
        onSuccess("انتخاب واحد با موفقیت تأیید شد");
      } else {
        onError("خطایی در تأیید نهایی رخ داد");
      }
    });
  }

  if (data.enrollments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/50 py-16 text-center">
        <p className="text-muted-foreground">هنوز درسی انتخاب نکرده‌اید</p>
        <p className="mt-1 text-sm text-muted-foreground/70">
          برای شروع، از لیست دروس، گروه‌های مورد نظر خود را اضافه کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.enrollments.map((item) => (
        <Card
          key={item.enrollment.id}
          className="border-border/50 bg-card/50"
        >
          <CardHeader className="flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-base">{item.course.name}</CardTitle>
              <CardDescription className="font-mono text-xs">
                {item.course.code} · گروه {item.section.sectionNumber}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  item.enrollment.status === "CONFIRMED"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400",
                )}
              >
                {item.enrollment.status === "CONFIRMED"
                  ? "تأیید شده"
                  : "در انتظار تأیید"}
              </span>
              {item.enrollment.status === "PENDING" &&
                data.summary.isEnrollmentOpen && (
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    disabled={isPending && droppingId === item.enrollment.id}
                    onClick={() => handleDrop(item.enrollment.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                )}
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="size-3.5" />
              {item.section.instructor}
            </div>
            <div className="flex flex-wrap gap-2">
              {item.section.schedules.map((slot, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-md bg-muted/50 px-2 py-0.5 text-xs"
                >
                  <Clock className="size-3" />
                  {dayMap[slot.day] || slot.day} {slot.startTime}-{slot.endTime}
                </span>
              ))}
            </div>
            <p className="text-xs text-purple-300">
              {item.course.units} واحد
            </p>
          </CardContent>
        </Card>
      ))}

      <div className="sticky bottom-4 rounded-xl border border-border/50 bg-card/90 p-4 backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">مجموع واحدها</span>
          <span className="font-semibold">{data.summary.totalUnits}</span>
        </div>
        {pendingCount > 0 && data.summary.isEnrollmentOpen && (
          <Button
            className="w-full bg-gradient-to-l from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500"
            disabled={isPending}
            onClick={handleConfirm}
          >
            {isPending ? "در حال تأیید..." : "تأیید نهایی انتخاب واحد"}
          </Button>
        )}
      </div>
    </div>
  );
}