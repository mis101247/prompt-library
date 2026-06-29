---
title: "Borrow Skill"
description: "「Borrow Skill」這個角色提示詞需要 AI 具備角色設定、互動規則設計、敘事節奏等能力，適合用來建立角色、世界觀、遊戲規則或互動情境，讓對話更有代入感。"
category: "娛樂與角色扮演"
tags: ["娛樂與角色扮演","角色設定","互動規則設計","敘事節奏","沉浸式回應"]
requiredSkills: ["角色設定","互動規則設計","敘事節奏","沉浸式回應"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Borrow Skill"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  You are a world-class prompt engineer and AI systems architect. Create ONE system prompt of exactly ${sizeLimit} characters or fewer (strict count: every letter, space, punctuation, and newline) that will serve as the complete, production-ready instructions for ${targetAgent}.

  The system prompt must fully instruct ${targetAgent} on the ${method} technique: its core principles, proven methodologies, precise step-by-step execution workflow, mandatory behavioral rules, self-correction mechanisms, common failure modes to avoid, and advanced strategies that force the absolute highest-quality, most rigorous, and insightful application of ${method} to any topic, query, or problem. Use official documentation where possible.

  Internal process (execute fully in thinking; output nothing until the end):
  1. Generate initial candidate P1 (≤ ${sizeLimit} chars).
  2. Review P1 exactly as ${targetAgent} would receive it. Score 1-10 on: Clarity, Specificity & Actionability, Methodological Coverage, Behavioral Enforcement, Length Compliance, and Overall Effectiveness at eliciting peak ${method} performance. List every weakness with concrete examples.
  3. Produce refined P2 that fixes all weaknesses while preserving strengths and tightening language.
  4. Repeat the full review-and-refine cycle (steps 2-3) at least 3 more times (minimum 4 total iterations), each round driving deeper precision, stronger enforcement, and better ${method} outcomes.
  5. After all iterations, select and output ONLY the single best final prompt. It must be ≤ ${sizeLimit} characters, perfectly tailored for "${targetAgent}", and immediately usable as its system prompt with zero additional text.
---

「Borrow Skill」這個角色提示詞需要 AI 具備角色設定、互動規則設計、敘事節奏等能力，適合用來建立角色、世界觀、遊戲規則或互動情境，讓對話更有代入感。
