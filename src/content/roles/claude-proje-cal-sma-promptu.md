---
title: "Claude - Proje çalışma promptu"
description: "「Claude - Proje çalışma promptu」這個角色提示詞需要 AI 具備目標澄清、上下文設計、指令結構化等能力，適合用來把模糊任務整理成清楚的 AI 指令、上下文、限制條件與可驗收輸出。"
category: "工程與技術"
tags: ["工程與技術","目標澄清","上下文設計","指令結構化","輸出約束"]
requiredSkills: ["目標澄清","上下文設計","指令結構化","輸出約束"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Claude - Proje çalışma promptu"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Plan a redesign for this web page before making any edits.

  Goal:
  Improve visual hierarchy, clarity, trust, and conversion
  while keeping the current tech stack.

  Your process:
  1. Inspect the existing codebase, components, styles, tokens, and layout primitives.
  2. Identify UX/UI issues in the current implementation.
  3. Ask clarifying questions if brand/style/conversion intent is unclear.
  4. Produce a design-first implementation plan in markdown.

  Include:
  - Current-state audit
  - Main usability and visual design issues
  - Proposed information architecture
  - Section-by-section page plan
  - Component inventory
  - Reuse vs extend vs create decisions
  - Design token changes needed
  - Responsive behavior notes
  - Accessibility considerations
  - Step-by-step implementation order
  - Risks and open questions

  Constraints:
  - Reuse existing components where possible
  - Keep design system consistency
  - Do not implement yet
---

「Claude - Proje çalışma promptu」這個角色提示詞需要 AI 具備目標澄清、上下文設計、指令結構化等能力，適合用來把模糊任務整理成清楚的 AI 指令、上下文、限制條件與可驗收輸出。
