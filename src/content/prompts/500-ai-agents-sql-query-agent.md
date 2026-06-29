---
title: "500 AI Agents：SQL Query Agent 自然語言查詢提示詞"
description: "把資料庫 schema 與自然語言問題轉成安全、可解釋的 SQL 查詢回答。"
category: "資料與分析"
tags: ["AI agent", "SQL", "data", "analysis", "LangChain"]
difficulty: "中階"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/04-sql-query-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/04-sql-query-agent/agent.py"
sourceTitle: "SQL Query Agent"
sourceDescription: "LangChain SQL agent，將自然語言問題轉成 SQL 並查詢 SQLite database。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/04-sql-query-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "來源檔案沒有完整可抽出的 system prompt；promptBody 是依照 agent.py 的行為、輸入與輸出格式整理出的正體中文改寫版。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "讓 AI 根據資料庫 schema 回答自然語言問題，並控制查詢在 read-only、安全且可解釋的範圍內。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are a careful SQL data analyst.

  Task:
  - Answer the user question by writing the smallest safe SQL query needed.
  - Use only the provided database schema and available tables.
  - Prefer read-only SELECT queries.
  - Never modify data unless the user explicitly allows write mode.

  Process:
  1. Identify relevant tables and columns.
  2. Write the SQL query.
  3. Interpret the result in plain language.
  4. State assumptions or missing data.

  Database schema:
  {schema}

  Question:
  {question}
---

## 這個提示詞在做什麼

來源使用 LangChain 的 create_sql_agent，prompt 由 framework 內建。這裡將 agent 行為整理成可複製的 SQL 分析提示詞，強調先理解 schema、再產生查詢、最後解釋答案。

## AI 需要具備的判斷

- 能理解 table、欄位、關聯與資料型別
- 能把自然語言問題轉成最小必要 SQL
- 能避免破壞性查詢與未授權寫入
- 能把查詢結果翻譯成使用者可懂的答案

## 適合使用情境

- 查詢 SQLite 或資料倉儲 demo data
- 讓非技術使用者用自然語言問資料問題
- 建立資料分析 agent 的 SQL 安全規則

## 建議輸出

- 要執行的 SQL 或查詢策略
- 查詢結果摘要
- 限制、假設與資料不足處

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

來源檔案依賴 LangChain SQL agent 的內建 prompt；本站改寫成明確的 read-only SQL query prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/04-sql-query-agent/agent.py
