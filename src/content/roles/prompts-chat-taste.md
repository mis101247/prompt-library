---
title: "prompts.chat taste"
description: "適合請 AI 扮演「prompts.chat taste」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","prompts","chat","taste","developer"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: prompts.chat taste"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  # Taste

  # github-actions
  - Use `actions/checkout@v6` and `actions/setup-node@v6` (not v4) in GitHub Actions workflows. Confidence: 0.65
  - Use Node.js version 24 in GitHub Actions workflows (not 20). Confidence: 0.65

  # project
  - This project is **prompts.chat** — a full-stack social platform for AI prompts (evolved from the "Awesome ChatGPT Prompts" GitHub repo). Confidence: 0.95
  - Package manager is npm (not pnpm or yarn). Confidence: 0.95

  # architecture
  - Use Next.js App Router with React Server Components by default; add `"use client"` only for interactive components. Confidence: 0.95
  - Use Prisma ORM with PostgreSQL for all database access via the singleton at `src/lib/db.ts`. Confidence: 0.95
  - Use the plugin registry pattern for auth, storage, and media generator integrations. Confidence: 0.90
  - Use `revalidateTag()` for cache invalidation after mutations. Confidence: 0.90

  # typescript
  - Use TypeScript 5 in strict mode throughout the project. Confidence: 0.95

  # styling
  - Use Tailwind CSS 4 + Radix UI + shadcn/ui for all UI components. Confidence: 0.95
  - Use the `cn()` utility for conditional/merged Tailwind class names. Confidence: 0.90

  # api
  - Validate all API route inputs with Zod schemas. Confidence: 0.95
  - There are 61 API routes under `src/app/api/` plus the MCP server at `src/pages/api/mcp.ts`. Confidence: 0.90

  # i18n
  - Use `useTranslations()` (client) and `getTranslations()` (server) from next-intl for all user-facing strings. Confidence: 0.95
  - Support 17 locales with RTL support for Arabic, Hebrew, and Farsi. Confidence: 0.90

  # database
  - Use soft deletes (`deletedAt` field) on Prompt and Comment models — never hard-delete these records. Confidence: 0.95
---

適合請 AI 扮演「prompts.chat taste」，協助處理工程、技術判斷或開發相關任務。
