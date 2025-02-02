import { z } from 'zod';

export const blogSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  websiteUrl: z.string(),
  description: z.string(),
  isMembership: z.string(),
});

export type Blog = z.infer<typeof blogSchema>;

export const createBlogSchema = z.object({
  name: z.string(),
  websiteUrl: z.string(),
  description: z.string(),
});

export type CreateBlogBody = z.infer<typeof createBlogSchema>;

export const updateBlogSchema = z.object({
  id: z.string(),
  name: z.string(),
  websiteUrl: z.string(),
  description: z.string(),
});

export type UpdateBlogBody = z.infer<typeof updateBlogSchema>;
