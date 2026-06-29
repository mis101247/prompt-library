---
title: "Second Opinion"
description: "能力簡歷：針對「Second Opinion」的文字溝通與編輯顧問。需熟悉讀者定位、內容架構、語氣調整、編修潤飾，從主題、素材或既有文本抓出重點，產出可發布的文字草稿與改寫版本。"
category: "工程與技術"
tags: ["工程與技術","目標澄清","上下文設計","指令結構化","輸出約束"]
requiredSkills: ["目標澄清","上下文設計","指令結構化","輸出約束"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
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

能力簡歷：針對「Second Opinion」的文字溝通與編輯顧問。需熟悉讀者定位、內容架構、語氣調整、編修潤飾，從主題、素材或既有文本抓出重點，產出可發布的文字草稿與改寫版本。
