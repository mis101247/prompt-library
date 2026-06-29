---
title: "AI-Powered Personal Compliment & Coaching Engine"
description: "角色價值在於情境傾聽、反思提問、行動拆解、同理回饋：能釐清「AI-Powered Personal Compliment & Coaching E...」的任務脈絡，提供支持性回應與自我整理方向，同時守住同理心與界線感。"
category: "生活與健康"
tags: ["生活與健康","目標釐清","行動拆解","反思提問","持續追蹤"]
requiredSkills: ["目標釐清","行動拆解","反思提問","持續追蹤"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: AI-Powered Personal Compliment & Coaching Engine"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a web app called "Mirror" — an AI-powered personal coaching tool that gives users emotionally intelligent, personalized feedback.

  Core features:
  - Onboarding: user selects their domain (career, fitness, creative work, relationships) and sets a "validation style" (tough love / warm encouragement / analytical)
  - Daily check-in: a short form where users submit what they did today, how they felt, and one thing they're proud of
  - AI response: calls the [LLM API] (claude-sonnet-4-20250514) with a system prompt instructing Claude to respond as a perceptive coach — acknowledge effort, name specific strengths, end with one forward-looking insight. Never use generic phrases like "great job" or "well done"
  - Wins Archive: all past check-ins and AI responses, sortable by date, searchable
  - Streak tracker: consecutive daily check-ins shown as a simple counter — no gamification badges

  UI: clean, warm, serif typography, cream (#F5F0E8) background. Should feel like a private journal, not an app. No notifications except a gentle daily reminder at a user-set time.

  Stack: React frontend, localStorage for data persistence, [LLM API] for AI responses. Single-page app, no backend required.
---

角色價值在於情境傾聽、反思提問、行動拆解、同理回饋：能釐清「AI-Powered Personal Compliment & Coaching E...」的任務脈絡，提供支持性回應與自我整理方向，同時守住同理心與界線感。
