import { z } from 'zod';

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  blogId: z.string(),
  content: z.string(),
  blogName: z.string(),
  createdAt: z.string(),
  shortDescription: z.string(),
});

export type Post = z.infer<typeof postSchema>;
