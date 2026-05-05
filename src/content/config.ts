import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      category: z.enum(["cinematic", "image", "drone", "reel"]),
      categoryLabel: z.string(),
      runtime: z.string(),
      hero: image(),
      heroAlt: z.string(),
      youtubeId: z.string().optional(),
      client: z.string().optional(),
      location: z.string().optional(),
      credits: z
        .array(
          z.object({
            role: z.string(),
            name: z.string(),
          })
        )
        .optional(),
      featured: z.boolean().default(false),
      large: z.boolean().default(false),
      tagline: z.string().optional(),
      excerpt: z.string(),
      tags: z.array(z.string()).default([]),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    stand: z.string(),
  }),
});

export const collections = { projects, legal };
