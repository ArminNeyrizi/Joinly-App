"use client";

import { cn } from "@/lib/utils";

type Props = {
  current: number;
  max: number;
  min: number;
  label: string;
  minLabel: string;
};

export function UnitProgress({ current, max, min, label, minLabel }: Props) {
  const percentage = Math.min((current / max) * 100, 100);
  const isBelowMin = current > 0 && current < min;

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span
          className={cn(
            "font-medium",
            isBelowMin ? "text-amber-400" : "text-foreground",
          )}
        >
          {current} / {max}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            isBelowMin
              ? "bg-amber-500/80"
              : "bg-gradient-to-l from-purple-500 to-indigo-500",
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {isBelowMin && (
        <p className="mt-2 text-xs text-amber-400/80">{minLabel}</p>
      )}
    </div>
  );
}
