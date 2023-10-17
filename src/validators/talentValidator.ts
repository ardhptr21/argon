import { z } from 'zod';
import { CreateProjectValidator } from './projectValidator';

export const CreateTalentValidator = z.object({
  name: z.string().max(191),
  avatar: z.string().max(191),
  mbti: z.string().max(5),
  experience: z.number().int().positive().min(0),
  lastEducation: z.string().max(191),
  startEducationYear: z.number().int().positive().min(0),
  endEducationYear: z.number().int().positive().min(0),
  projects: z.array(CreateProjectValidator).nonempty(),
});
export type CreateTalentSchema = z.infer<typeof CreateTalentValidator>;
