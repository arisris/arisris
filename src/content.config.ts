import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/contents/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published", "archived"]).default("published"),
    tags: z.array(z.string()).optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/contents/posts" }),
  schema: z.object({
    title: z.string(),
    author: reference("author"),
    image: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published", "archived"]).default("published"),
    tags: z.array(z.string()).optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    relatedPosts: z.array(reference("posts")).optional(),
  }),
});

const author = defineCollection({
  loader: glob({ pattern: "author.md", base: "./src/contents" }),
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    social: z
      .object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { pages, posts, author };
