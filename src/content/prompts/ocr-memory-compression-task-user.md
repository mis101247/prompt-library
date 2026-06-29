---
title: "Memory Compression Task User"
description: "整理自 open-code-review 的「Memory Compression Task User」，這篇文章說明它要 AI 做什麼、適合什麼情境，以及如何改寫成可直接使用的提示詞。"
category: "程式碼審查"
tags: ["code review", "review", "quality", "PR", "open-code-review"]
difficulty: "中階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "open-code-review"
sourceRepoUrl: "https://github.com/alibaba/open-code-review"
sourcePath: "internal/config/template/prompts/memory_compression_task_user.md"
sourceUrl: "https://github.com/alibaba/open-code-review/blob/0d601ea/internal/config/template/prompts/memory_compression_task_user.md"
sourceTitle: "Memory Compression Task User"
sourceDescription: "這份來源是 open-code-review 的審查任務模板，重點是把程式變更拆成可規劃、可定位、可輸出的 review 流程。"
sourceExplanation: "open-code-review 把審查流程拆成 plan、filter、location、memory 等任務，適合學習 precision review 的提示詞分工。 這篇值得收錄，因為它可以示範「資深程式碼審查者」需要哪些判斷，以及如何把任務轉成可複製、可驗證的提示詞。"
localizationNote: "本站用正體中文整理用途、使用情境與操作方式；可複製的提示詞本文改寫為英文，不直接搬運原始全文。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "當你需要 AI 以「資深程式碼審查者」的方式處理任務時，可以使用這份整理版提示詞，讓模型先釐清目標、再輸出 審查摘要、高風險問題。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini"]
copyLabel: "複製英文提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are an expert AI assistant specializing in code review and engineering quality.

  Your task is to help me apply the workflow behind "Memory Compression Task User" to a real project or decision. Treat this as a practical operating prompt, not a generic explanation.

  Work in this order:
  1. Restate the objective in plain language and identify the intended outcome.
  2. Ask only the essential clarification questions if the provided context is not enough.
  3. Apply the relevant expertise: code review, review, quality, PR.
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

  Reference source: open-code-review / Memory Compression Task User

  User context:
  {{Paste the request, code, product brief, dataset, document, constraints, or examples here.}}
---

## 這個提示詞在做什麼

我把這份來源解讀為一個「資深程式碼審查者」工作流。它不是只要求 AI 回答問題，而是要求 AI 先理解任務、辨識限制，然後用 程式碼審查 的判斷方式產出可交付內容。

這份來源是 open-code-review 的審查任務模板，重點是把程式變更拆成可規劃、可定位、可輸出的 review 流程。

## AI 需要具備的判斷

- 差異檔判讀
- 問題嚴重度分級
- 具體修正建議
- 避免過度猜測

## 適合使用情境

適合 PR review、改版前檢查、技術債盤點與團隊 review checklist。如果你手上有需求、程式碼、文件、資料或錯誤訊息，可以把素材貼在整理版提示詞的最後一段，讓 AI 先整理脈絡再開始回覆。

## 建議輸出

- 審查摘要
- 高風險問題
- 可行修正建議
- 需要補充的上下文

## 使用方式

1. 先複製上方「整理版提示詞」。
2. 把最後的背景資料區換成你的實際任務、程式碼、文件或限制。
3. 如果你要用在 coding agent，建議再補上 repo 路徑、測試指令、完成條件與不能碰的範圍。
4. 回覆後先檢查它的假設是否正確，再要求它進一步實作、改寫或產出更細的 checklist。

## 來源與改寫策略

來源檔案：`internal/config/template/prompts/memory_compression_task_user.md`。這篇文章保留來源 repo、檔案路徑與原始標題，方便回查脈絡。本站沒有直接搬運整份原始 prompt，而是用正體中文整理它的用途、判斷方式與可操作的改寫版提示詞。
