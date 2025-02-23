import { z } from 'zod';

export const blogSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  websiteUrl: z.string(),
  description: z.string(),
  isMembership: z.boolean(),
});

export type Blog = z.infer<typeof blogSchema>;

export const createBlogSchema = z.object({
  name: z.string().min(1).max(15),
  websiteUrl: z.string().trim().url().min(1).max(100),
  description: z.string().trim().min(1).max(500),
});

export type CreateBlogBody = z.infer<typeof createBlogSchema>;

export const updateBlogSchema = z.object({
  id: z.string(),
  name: z.string(),
  websiteUrl: z.string(),
  description: z.string(),
});

export type UpdateBlogBody = z.infer<typeof updateBlogSchema>;
