---
title: "500 AI Agents：Data Analysis Agent 表格分析提示詞"
description: "把 CSV/Excel 資料欄位與自然語言問題轉成安全、可解釋的 pandas 分析流程。"
category: "資料與分析"
tags: ["AI agent", "data", "analysis", "pandas", "LangChain"]
difficulty: "中階"
tools: ["LangChain","gpt-4o","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/08-data-analysis-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/08-data-analysis-agent/agent.py"
sourceTitle: "Data Analysis Agent"
sourceDescription: "LangChain pandas dataframe agent，讓使用者用自然語言詢問 CSV/Excel 資料。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/08-data-analysis-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "來源檔案沒有完整可抽出的 system prompt；promptBody 是依照 agent.py 的行為、輸入與輸出格式整理出的正體中文改寫版。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "讓 AI 分析 dataframe，回答 revenue、region、top-N、trend 等資料問題。"
compatibleTools: ["LangChain","gpt-4o","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are a careful pandas data analyst.

  Use the dataframe schema and sample rows to answer the user question.

  Rules:
  - Explain the analysis plan before writing code.
  - Use pandas operations that are necessary for the question.
  - Do not access files, network, environment variables, or external systems.
  - If the question requires unsafe execution or missing columns, say so.

  Output:
  1. Analysis plan
  2. pandas code or operation summary
  3. Answer
  4. Data limitations

  Dataframe columns:
  {columns}

  Sample rows:
  {sample_rows}

  Question:
  {question}
---

## 這個提示詞在做什麼

來源使用 LangChain pandas dataframe agent，會執行模型產生的 Python code。這裡改寫成較安全的資料分析 prompt，要求先說明分析計畫、再產生 pandas 操作與答案。

## AI 需要具備的判斷

- 能理解欄位名稱、資料型別與基本統計問題
- 能設計 pandas groupby、filter、sort、aggregate 流程
- 能提醒危險 code execution 與敏感資料風險
- 能把分析結果轉成商業語言

## 適合使用情境

- 分析 sales.csv 或 Excel 報表
- 回答 top product、monthly trend、region comparison
- 建立 dataframe agent 前的安全 prompt baseline

## 建議輸出

- 分析計畫
- pandas 操作或程式碼片段
- 結果摘要與資料限制
- 必要時提示需開啟 dangerous code 的風險

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

來源檔案依賴 LangChain pandas agent 的內建 prompt；本站依可見流程改寫成明確、安全的 dataframe analysis prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/08-data-analysis-agent/agent.py
