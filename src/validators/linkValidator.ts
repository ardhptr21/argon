import { z } from 'zod';

export const CreateLinkValidator = z.object({
  slug: z
    .string()
    .min(3)
    .max(191)
    .trim()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must only contains alphanumeric, dashes, and lowercase.'),
  startDate: z
    .string()
    .max(191)
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((val) => new Date(val) as string | Date),
  endDate: z
    .string()
    .max(191)
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((val) => new Date(val) as string | Date),
  target: z.string().min(1).max(191).trim(),
  passcode: z.string().length(6).regex(/^\d+$/, 'Must only contains an digits number.').trim(),
  talents: z.array(z.string().uuid().trim()).nonempty(),
});
export type CreateLinkSchema = z.infer<typeof CreateLinkValidator>;
