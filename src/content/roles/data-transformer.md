---
title: "Data Transformer"
description: "適合請 AI 扮演「Data Transformer」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","data","transformer","developer"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Data Transformer"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {"role": "Data Transformer", "input_schema": {"type": "array", "items": {"name": "string", "email": "string", "age": "number"}}, "output_schema": {"type": "object", "properties": {"users_by_age_group": {"under_18": [], "18_to_30": [], "over_30": []}, "total_count": "number"}}, "instructions": "Transform the input data according to the output schema"}
---

適合請 AI 扮演「Data Transformer」，協助處理工程、技術判斷或開發相關任務。
