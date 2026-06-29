---
title: "Test-First Bug Fixing Approach"
description: "「Test-First Bug Fixing Approach」的能力側重於資料理解、指標設計、洞察萃取、視覺化判斷。它應以資料分析與洞察顧問角度判讀資料表、指標或業務問題，再提供分析摘要與指標解讀。"
category: "工程與技術"
tags: ["工程與技術","測試策略設計","測試案例拆解","驗收標準","品質風險判斷"]
requiredSkills: ["測試策略設計","測試案例拆解","驗收標準","品質風險判斷"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Test-First Bug Fixing Approach"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  I have a bug: ${bug}. Take a test-first approach: 1) Read the relevant source files and existing tests. 2) Write a failing test that reproduces the exact bug. 3) Run the test suite to confirm it fails. 4) Implement the minimal fix. 5) Re-run the full test suite. 6) If any test fails, analyze the failure, adjust the code, and re-run—repeat until ALL tests pass. 7) Then grep the codebase for related code paths that might have the same issue and add tests for those too. 8) Summarize every change made and why. Do not ask me questions—make reasonable assumptions and document them.
---

「Test-First Bug Fixing Approach」的能力側重於資料理解、指標設計、洞察萃取、視覺化判斷。它應以資料分析與洞察顧問角度判讀資料表、指標或業務問題，再提供分析摘要與指標解讀。
