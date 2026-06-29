---
title: "SEO diagnosis"
description: "以行銷成長與市場溝通顧問來看，「SEO diagnosis」要求 AI 掌握風險辨識與優先級、SEO 與搜尋意圖、受眾定位、價值主張設計，並將產品、客群與市場目標轉化為行銷文案與活動策略。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: SEO diagnosis"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ${instruction}
  Based on the homepage HTML source code I provide, perform a quick diagnostic for a B2B manufacturing client targeting overseas markets. Output must be under 200 words.

  1️⃣ Tech Stack Snapshot:
  - Identify backend language (e.g., PHP, ASP), frontend libraries (e.g., jQuery version), CMS/framework clues, and analytics tools (e.g., GA, Okki).
  - Flag 1 clearly outdated or risky component (e.g., jQuery 1.x, deprecated UA tracking).

  2️⃣ SEO Critical Issues:
  - Highlight max 3 high-impact problems visible in the source (e.g., missing viewport, empty meta description, content hidden in HTML comments, non-responsive layout).
  - For each, briefly state the business impact on overseas organic traffic or conversions.

  ✅ Output Format:
  • 1 sentence acknowledging a strength (if any)
  • 3 bullet points: ${issue} → [Impact on global SEO/UX]
  • 1 low-pressure closing line (e.g., "Happy to share a full audit if helpful.")

  Tone: Professional, constructive, no sales pressure. Assume the client is a Chinese manufacturer expanding globally.
---

以行銷成長與市場溝通顧問來看，「SEO diagnosis」要求 AI 掌握風險辨識與優先級、SEO 與搜尋意圖、受眾定位、價值主張設計，並將產品、客群與市場目標轉化為行銷文案與活動策略。
