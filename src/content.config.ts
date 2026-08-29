import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const difficulty = z.enum(['入門', '中階', '進階']);
const httpUrl = z.string().url().refine((value) => {
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}, { message: 'Expected an HTTP(S) URL' });
const sourceType = z.enum([
  'prompt',
  'guide',
  'article',
  'rule',
  'workflow',
  'research',
]);

const commonFields = {
  title: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  difficulty,
  tools: z.array(z.string()),
  timeEstimate: z.string(),
  featured: z.boolean().default(false),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  sourceType,
  sourceRepo: z.string(),
  sourceRepoUrl: httpUrl,
  sourcePath: z.string(),
  sourceUrl: httpUrl,
  sourceTitle: z.string(),
  sourceDescription: z.string(),
  sourceExplanation: z.string(),
  localizationNote: z.string(),
  preserveOriginalPrompt: z.boolean(),
};

const prompts = defineCollection({
  loader: glob({ base: './src/content/prompts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...commonFields,
    promptLanguage: z.string(),
    promptUseCase: z.string(),
    compatibleTools: z.array(z.string()),
    copyLabel: z.string(),
    targetUrl: httpUrl.optional(),
    targetLabel: z.string().optional(),
    thumbnailUrl: httpUrl.optional(),
    thumbnailAlt: z.string().optional(),
    thumbnailContainWhite: z.boolean().default(false),
    relatedProjects: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    promptBody: z.string(),
  }),
});

const roles = defineCollection({
  loader: glob({ base: './src/content/roles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    requiredSkills: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    sourceTitle: z.string(),
    sourceUrl: httpUrl,
    promptLanguage: z.string(),
    promptBody: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...commonFields,
    guideType: z.string(),
    learningGoals: z.array(z.string()),
    prerequisites: z.array(z.string()),
    relatedPrompts: z.array(z.string()),
  }),
});

const sources = defineCollection({
  loader: glob({ base: './src/content/sources', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    repo: z.string(),
    githubUrl: httpUrl,
    localPath: z.string(),
    commit: z.string(),
    license: z.string(),
    description: z.string(),
    bestFor: z.array(z.string()),
    contentTypes: z.array(z.string()),
    startingFiles: z.array(z.string()),
    nextMaterials: z.array(z.string()),
    fullTextPolicy: z.string(),
  }),
});

export const collections = { prompts, roles, guides, sources };
