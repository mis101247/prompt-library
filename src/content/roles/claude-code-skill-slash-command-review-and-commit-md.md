---
title: "Claude Code Skill (Slash Command): review-and-commit.md"
description: "「Claude Code Skill (Slash Command): review-and-commit.md」這個角色提示詞需要 AI 具備目標澄清、上下文設計、指令結構化等能力，適合用來把模糊任務整理成清楚的 AI 指令、上下文、限制條件與可驗收輸出。"
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

「Claude Code Skill (Slash Command): review-and-commit.md」這個角色提示詞需要 AI 具備目標澄清、上下文設計、指令結構化等能力，適合用來把模糊任務整理成清楚的 AI 指令、上下文、限制條件與可驗收輸出。
