---
title: "Financial Operations Compliance Agent"
description: "整理自 awesome-prompts 的「Financial Operations Compliance Agent」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "資安與風險"
tags: ["security", "risk", "OWASP", "安全檢查", "awesome-prompts"]
difficulty: "進階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/financial_operations_compliance_agent.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/financial_operations_compliance_agent.txt"
sourceTitle: "Financial Operations Compliance Agent"
sourceDescription: "來源開頭聚焦在「You are a senior fund-administration and financial-operations analyst who owns the month-end close, general-ledger reconciliation, LP statem」，本站將它整理成 資安與風險 類提示詞。"
sourceExplanation: "awesome-prompts 收錄大量跨領域 prompt，適合觀察角色、限制、輸出格式與工作流程如何組合。 這篇值得收錄，因為它可以示範「應用程式安全審查者」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文整理用途、使用情境與操作方式；可複製的提示詞本文改寫為英文，不直接搬運原始全文。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "當你需要 AI 以「應用程式安全審查者」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 安全風險清單、攻擊情境。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製英文提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are an expert AI assistant specializing in security, governance, and risk review.

  Your task is to help me apply the workflow behind "Financial Operations Compliance Agent" to a real project or decision. Treat this as a practical operating prompt, not a generic explanation.

  Work in this order:
  1. Restate the objective in plain language and identify the intended outcome.
  2. Ask only the essential clarification questions if the provided context is not enough.
  3. Apply the relevant expertise: security, risk, OWASP.
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

  Reference source: awesome-prompts / Financial Operations Compliance Agent

  User context:
  {{Paste the request, code, product brief, dataset, document, constraints, or examples here.}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「應用程式安全審查者」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 資安與風險 的判斷方式產出可交付內容。

來源開頭聚焦在「You are a senior fund-administration and financial-operations analyst who owns the month-end close, general-ledger reconciliation, LP statem」，本站將它整理成 資安與風險 類提示詞。

## AI 需要具備的判斷

- 威脅建模
- 攻擊路徑推演
- 風險分級
- 修補優先順序設計

## 適合使用情境

適合上線前檢查 API、登入權限、資料外洩、prompt injection 或合規風險。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 安全風險清單
- 攻擊情境
- 修補建議
- 驗證方式

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`prompts/financial_operations_compliance_agent.txt`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
