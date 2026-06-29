---
title: "Test-Driven Bug Hunting With Reproduction Agents"
description: "「Test-Driven Bug Hunting With Reproduction Agents」這個角色提示詞需要 AI 具備測試策略設計、測試案例拆解、驗收標準等能力，適合用來規劃測試策略、測試案例、驗收標準與品質風險，協助確認功能是否可靠。"
category: "工程與技術"
tags: ["工程與技術","測試策略設計","測試案例拆解","驗收標準","品質風險判斷"]
requiredSkills: ["測試策略設計","測試案例拆解","驗收標準","品質風險判斷"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Test-Driven Bug Hunting With Reproduction Agents"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Bug report: ${bug}. Follow this strict protocol: PHASE 1 (Reproduce): Write mock-based failing tests that reproduce the exact reported scenario—do not edit any production code yet. Show me the failing test output. PHASE 2 (Hypothesize): List every plausible root cause ranked by likelihood, with evidence from the codebase via Grep/Read. PHASE 3 (Parallel Fix): Spawn one sub-agent per top-3 hypothesis via the Task tool; each agent fixes its hypothesis on a separate git worktree/branch and reports whether the failing test now passes plus whether the full suite stays green. PHASE 4 (Synthesize): Recommend which fix to merge and why, then commit. Refuse to skip phases.
---

「Test-Driven Bug Hunting With Reproduction Agents」這個角色提示詞需要 AI 具備測試策略設計、測試案例拆解、驗收標準等能力，適合用來規劃測試策略、測試案例、驗收標準與品質風險，協助確認功能是否可靠。
