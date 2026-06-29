---
title: "Quality Check"
description: "整理自 prompts.chat 的「Quality Check」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "測試與驗證"
tags: ["testing", "QA", "verification", "quality gate", "prompts.chat"]
difficulty: "中階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "workflow"
sourceRepo: "prompts.chat"
sourceRepoUrl: "https://github.com/f/prompts.chat"
sourcePath: "src/lib/ai/quality-check.prompt.yml"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/src/lib/ai/quality-check.prompt.yml"
sourceTitle: "Quality Check"
sourceDescription: "這份來源展示 prompts.chat 如何把 prompt 改寫、搜尋、翻譯、品質檢查或 MCP 操作包成可重複執行的工作流。"
sourceExplanation: "prompts.chat 展示 prompt library 產品如何處理搜尋、改寫、品質檢查與 MCP/Claude plugin 工作流。 這篇值得收錄，因為它可以示範「測試策略設計師」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文重新整理用途、使用情境與操作方式；本文以正體中文分析與改寫版提示詞為主，保留來源連結方便回查原始模板。"
preserveOriginalPrompt: false
promptLanguage: "英文來源；本站提供正體中文整理版"
promptUseCase: "當你需要 AI 以「測試策略設計師」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 測試策略、測試案例。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製整理版提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  你是測試策略設計師。請根據我提供的背景、目標、限制與素材，把需求、風險與程式變更轉成測試層級、驗收條件、品質門檻與回歸檢查。

  請先確認任務目標，再用以下方式回覆：

  1. 任務理解：用 3-5 句話整理你認為我要解決的問題。
  2. 需要的判斷：列出你會使用的專業判斷，包含：
  - 測試金字塔思考
  - 風險導向測試
  - 驗收條件設計
  - 回歸範圍控管
  3. 建議做法：提出可執行的步驟，並標明每一步需要的輸入資料。
  4. 交付內容：請輸出下列項目：
  - 測試策略
  - 測試案例
  - 品質門檻
  - 手動與自動化檢查清單
  5. 風險與待確認：指出你不確定、需要我補充，或可能造成誤判的地方。

  請避免空泛建議。每個結論都要連回我提供的脈絡或限制。如果資訊不足，先提出最少量、最關鍵的澄清問題。

  任務主題：Quality Check
  我的背景資料：
  {{在這裡貼上需求、程式碼、文件、資料、錯誤訊息或你要 AI 處理的素材}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「測試策略設計師」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 測試與驗證 的判斷方式產出可交付內容。

這份來源展示 prompts.chat 如何把 prompt 改寫、搜尋、翻譯、品質檢查或 MCP 操作包成可重複執行的工作流。

## AI 需要具備的判斷

- 測試金字塔思考
- 風險導向測試
- 驗收條件設計
- 回歸範圍控管

## 適合使用情境

適合建立 test plan、QA checklist、eval benchmark 或 coding agent 的完成條件。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 測試策略
- 測試案例
- 品質門檻
- 手動與自動化檢查清單

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`src/lib/ai/quality-check.prompt.yml`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
