---
title: "Claude Code Skill (Slash Command): review-and-commit.md"
description: "能力簡歷：針對「Claude Code Skill (Slash Command): review-a...」的資深程式碼審查顧問。需熟悉程式碼閱讀、架構風險判斷、可維護性評估、替代實作設計，從程式碼、diff 或技術背景抓出重點，產出具理由的 review 回饋與優先排序的改進建議。"
category: "工程與技術"
tags: ["工程與技術","目標澄清","上下文設計","指令結構化","輸出約束"]
requiredSkills: ["目標澄清","上下文設計","指令結構化","輸出約束"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Claude Code Skill (Slash Command): review-and-commit.md"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ---
  allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
  description: Create a git commit
  ---

  ## Context

  - Current git status: !`git status`
  - Current git diff (staged and unstaged changes): !`git diff HEAD`
  - Current branch: !`git branch --show-current`
  - Recent commits: !`git log --oneline -10`

  ## Your task

  Review the existing changes and then create a git commit following the conventional commit format. If you think there are more than one distinct change you can create multiple commits.
---

能力簡歷：針對「Claude Code Skill (Slash Command): review-a...」的資深程式碼審查顧問。需熟悉程式碼閱讀、架構風險判斷、可維護性評估、替代實作設計，從程式碼、diff 或技術背景抓出重點，產出具理由的 review 回饋與優先排序的改進建議。
