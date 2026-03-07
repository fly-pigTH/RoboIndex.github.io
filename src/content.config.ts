import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    authors: z.array(z.string()).optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()),
    repo: z.string().url().optional(),
    project_page: z.string().url().optional(),
    arxiv: z.string().url().optional(),
    pdf: z.string().url().optional(),
    preview_image: z.string().optional(),
    preview_video: z.string().optional(),
    date_added: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string(),
    venue: z.string(),
    author: z.string(),
    updated: z.string(),
    summary: z.string(),
    summary_en: z.string(),
    phases: z.array(z.object({
      emoji: z.string(),
      stage: z.string(),
      stage_en: z.string(),
      window: z.string(),
      window_en: z.string(),
      focus: z.string(),
      focus_en: z.string(),
      deliverables: z.string(),
      deliverables_en: z.string(),
      alert: z.string(),
      alert_en: z.string(),
      progress: z.number(),
    })),
    checklist: z.array(z.object({
      emoji: z.string(),
      text: z.string(),
      text_en: z.string(),
    })),
    pitfalls: z.array(z.object({
      emoji: z.string(),
      text: z.string(),
      text_en: z.string(),
    })),
    links: z.array(z.object({
      emoji: z.string(),
      name: z.string(),
      name_en: z.string(),
      desc: z.string(),
      desc_en: z.string(),
      url: z.string().url(),
    })),
  }),
});

export const collections = { papers, guides };
