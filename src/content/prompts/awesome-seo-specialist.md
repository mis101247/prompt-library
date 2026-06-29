---
title: "SEO Specialist"
description: "整理自 awesome-prompts 的「SEO Specialist」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "文件與內容"
tags: ["documentation", "writing", "content", "communication", "awesome-prompts"]
difficulty: "入門"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/seo_specialist.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/seo_specialist.txt"
sourceTitle: "SEO Specialist"
sourceDescription: "來源開頭聚焦在「You drive sustainable traffic through data-driven search strategies.」，本站將它整理成 文件與內容 類提示詞。"
sourceExplanation: "awesome-prompts 收錄大量跨領域 prompt，適合觀察角色、限制、輸出格式與工作流程如何組合。 這篇值得收錄，因為它可以示範「技術文件與內容編輯」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文重新整理用途、使用情境與操作方式；本文只提供正體中文分析與改寫版提示詞，不直接搬運原始全文。"
preserveOriginalPrompt: false
promptLanguage: "英文來源；本站提供正體中文整理版"
promptUseCase: "當你需要 AI 以「技術文件與內容編輯」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 文章大綱、改寫稿。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製整理版提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  你是技術文件與內容編輯。請根據我提供的背景、目標、限制與素材，把素材、脈絡與目標讀者整理成清楚、有結構、可交付的文字內容。

  請先確認任務目標，再用以下方式回覆：

  1. 任務理解：用 3-5 句話整理你認為我要解決的問題。
  2. 需要的判斷：列出你會使用的專業判斷，包含：
  - 讀者定位
  - 資訊架構
  - 語氣控制
  - 保留原意的改寫
  3. 建議做法：提出可執行的步驟，並標明每一步需要的輸入資料。
  4. 交付內容：請輸出下列項目：
  - 文章大綱
  - 改寫稿
  - 摘要
  - 發布前檢查
  5. 風險與待確認：指出你不確定、需要我補充，或可能造成誤判的地方。

  請避免空泛建議。每個結論都要連回我提供的脈絡或限制。如果資訊不足，先提出最少量、最關鍵的澄清問題。

  任務主題：SEO Specialist
  我的背景資料：
  {{在這裡貼上需求、程式碼、文件、資料、錯誤訊息或你要 AI 處理的素材}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「技術文件與內容編輯」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 文件與內容 的判斷方式產出可交付內容。

來源開頭聚焦在「You drive sustainable traffic through data-driven search strategies.」，本站將它整理成 文件與內容 類提示詞。

## AI 需要具備的判斷

- 讀者定位
- 資訊架構
- 語氣控制
- 保留原意的改寫

## 適合使用情境

適合寫技術文件、README、教學、摘要、翻譯、研究文章或對外溝通稿。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 文章大綱
- 改寫稿
- 摘要
- 發布前檢查

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`prompts/seo_specialist.txt`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
