import { z } from 'zod';

export const blogSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  websiteUrl: z.string(),
  description: z.string(),
  isMembership: z.string(),
})

export type Blog = z.infer<typeof blogSchema>