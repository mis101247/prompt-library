---
title: "Vibe Coding Spec-to-MVP Kit"
description: "把 idea、限制與完成條件轉成 coding agent 可執行的 spec，避免 vibe coding 一開始就失焦。"
category: "vibe-coding"
tags: ["spec", "MVP", "planning", "agentic coding"]
difficulty: "入門"
tools: ["Codex", "Markdown", "Astro"]
timeEstimate: "半天"
featured: false
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "project"
sourceRepo: "Prompts-For-Software-Engineers"
sourceRepoUrl: "https://github.com/wycoconut/Prompts-For-Software-Engineers"
sourcePath: "AI-Assisted-Coding.md"
sourceUrl: "https://github.com/wycoconut/Prompts-For-Software-Engineers/blob/0ea5766/AI-Assisted-Coding.md"
sourceTitle: "How To Improve the Developer Experience when Coding With AI"
sourceDescription: "描述 AI coding 工作流程與 spec.md 範例，適合轉成 vibe coding 起手流程。"
sourceExplanation: "它提醒使用者先把 objective、features、tech stack、user stories 與 data model 寫清楚，是避免 AI coding 失控的低成本做法。"
localizationNote: "因授權未確認，本站只做工作流改寫與來源導流，不搬運原文範例。"
preserveOriginalPrompt: false
oneLiner: "一個把模糊 idea 轉成可交給 coding agent 的 spec.md 產生器。"
audience: ["solo builder", "產品工程師", "想快速驗證 side project 的開發者"]
mvpScope: ["輸入想法、目標使用者、MVP 範圍", "輸出 spec.md、驗收條件與第一輪提示詞", "提供 agentic coder 提示詞接續使用"]
suggestedStack: ["Astro", "MDX examples", "Copy button"]
usablePrompts: ["agentic-coder"]
extensions: ["加入資料模型模板", "產生 issue breakdown", "依 Astro/Next/SwiftUI 提供 stack presets"]
---

這個專案不需要模型 API 也能做 v1。

先用靜態模板和 copy button 就能解決一個真實問題：讓使用者在開始 vibe coding 前，把「什麼算完成」說清楚。
