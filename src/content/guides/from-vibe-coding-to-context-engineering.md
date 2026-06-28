---
title: "從 vibe coding 到 context engineering"
description: "如何把自然語言寫程式的靈感流，收斂成有 context、有驗證、有回饋迴圈的 coding agent 工作法。"
category: "workflow"
tags: ["vibe coding", "context engineering", "agentic coding", "workflow"]
difficulty: "入門"
tools: ["Codex", "Claude Code", "Gemini CLI", "Cursor"]
timeEstimate: "12 分鐘"
featured: true
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "guide"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "README.md"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/README.md"
sourceTitle: "awesome-prompts README: Context Engineering / Agent Ecosystem"
sourceDescription: "整理 prompt engineering、context engineering、agent ecosystem 與 AI coding assistants 的大型索引。"
sourceExplanation: "它提供了從單一提示詞走向 context management 的脈絡，很適合作為這個知識庫的總論文章來源。"
localizationNote: "正體中文重寫觀念與工作流程；只引用來源作為方向，不複製原文清單。"
preserveOriginalPrompt: false
guideType: "concept"
learningGoals: ["理解 vibe coding 的優點與風險", "知道什麼 context 應該先提供給 coding agent", "建立 plan -> implement -> verify 的最小迴圈"]
prerequisites: ["已使用過至少一種 coding agent", "有一個想用 AI 協作的既有 repo 或 side project"]
relatedPrompts: ["agentic-coder", "test-strategy-architect"]
---

Vibe coding 最迷人的地方，是你可以用很低的摩擦把想法變成第一版。

但它最容易出事的地方也一樣明顯：如果 context 不清楚，agent 會用它自己的想像補空白；如果完成條件不清楚，agent 會把「看起來完成」當成真的完成。

## 最小 context 包

開始之前，先準備四件事：

- 這次要完成的使用者結果
- 目前 repo 的主要入口與限制
- 不要碰的範圍
- 驗收方式

這比一開始寫很長的提示詞更重要。好的 context 不需要華麗，但要能讓 agent 知道它正在改哪個系統。

## 三段式迴圈

第一段是 plan。要求 agent 先讀檔、指出會改哪些地方、說明成功條件。

第二段是 implement。只做計畫裡的最小變更，不順手重構、不發明新架構。

第三段是 verify。跑測試、build、或至少提供可手動檢查的流程。

## 什麼時候該停下來

如果 agent 開始大量改檔、猜測不存在的 API、或跳過驗證，這不是「AI 很努力」，而是 context 和邊界不夠清楚。

這時候應該回到 spec，把任務切小，再重新開始。
