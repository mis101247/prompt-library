---
title: "Second Opinion"
description: "適合請 AI 扮演「Second Opinion」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","second","opinion"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Second Opinion"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ---
  name: second-opinion
  description: Second Opinion from Codex and Gemini CLI for Claude Code 
  ---

  # Second Opinion

  When invoked:

  1. **Summarize the problem** from conversation context (~100 words)

  2. **Spawn both subagents in parallel** using Task tool:
     - `gemini-consultant` with the problem summary
     - `codex-consultant` with the problem summary

  3. **Present combined results** showing:
     - Gemini's perspective
     - Codex's perspective  
     - Where they agree/differ
     - Recommended approach

  ## CLI Commands Used by Subagents

  ```bash
  gemini -p "I'm working on a coding problem... [problem]"
  codex exec "I'm working on a coding problem... [problem]"
  ```
---

適合請 AI 扮演「Second Opinion」，協助處理工程、技術判斷或開發相關任務。
