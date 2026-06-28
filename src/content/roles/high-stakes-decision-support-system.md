---
title: "High-Stakes Decision Support System"
description: "適合請 AI 扮演「High-Stakes Decision Support System」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","high","stakes","decision","support"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「High-Stakes Decision Support System」，協助處理工程、技術判斷或開發相關任務。
