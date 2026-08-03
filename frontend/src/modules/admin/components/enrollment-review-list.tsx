"use client";

import { useMemo, useState, useTransition } from "react";
import { Check, Clock, Mail, X } from "lucide-react";

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
  approveEnrollmentAction,
  rejectEnrollmentAction,
} from "../actions";
import type { AdminEnrollmentReview } from "../types";

type Props = {
  initialReviews: AdminEnrollmentReview[];
};

export function EnrollmentReviewList({ initialReviews }: Props) {
  const [reviews, setReviews] = useState(initialReviews);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [isPending, startTransition] = useTransition();

  const grouped = useMemo(() => {
    const map = new Map<string, AdminEnrollmentReview[]>();
    for (const review of reviews) {
      const key = `${review.student.id}`;
      map.set(key, [...(map.get(key) ?? []), review]);
    }
    return Array.from(map.values());
  }, [reviews]);

  function handleApprove(enrollmentId: string) {
    setBusyId(enrollmentId);
    startTransition(async () => {
      const result = await approveEnrollmentAction(enrollmentId);
      setBusyId(null);
      if (result.success) {
        setReviews(result.data);
      }
    });
  }

  function handleReject(enrollmentId: string) {
    setBusyId(enrollmentId);
    startTransition(async () => {
      const result = await rejectEnrollmentAction(enrollmentId, rejectReason || undefined);
      setBusyId(null);
      setRejectingId(null);
      setRejectReason("");
      if (result.success) {
        setReviews(result.data);
      }
    });
  }

  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/50 py-16 text-center">
        <p className="text-muted-foreground">موردی در انتظار تایید نیست</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {grouped.map((studentReviews) => {
        const student = studentReviews[0].student;
        return (
          <div key={student.id} className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">
                {student.firstName} {student.lastName}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Mail className="size-3.5" />
                {student.email}
              </span>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
                {studentReviews.length} درس در انتظار
              </span>
            </div>

            <div className="grid gap-3">
              {studentReviews.map((review) => {
                const id = review.enrollment.id;
                const isBusy = isPending && busyId === id;
                const isRejecting = rejectingId === id;

                return (
                  <Card key={id} className="border-border/50 bg-card/50">
                    <CardHeader className="flex-row items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-base">{review.course.name}</CardTitle>
                        <CardDescription className="font-mono text-xs">
                          {review.course.code} · گروه {review.section.sectionNumber} ·{" "}
                          {review.section.instructor}
                        </CardDescription>
                      </div>
                      <span className="shrink-0 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs text-purple-300">
                        {review.course.units} واحد
                      </span>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="size-3.5" />
                        {review.semester.name}
                      </div>

                      {isRejecting ? (
                        <div className="space-y-2">
                          <input
                            autoFocus
                            type="text"
                            placeholder="دلیل رد (اختیاری)..."
                            value={rejectReason}
                            onChange={(e) => setRejectReason(e.target.value)}
                            className="h-9 w-full rounded-lg border border-border/50 bg-card/50 px-3 text-sm outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20"
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="destructive"
                              disabled={isBusy}
                              onClick={() => handleReject(id)}
                            >
                              تایید رد درس
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                setRejectingId(null);
                                setRejectReason("");
                              }}
                            >
                              انصراف
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            disabled={isBusy}
                            onClick={() => handleApprove(id)}
                            className={cn(
                              "bg-gradient-to-l from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400",
                            )}
                          >
                            <Check className="size-4" />
                            تایید
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={isBusy}
                            onClick={() => setRejectingId(id)}
                            className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
                          >
                            <X className="size-4" />
                            رد
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
