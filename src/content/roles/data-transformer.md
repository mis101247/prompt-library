---
title: "Data Transformer"
description: "「Data Transformer」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。"
category: "通用助理"
tags: ["通用助理","任務釐清","脈絡整理","回覆架構","可執行建議"]
requiredSkills: ["任務釐清","脈絡整理","回覆架構","可執行建議"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Data Transformer"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {"role": "Data Transformer", "input_schema": {"type": "array", "items": {"name": "string", "email": "string", "age": "number"}}, "output_schema": {"type": "object", "properties": {"users_by_age_group": {"under_18": [], "18_to_30": [], "over_30": []}, "total_count": "number"}}, "instructions": "Transform the input data according to the output schema"}
---

「Data Transformer」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。
