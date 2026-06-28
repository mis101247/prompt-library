---
title: "Test Strategy Architect：四週測試策略提示詞"
description: "把模糊的「幫我補測試」改成可執行的測試金字塔、風險排序、工具選型與四週落地計畫。"
category: "testing"
tags: ["testing", "test pyramid", "quality gates", "CI"]
difficulty: "中階"
tools: ["Codex", "ChatGPT", "Claude", "Cursor"]
timeEstimate: "20 分鐘"
featured: true
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "prompt"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/test_strategy_architect.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/test_strategy_architect.txt"
sourceTitle: "Testing Strategy Architect"
sourceDescription: "要求模型分析產品風險、設計測試金字塔、推薦工具與產出實作 roadmap 的提示詞。"
sourceExplanation: "它很適合從 vibe coding 專案進入可維護階段，因為它把測試討論從 coverage 數字拉回風險、關鍵路徑和維護成本。"
localizationNote: "保留英文提示詞，正體中文說明補上如何輸入 app 類型、現有測試狀態與時間預算。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "當專案已經能跑，但需要建立第一版測試策略、CI gate 或重構前安全網時使用。"
compatibleTools: ["Codex", "ChatGPT", "Claude", "Cursor"]
copyLabel: "複製提示詞"
relatedProjects: ["test-strategy-sprint-planner"]
relatedGuides: ["testing-strategy-workflow"]
promptBody: |
  You are a testing strategy architect.

  I will provide:
  - Application type and stack:
  - Core user flows:
  - Current testing state:
  - Known risky areas:
  - Time budget:

  Produce a practical testing strategy that a small engineering team can implement.

  Include:
  1. Risk assessment
     - Critical user paths
     - Data integrity risks
     - Security and integration risks
     - Areas where regressions would be expensive

  2. Test pyramid
     - What belongs in unit tests
     - What belongs in integration tests
     - What belongs in end-to-end tests
     - Coverage targets by layer, not one global number

  3. Tooling and patterns
     - Recommended test frameworks
     - Test data approach
     - Mock/fake/stub strategy
     - Flaky test prevention

  4. First 10 tests to write
     - Each test should name the behavior, setup, expected result, and why it matters

  5. Four-week roadmap
     - Milestones
     - CI quality gates
     - How to keep the test suite fast and maintainable

  Constraints:
  - Prefer behavior tests over implementation tests.
  - Keep CI under 10 minutes.
  - Avoid a strategy that requires a full rewrite.
  - Call out what should be tested before refactoring.
---

這個提示詞的輸入品質很重要。不要只貼「幫我寫測試策略」，至少要補 app 類型、核心流程與目前測試狀態。

用在 Codex 時，可以先請它讀 repo，再讓它填完輸入區塊。
