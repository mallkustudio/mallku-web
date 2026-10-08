import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    order: z.number(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { servicios };
