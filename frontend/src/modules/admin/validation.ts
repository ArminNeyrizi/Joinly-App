import { z } from "zod";

export const reviewEnrollmentSchema = z.object({
  enrollmentId: z.string().min(1),
  reason: z.string().max(500).optional(),
});

export const courseInputSchema = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  units: z.number().int().min(1).max(6),
  academyId: z.string().min(1),
  learningPathId: z.string().optional(),
  prerequisiteCourseIds: z.array(z.string()).default([]),
});

export const sectionInputSchema = z.object({
  courseId: z.string().min(1),
  sectionNumber: z.string().min(1),
  instructor: z.string().min(1),
  capacity: z.number().int().min(1),
  semesterId: z.string().min(1),
  schedules: z
    .array(
      z.object({
        day: z.string(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .default([]),
});

export type CourseInput = z.infer<typeof courseInputSchema>;
export type SectionInput = z.infer<typeof sectionInputSchema>;
