import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .max(500, "توضیحات نمی‌تواند بیشتر از ۵۰۰ نویسه باشد")
  .optional()
  .transform((value) => value || undefined);

const optionalDate = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || !Number.isNaN(Date.parse(value)), "تاریخ نامعتبر است")
  .transform((value) => value || undefined);

export const todoInputSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "عنوان کار الزامی است")
    .max(120, "عنوان نمی‌تواند بیشتر از ۱۲۰ نویسه باشد"),
  description: optionalText,
  priority: z.coerce.number().pipe(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])),
  dueDate: optionalDate,
});

export const todoIdSchema = z.object({ id: z.string().min(1) });

export const todoToggleSchema = todoIdSchema.extend({
  completed: z.boolean(),
});

export const todoUpdateSchema = todoIdSchema.extend(todoInputSchema.shape);
