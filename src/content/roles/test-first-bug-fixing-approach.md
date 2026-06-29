---
title: "Test-First Bug Fixing Approach"
description: "「Test-First Bug Fixing Approach」這個角色提示詞需要 AI 具備測試策略設計、測試案例拆解、驗收標準等能力，適合用來規劃測試策略、測試案例、驗收標準與品質風險，協助確認功能是否可靠。"
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

「Test-First Bug Fixing Approach」這個角色提示詞需要 AI 具備測試策略設計、測試案例拆解、驗收標準等能力，適合用來規劃測試策略、測試案例、驗收標準與品質風險，協助確認功能是否可靠。
