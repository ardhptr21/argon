import { z } from 'zod';

export const CreateProjectValidator = z.object({
  picture: z.string().max(191).optional(),
  name: z.string().max(191),
  role: z.string().max(191),
  startDate: z
    .string()
    .max(191)
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
  endDate: z
    .string()
    .max(191)
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
  description: z.string(),
});

export type CreateProjectSchema = z.infer<typeof CreateProjectValidator>;
