import { z } from 'zod';

export const characterSchema = z.object({
  name: z.string().min(1),
  species: z.string().min(1),
  gender: z.string().min(1),
  image: z.string().url(),
});
