---
title: "Fix LaTeX dollars"
description: "適合請 AI 扮演「Fix LaTeX dollars」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","fix","latex","dollars","developer"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Fix LaTeX dollars"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Investigate and fix the actual $ usages in Markdown content.

  The $ fall into three classes:

  - Currency (escape these) — $1, $2 billion, R$ 549 → these pairs cause all the warnings
  - Real math (leave alone) — $\rightarrow$, $O(1)\text{ streaming}$ → valid, no warnings
  - Shell code (leave alone) — $(curl…), ${ZSH_CUSTOM}, $HOME → inside code blocks


  Execute in 4 steps:

  - Investigate — greps the content, classifies every $ into currency / real math / shell code, and reports counts before changing anything.
  - Apply — checks the tree is clean, then writes and runs the exact tested Python script (code-fence-, inline-code-, frontmatter-, and math-span-aware; idempotent via the (?<!\\) lookbehind so re-running never double-escapes).
  - Verify the diff — the safety net: greps that must print nothing for real math ($\rightarrow$, \text) and shell vars ($HOME, $(…), ${VAR}). If anything legit was touched, it tells you to git checkout -- . and stops.
  - Print instructions — outputs the build-verify and commit/push commands for user to run.

  Do not autonomously run any build, commit, or push.
---

適合請 AI 扮演「Fix LaTeX dollars」，協助處理工程、技術判斷或開發相關任務。
