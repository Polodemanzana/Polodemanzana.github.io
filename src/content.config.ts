import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    problem: z.string(),
    contribution: z.string(),
    status: z.string(),
    repo: z.string().optional(),
    docs: z.string().optional(),
    order: z.number().default(10),
    draft: z.boolean().default(false), // draft: true => oculto
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    demo: z.boolean().default(false), // marca contenido de ejemplo
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writeups };
