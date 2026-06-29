---
title: "query-translator"
description: "整理自 prompts.chat 的「query-translator」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "提示工程"
tags: ["prompt engineering", "context", "structured output", "instruction design", "prompts.chat"]
difficulty: "中階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "workflow"
sourceRepo: "prompts.chat"
sourceRepoUrl: "https://github.com/f/prompts.chat"
sourcePath: "src/lib/ai/query-translator.prompt.yml"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/src/lib/ai/query-translator.prompt.yml"
sourceTitle: "query-translator"
sourceDescription: "這份來源展示 prompts.chat 如何把 prompt 改寫、搜尋、翻譯、品質檢查或 MCP 操作包成可重複執行的工作流。"
sourceExplanation: "prompts.chat 展示 prompt library 產品如何處理搜尋、改寫、品質檢查與 MCP/Claude plugin 工作流。 這篇值得收錄，因為它可以示範「提示工程設計師」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文重新整理用途、使用情境與操作方式；本文以正體中文分析與改寫版提示詞為主，保留來源連結方便回查原始模板。"
preserveOriginalPrompt: false
promptLanguage: "英文來源；本站提供正體中文整理版"
promptUseCase: "當你需要 AI 以「提示工程設計師」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 改寫後提示詞、輸入變數。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製整理版提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  你是提示工程設計師。請根據我提供的背景、目標、限制與素材，把模糊意圖整理成角色、上下文、限制條件、輸出格式與評估方式清楚的 prompt。

  請先確認任務目標，再用以下方式回覆：

  1. 任務理解：用 3-5 句話整理你認為我要解決的問題。
  2. 需要的判斷：列出你會使用的專業判斷，包含：
  - 意圖保真
  - 上下文設計
  - 格式約束
  - 失敗案例預防
  3. 建議做法：提出可執行的步驟，並標明每一步需要的輸入資料。
  4. 交付內容：請輸出下列項目：
  - 改寫後提示詞
  - 輸入變數
  - 輸出格式
  - 使用注意事項
  5. 風險與待確認：指出你不確定、需要我補充，或可能造成誤判的地方。

  請避免空泛建議。每個結論都要連回我提供的脈絡或限制。如果資訊不足，先提出最少量、最關鍵的澄清問題。

  任務主題：query-translator
  我的背景資料：
  {{在這裡貼上需求、程式碼、文件、資料、錯誤訊息或你要 AI 處理的素材}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「提示工程設計師」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 提示工程 的判斷方式產出可交付內容。

這份來源展示 prompts.chat 如何把 prompt 改寫、搜尋、翻譯、品質檢查或 MCP 操作包成可重複執行的工作流。

## AI 需要具備的判斷

- 意圖保真
- 上下文設計
- 格式約束
- 失敗案例預防

## 適合使用情境

適合建立可重複使用的 system prompt、工作流 prompt、structured output prompt 或 prompt 改寫規則。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 改寫後提示詞
- 輸入變數
- 輸出格式
- 使用注意事項

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`src/lib/ai/query-translator.prompt.yml`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
