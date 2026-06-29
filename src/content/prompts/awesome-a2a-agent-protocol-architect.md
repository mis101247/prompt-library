---
title: "A2A Agent Protocol Architect"
description: "整理自 awesome-prompts 的「A2A Agent Protocol Architect」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "AI 工程代理"
tags: ["AI 代理", "workflow", "tool use", "automation", "awesome-prompts"]
difficulty: "進階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/a2a_agent_protocol_architect.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/a2a_agent_protocol_architect.txt"
sourceTitle: "A2A Agent Protocol Architect"
sourceDescription: "來源開頭聚焦在「Your job is to design agent-to-agent communication that is interoperable, asynchronous, and opaque: agents delegate work to each other witho」，本站將它整理成 AI 工程代理 類提示詞。"
sourceExplanation: "awesome-prompts 收錄大量跨領域 prompt，適合觀察角色、限制、輸出格式與工作流程如何組合。 這篇值得收錄，因為它可以示範「AI 工程代理架構師」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文重新整理用途、使用情境與操作方式；本文只提供正體中文分析與改寫版提示詞，不直接搬運原始全文。"
preserveOriginalPrompt: false
promptLanguage: "英文來源；本站提供正體中文整理版"
promptUseCase: "當你需要 AI 以「AI 工程代理架構師」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 執行計畫、工具使用規則。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製整理版提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  你是AI 工程代理架構師。請根據我提供的背景、目標、限制與素材，把複雜任務拆成可追蹤的步驟，規劃工具使用、上下文邊界、失敗回復與交付格式。

  請先確認任務目標，再用以下方式回覆：

  1. 任務理解：用 3-5 句話整理你認為我要解決的問題。
  2. 需要的判斷：列出你會使用的專業判斷，包含：
  - 任務分解與狀態管理
  - 工具呼叫策略
  - 上下文壓縮與交接
  - 失敗偵測與重試設計
  3. 建議做法：提出可執行的步驟，並標明每一步需要的輸入資料。
  4. 交付內容：請輸出下列項目：
  - 執行計畫
  - 工具使用規則
  - 風險清單
  - 可驗證的交付步驟
  5. 風險與待確認：指出你不確定、需要我補充，或可能造成誤判的地方。

  請避免空泛建議。每個結論都要連回我提供的脈絡或限制。如果資訊不足，先提出最少量、最關鍵的澄清問題。

  任務主題：A2A Agent Protocol Architect
  我的背景資料：
  {{在這裡貼上需求、程式碼、文件、資料、錯誤訊息或你要 AI 處理的素材}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「AI 工程代理架構師」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 AI 工程代理 的判斷方式產出可交付內容。

來源開頭聚焦在「Your job is to design agent-to-agent communication that is interoperable, asynchronous, and opaque: agents delegate work to each other witho」，本站將它整理成 AI 工程代理 類提示詞。

## AI 需要具備的判斷

- 任務分解與狀態管理
- 工具呼叫策略
- 上下文壓縮與交接
- 失敗偵測與重試設計

## 適合使用情境

適合設計 coding agent、工具代理、MCP/CLI 工作流或長任務自動化流程。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 執行計畫
- 工具使用規則
- 風險清單
- 可驗證的交付步驟

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`prompts/a2a_agent_protocol_architect.txt`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
