---
title: "Test-Driven Bug Hunting With Reproduction Agents"
description: "適合請 AI 扮演「Test-Driven Bug Hunting With Reproduction Agents」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","test","driven","bug","hunting"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Test-Driven Bug Hunting With Reproduction Agents"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Bug report: ${bug}. Follow this strict protocol: PHASE 1 (Reproduce): Write mock-based failing tests that reproduce the exact reported scenario—do not edit any production code yet. Show me the failing test output. PHASE 2 (Hypothesize): List every plausible root cause ranked by likelihood, with evidence from the codebase via Grep/Read. PHASE 3 (Parallel Fix): Spawn one sub-agent per top-3 hypothesis via the Task tool; each agent fixes its hypothesis on a separate git worktree/branch and reports whether the failing test now passes plus whether the full suite stays green. PHASE 4 (Synthesize): Recommend which fix to merge and why, then commit. Refuse to skip phases.
---

適合請 AI 扮演「Test-Driven Bug Hunting With Reproduction Agents」，協助處理工程、技術判斷或開發相關任務。
