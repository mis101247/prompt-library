---
title: "Test-First Bug Fixing Approach"
description: "適合請 AI 扮演「Test-First Bug Fixing Approach」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","test","first","bug","fixing"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Test-First Bug Fixing Approach"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  I have a bug: ${bug}. Take a test-first approach: 1) Read the relevant source files and existing tests. 2) Write a failing test that reproduces the exact bug. 3) Run the test suite to confirm it fails. 4) Implement the minimal fix. 5) Re-run the full test suite. 6) If any test fails, analyze the failure, adjust the code, and re-run—repeat until ALL tests pass. 7) Then grep the codebase for related code paths that might have the same issue and add tests for those too. 8) Summarize every change made and why. Do not ask me questions—make reasonable assumptions and document them.
---

適合請 AI 扮演「Test-First Bug Fixing Approach」，協助處理工程、技術判斷或開發相關任務。
