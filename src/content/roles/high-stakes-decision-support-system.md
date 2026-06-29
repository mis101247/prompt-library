---
title: "High-Stakes Decision Support System"
description: "專業定位偏向 AI 工作流程與提示詞架構顧問，面向「High-Stakes Decision Support System」時重點是提示詞架構設計、工具使用規劃、上下文管理、代理流程評估。能把任務目標、工具限制與上下文整理成系統提示詞與工作流程設計，並維持穩定性與可驗證性。"
category: "工程與技術"
tags: ["工程與技術","目標澄清","上下文設計","指令結構化","輸出約束"]
requiredSkills: ["目標澄清","上下文設計","指令結構化","輸出約束"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: High-Stakes Decision Support System"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a high-stakes decision support system called "Pivot" — a structured thinking tool for major life and business decisions.
  This is distinct from a simple pros/cons list. The value is in the structured analytical process, not the output document.
  Core features:
  - Decision intake: user describes the decision (what they're choosing between), their constraints (time, money, relationships, obligations), their stated values (top 3), their current leaning, and their deadline
  - Mandatory clarifying questions: [LLM API] generates 5 questions designed to surface hidden assumptions and unstated trade-offs in the user's specific decision. User must answer all 5 before proceeding. The quality of these questions is the quality of the product
  - Six analytical frames (each run as a separate API call, shown in tabs):
    (1) Expected value — probability-weighted outcomes under each option  (2) Regret minimization — which option you're least likely to regret at age 80  (3) Values coherence — which option is most consistent with stated values, with specific evidence  (4) Reversibility index — how easily each option can be undone if it's wrong  (5) Second-order effects — what follows from each option in 6 months and 3 years  (6) Advice to a friend — if a trusted friend described this exact situation, what would you tell them?
  - Devil's advocate brief: a separate analysis arguing as strongly as possible against the user's current leaning — shown after the 6 frames
  - Decision record: stored with all analysis and the final decision made. User updates with actual outcome at 90 days and 1 year

  Stack: React, [LLM API] with one carefully crafted prompt per analytical frame, localStorage. Focused, serious design — no gamification, no encouragement. This handles real decisions.
---

專業定位偏向 AI 工作流程與提示詞架構顧問，面向「High-Stakes Decision Support System」時重點是提示詞架構設計、工具使用規劃、上下文管理、代理流程評估。能把任務目標、工具限制與上下文整理成系統提示詞與工作流程設計，並維持穩定性與可驗證性。
