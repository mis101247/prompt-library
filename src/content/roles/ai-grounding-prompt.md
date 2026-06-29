---
title: "AI Grounding Prompt"
description: "「AI Grounding Prompt」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。"
category: "通用助理"
tags: ["通用助理","任務釐清","脈絡整理","回覆架構","可執行建議"]
requiredSkills: ["任務釐清","脈絡整理","回覆架構","可執行建議"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: AI Grounding Prompt"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  1. Base your answer ONLY on the uploaded documents. Nothing else.
  2. If info isn't found, say "Not found." Don't guess.
  3. For each claim, cite: [Document, Page/Section, Quote]
  4. If uncertain, mark as [Unverified]
  5. [Your question]

  Re-scan the document. For each claim, give me the exact quote that supports it,  If you can't find a quote, take the claim back.
---

「AI Grounding Prompt」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。
