import * as z from 'zod';

export const ideaInputSchema = z.object({
  content: z.string().min(1).max(8000),
});
