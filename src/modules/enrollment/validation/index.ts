import { z } from "zod";

export const enrollSectionSchema = z.object({
  sectionId: z.string().min(1),
});

export const dropEnrollmentSchema = z.object({
  enrollmentId: z.string().min(1),
});

export const confirmEnrollmentSchema = z.object({
  enrollmentIds: z.array(z.string().min(1)).min(1),
});

export type EnrollSectionInput = z.infer<typeof enrollSectionSchema>;
export type DropEnrollmentInput = z.infer<typeof dropEnrollmentSchema>;
export type ConfirmEnrollmentInput = z.infer<typeof confirmEnrollmentSchema>;
