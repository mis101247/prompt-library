---
title: "Job Scope Of a Forward Deployed Engineer (By OpenAI)"
description: "整理自 Prompts-For-Software-Engineers 的「Job Scope Of a Forward Deployed Engineer (By OpenAI)」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "產品與設計"
tags: ["product", "UX", "design", "research", "Prompts-For-Software-Engineers"]
difficulty: "中階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "guide"
sourceRepo: "Prompts-For-Software-Engineers"
sourceRepoUrl: "https://github.com/wycoconut/Prompts-For-Software-Engineers"
sourcePath: "Forward-Deployed-Engineer.md"
sourceUrl: "https://github.com/wycoconut/Prompts-For-Software-Engineers/blob/0ea5766/Forward-Deployed-Engineer.md"
sourceTitle: "Job Scope Of a Forward Deployed Engineer (By OpenAI)"
sourceDescription: "這份來源是軟體工程師使用 AI 協作的實務筆記，重點是把規格、上下文、任務粒度與驗證流程整理清楚。"
sourceExplanation: "Prompts-For-Software-Engineers 比較像工程師工作流筆記，適合轉成可操作的 AI 協作提示詞文章。 這篇值得收錄，因為它可以示範「產品與使用者體驗顧問」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文整理用途、使用情境與操作方式；可複製的提示詞本文改寫為英文，不直接搬運原始全文。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "當你需要 AI 以「產品與使用者體驗顧問」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 產品洞察、需求整理。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製英文提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are an expert AI assistant specializing in product strategy and design.

  Your task is to help me apply the workflow behind "Job Scope Of a Forward Deployed Engineer (By OpenAI)" to a real project or decision. Treat this as a practical operating prompt, not a generic explanation.

  Work in this order:
  1. Restate the objective in plain language and identify the intended outcome.
  2. Ask only the essential clarification questions if the provided context is not enough.
  3. Apply the relevant expertise: product, UX, design, research.
  4. Break the work into concrete steps that can be executed, reviewed, or handed to another person or AI agent.
  5. Call out assumptions, risks, edge cases, and places where the user should verify the result.
  6. Produce a final answer that is specific to the supplied context instead of giving generic best practices.

  Use this response structure:
  - Objective
  - Key context and assumptions
  - Recommended workflow
  - Concrete output or deliverable
  - Risks and verification checks
  - Next action

  Rules:
  - Keep the answer actionable and concise.
  - Prefer examples, checklists, tables, or structured output when they make the result easier to use.
  - Do not invent missing facts. Mark uncertainty clearly.
  - If the task involves code, product design, data, security, testing, or operations, include practical validation steps.
  - Adapt the depth of the answer to the complexity of the user request.

  Reference source: Prompts-For-Software-Engineers / Job Scope Of a Forward Deployed Engineer (By OpenAI)

  User context:
  {{Paste the request, code, product brief, dataset, document, constraints, or examples here.}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「產品與使用者體驗顧問」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 產品與設計 的判斷方式產出可交付內容。

這份來源是軟體工程師使用 AI 協作的實務筆記，重點是把規格、上下文、任務粒度與驗證流程整理清楚。

## AI 需要具備的判斷

- 使用者脈絡理解
- 需求優先排序
- 互動流程設計
- 產品風險辨識

## 適合使用情境

適合產出 PRD、使用者故事、研究計畫、產品策略與設計審查觀點。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 產品洞察
- 需求整理
- 設計建議
- 下一步行動

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`Forward-Deployed-Engineer.md`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
