---
title: "Claude Code Skill (Slash Command): review-and-commit.md"
description: "適合請 AI 扮演「Claude Code Skill (Slash Command): review-and-commit.md」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","claude","code","skill","slash"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「Claude Code Skill (Slash Command): review-and-commit.md」，協助處理工程、技術判斷或開發相關任務。
