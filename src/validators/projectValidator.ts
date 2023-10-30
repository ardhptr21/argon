import { z } from 'zod';

export const CreateProjectValidator = z.object({
  picture: z.string().max(191).optional(),
  name: z.string().max(191).min(1),
  role: z.string().max(191).min(1),
  startDate: z
    .string()
    .max(191)
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((val) => new Date(val)),
  endDate: z
    .string()
    .max(191)
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .transform((val) => (val ? new Date(val) : val)),
  description: z.string().min(1),
});
export type CreateProjectSchema = z.infer<typeof CreateProjectValidator>;

export const EditProjectValidator = CreateProjectValidator;
export type EditProjectSchema = z.infer<typeof EditProjectValidator>;
