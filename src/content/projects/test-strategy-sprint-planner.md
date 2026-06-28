---
title: "Test Strategy Sprint Planner"
description: "把測試策略提示詞轉成四週測試補強計畫產生器，協助 vibe coding 專案進入可維護狀態。"
category: "testing"
tags: ["testing", "CI", "roadmap", "quality"]
difficulty: "中階"
tools: ["Astro", "Markdown", "Codex", "Playwright"]
timeEstimate: "1 天"
featured: true
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "project"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/test_strategy_architect.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/test_strategy_architect.txt"
sourceTitle: "Testing Strategy Architect"
sourceDescription: "用風險、測試金字塔、工具選型與四週 roadmap 設計測試策略的提示詞。"
sourceExplanation: "這個來源可衍生成一個很實用的小工具：把模糊的測試需求變成具體 backlog 與 CI gate。"
localizationNote: "專案頁使用正體中文說明，實作提示詞可使用本站改寫版英文提示詞。"
preserveOriginalPrompt: false
oneLiner: "用一個 guided form 產生四週測試策略與前 10 個測試案例。"
audience: ["剛完成 MVP 的 solo builder", "準備重構前想補測試的工程師", "需要說服團隊補測試的 tech lead"]
mvpScope: ["輸入 app 類型、核心流程、目前測試狀態", "產生 test pyramid、工具建議與四週計畫", "列出前 10 個最值得先寫的測試"]
suggestedStack: ["Astro", "Markdown/MDX", "LocalStorage draft", "Copy button"]
usablePrompts: ["test-strategy-architect", "agentic-coder"]
extensions: ["加入 framework preset", "輸出 GitHub issue checklist", "支援 Playwright smoke test 範本"]
---

這個專案很適合拿來練習「prompt as product」。

使用者不只需要提示詞，他們需要一個逐步問對問題的介面，最後再把答案組成可交給 coding agent 的測試策略提示詞。
