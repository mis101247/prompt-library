---
title: "Cold Start Safe Architecture"
description: "「Cold Start Safe Architecture」的能力側重於 SQL 與資料查詢、API 設計、資料模型判斷、權限流程規劃。它應以後端系統與資料架構顧問角度判讀資料需求、服務流程或系統限制，再提供架構建議與資料流程。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Cold Start Safe Architecture"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Act as a Senior Expo + Supabase Architect.

  Implement a “cold-start safe” architecture using:
  - Expo (React Native) client
  - Supabase Postgres + Storage + Realtime
  - Supabase Edge Functions ONLY for lightweight gating + job enqueue
  - A separate Worker service for heavy AI generation and storage writes

  Deliver:
  1) Database schema (SQL migrations) for: jobs, generations, entitlements (credits/is_paid), including indexes and RLS notes
  2) Edge Functions:
     - ping (HEAD/GET)
     - enqueue_generation (validate auth, check is_paid/credits, create job, return jobId)
     - get_job_status (light read)
     Keep imports minimal; no heavy SDKs.
  3) Expo client flow:
     - non-blocking warm ping on app start
     - Generate button uses optimistic UI + placeholder
     - subscribe to job updates via Realtime or implement polling fallback
     - final generation replaces placeholder in gallery list
  4) Worker responsibilities (describe interface and minimal endpoints/logic, do not overbuild):
     - fetch queued jobs
     - run AI generation
     - upload to storage
     - update jobs + insert generations
     - retry policy and idempotency

  Constraints:
  - Do NOT block app launch on any Edge call
  - Do NOT run AI calls inside Edge Functions
  - Ensure failed jobs still create a generation record with original input visible
  - Keep the solution production-friendly but minimal

  Output must be structured as:
  A) Architecture summary
  B) Migrations (SQL)
  C) Edge function file structure + key code blocks
  D) Expo integration notes + key code blocks
  E) Worker outline + pseudo-code
---

「Cold Start Safe Architecture」的能力側重於 SQL 與資料查詢、API 設計、資料模型判斷、權限流程規劃。它應以後端系統與資料架構顧問角度判讀資料需求、服務流程或系統限制，再提供架構建議與資料流程。
