---
title: "用 testing 提示詞建立測試策略"
description: "如何把 testing strategy architect 提示詞用在真實 side project，產生 test pyramid、前 10 個測試與四週 roadmap。"
category: "testing"
tags: ["testing", "quality", "CI", "roadmap"]
difficulty: "中階"
tools: ["Codex", "Playwright", "Vitest", "GitHub Actions"]
timeEstimate: "15 分鐘"
featured: false
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "guide"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/test_strategy_architect.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/test_strategy_architect.txt"
sourceTitle: "Testing Strategy Architect"
sourceDescription: "以風險評估、測試金字塔、工具推薦與 roadmap 建立測試策略的提示詞。"
sourceExplanation: "它適合把 vibe coding 後的專案從『能跑』推進到『敢改』，尤其是準備重構或加入更多功能前。"
localizationNote: "使用正體中文指南與本站改寫提示詞，讓使用者知道該提供哪些 repo context。"
preserveOriginalPrompt: false
guideType: "workflow"
learningGoals: ["知道如何提供測試策略提示詞的輸入", "分辨 unit/integration/e2e 的責任", "產生可落地的四週測試補強計畫"]
prerequisites: ["專案已可 build 或至少可手動跑主要流程", "知道核心 user flow"]
relatedPrompts: ["test-strategy-architect", "agentic-coder"]
---

很多人問 AI「幫我補測試」時，得到的是一堆零散 test cases。

比較好的問法，是先讓 AI 建立測試策略：哪裡風險最高、哪些測試最先寫、哪些東西不值得用 E2E 測。

## 先提供五個輸入

- app 類型與技術棧
- 核心 user flow
- 目前測試狀態
- 過去容易壞的地方
- 你願意花多少時間補測試

如果不知道過去容易壞的地方，可以請 agent 先讀 repo，根據資料流與外部依賴推測風險。

## 先寫前 10 個測試

不要一開始追求 coverage。

先寫最能降低風險的 10 個測試：登入、儲存、付款、資料匯入、刪除、權限、錯誤恢復、核心計算、主要 API contract、最重要的 E2E flow。

## CI gate 要小

第一版 CI gate 應該快。

如果測試一開始就太慢，團隊會開始略過它。先讓最重要的測試穩定跑起來，再慢慢擴大。
