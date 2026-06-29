# 提示詞文章格式模板

這份模板用來新增 `src/content/prompts/*.md` 的提示詞應用文章。

原則：

- 頁面說明、用途分析、使用注意事項使用正體中文。
- `promptBody` 一律使用英文，方便直接貼到 Codex、Claude、ChatGPT、Gemini 或 Cursor。
- 不直接批次搬運授權不明或 GPL 來源全文；用改寫版提示詞、摘要與來源導流。
- 每篇文章都要能回答三件事：這個提示詞在做什麼、適合什麼情境、使用者複製後要怎麼改。

## 檔名

建議使用小寫 kebab-case：

```text
src/content/prompts/{source}-{short-topic}.md
```

範例：

```text
src/content/prompts/awesome-api-integration-architect.md
src/content/prompts/pr-agent-pr-review-summary.md
src/content/prompts/prompts-chat-prompt-manager.md
```

## 完整文章模板

複製以下內容後，把 `{...}` 佔位文字換成實際內容。

```md
---
title: "{英文或中英混合標題}"
description: "{正體中文一句話說明：這個提示詞協助使用者完成什麼任務。}"
category: "{分類，例如：提示工程、AI 工程代理、程式開發、程式碼審查、測試與驗證、資安與風險、產品與設計、資料與分析、文件與內容}"
tags: ["{tag-1}", "{tag-2}", "{tag-3}", "{sourceRepo}"]
difficulty: "入門"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "10-20 分鐘"
featured: false
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
sourceType: "prompt"
sourceRepo: "{來源 repo 名稱，例如 awesome-prompts}"
sourceRepoUrl: "{來源 repo GitHub URL}"
sourcePath: "{來源檔案路徑，例如 prompts/example.txt}"
sourceUrl: "{來源檔案 GitHub blob URL}"
sourceTitle: "{原始 prompt / article / rule 標題}"
sourceDescription: "{正體中文摘要：原始來源主要在處理什麼問題。}"
sourceExplanation: "{正體中文說明：為什麼這個來源值得收錄，適合學到什麼 prompt 設計方式。}"
localizationNote: "本站用正體中文整理用途、使用情境與操作方式；可複製的提示詞本文改寫為英文，不直接搬運原始全文。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "{正體中文說明：使用者什麼時候應該複製這份提示詞。}"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini", "Cursor"]
copyLabel: "複製英文提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are an expert AI assistant specializing in {domain}.

  Your task is to help me {specific task}. Treat this as a practical operating prompt, not a generic explanation.

  Work in this order:
  1. Restate the objective in plain language and identify the intended outcome.
  2. Ask only the essential clarification questions if the provided context is not enough.
  3. Apply the relevant expertise: {skill-1}, {skill-2}, {skill-3}.
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
  - Include practical validation steps when the task involves code, product design, data, security, testing, or operations.
  - Adapt the depth of the answer to the complexity of the user request.

  Reference source: {sourceRepo} / {sourceTitle}

  User context:
  {{Paste the request, code, product brief, dataset, document, constraints, or examples here.}}
---

## 這個提示詞在做什麼

用 2-4 句正體中文說明這份提示詞的用途。重點放在「它會要求 AI 做哪些判斷」，不要只重述標題。

建議寫法：

- 它要 AI 扮演什麼角色。
- 它會把輸入轉成什麼輸出。
- 它適合在工作流程的哪一段使用。

## AI 需要具備的判斷

- {能力 1，例如：需求拆解與優先級判斷}
- {能力 2，例如：風險辨識與驗證設計}
- {能力 3，例如：輸出格式設計}
- {能力 4，例如：工具使用與交接規劃}

## 適合使用情境

用正體中文列出 2-4 種具體情境，讓使用者知道什麼時候該複製這份提示詞。

範例：

- 要把模糊需求整理成可執行規格。
- 要請 coding agent 先做審查，再提出最小修改計畫。
- 要把 review、testing、debugging 流程變成固定 checklist。

## 建議輸出

- {輸出 1，例如：任務理解}
- {輸出 2，例如：執行步驟}
- {輸出 3，例如：風險與驗證清單}
- {輸出 4，例如：下一步建議}

## 使用方式

1. 複製上方英文提示詞。
2. 把 `User context` 區塊換成你的實際任務、程式碼、文件或限制。
3. 如果要用在 coding agent，補上 repo 路徑、測試指令、完成條件與不能修改的範圍。
4. 先檢查 AI 回覆中的假設是否正確，再要求它實作、改寫或輸出更細的 checklist。

## 使用注意事項

- 如果任務很模糊，先要求 AI 問 1-3 個澄清問題。
- 如果任務涉及程式碼，要求它先讀檔再修改。
- 如果輸出會影響安全、法務、財務或醫療判斷，需要人工再確認。
- 如果來源授權不適合全文重用，只保留改寫版提示詞與來源連結。

## 來源與改寫策略

來源檔案：`{sourcePath}`。

這篇文章保留來源 repo、檔案路徑、原始標題與收錄理由，方便回查脈絡。本站用正體中文整理用途、判斷方式與使用注意事項，並提供英文改寫版提示詞，避免直接搬運原始全文。
```

## 發布前檢查清單

- `promptBody` 是否全英文。
- 正體中文說明是否自然、像台灣常見用法。
- `sourceRepo`、`sourceRepoUrl`、`sourcePath`、`sourceUrl` 是否完整。
- `sourceExplanation` 是否說明「為什麼值得收錄」。
- `promptUseCase` 是否能讓使用者知道什麼時候該用。
- `copyLabel` 是否為 `複製英文提示詞`。
- 是否跑過 `npm run build`。
