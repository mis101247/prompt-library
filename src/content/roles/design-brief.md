---
title: "Design Brief"
description: "「Design Brief」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Design Brief"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  This is a ${page_type:dashboard} of a modern ${focus:government audit} app called ${brand:AuditFlow}.

  Thoroughly analyze the UI in this screenshot and describe it in as much detail as you can to hand over from a UI designer to a developer. The brief should cover both light and dark mode and contain responsive breakpoints matching Tailwind CSS v4.3 defaults.

  Output characteristics as structured JSONC.

  For colors, extract a rough palette and only detail accents and complex media. The goal is to use only 2 palettes: primary and secondary similar to Tailwind colors. Alongside these 2, you can define any number of grays and accent colors for more complex UI (gradients, shadows, SVGs, etc.).

  End with a prompt explaining how to implement the UI for a developer, but don't mention any tech specs; only a brief of the UI to be implemented and the token rules + usage. Output the prompt as a Markdown code block.

  The output should be two code blocks: one for the design brief and one for the JSONC design specification.
---

「Design Brief」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。
