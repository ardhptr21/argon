import { z } from 'zod';
import { CreateProjectValidator } from './projectValidator';

export const CreateTalentValidator = z.object({
  name: z.string().max(191).min(1),
  avatar: z.string().max(191).min(1),
  mbti: z.string().max(5).min(3),
  experience: z.coerce.number().positive().min(0),
  lastEducation: z.string().max(191).min(2),
  startEducationYear: z.coerce.number().positive().gt(1900),
  endEducationYear: z.coerce.number().positive().gt(1900),
  projects: z.array(CreateProjectValidator).nonempty(),
});
export type CreateTalentSchema = z.infer<typeof CreateTalentValidator>;
