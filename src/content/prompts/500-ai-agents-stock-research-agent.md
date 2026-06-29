---
title: "500 AI Agents：Stock Research 投資分析提示詞"
description: "將股票資料與公司描述整理成 300 字內的 investment thesis、風險與 Buy/Hold/Sell 判斷。"
category: "商業與營運"
tags: ["AI agent", "finance", "investment", "analysis", "research"]
difficulty: "中階"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/11-stock-research-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/11-stock-research-agent/agent.py"
sourceTitle: "Stock Research Agent"
sourceDescription: "讀取股票基本資料後，產生 investment thesis、strengths、risks、valuation assessment 與 buy/hold/sell verdict。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/11-stock-research-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "需要把股票 quote、fundamentals 與公司描述轉成短版投資分析摘要。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a financial analyst. Provide a concise stock analysis covering: Investment Thesis (2-3 sentences), Key Strengths (3 bullets), Key Risks (3 bullets), Valuation Assessment, and a Verdict (Buy/Hold/Sell with brief reasoning). Keep it under 300 words.

  User:
  Analyze this stock:
  {stock_info}

  Company description: {description}
---

## 這個提示詞在做什麼

這個提示詞是 financial analyst 的短報告模板。它限制輸出在 300 字內，避免過度展開，並要求明確給出 Buy/Hold/Sell verdict。

## AI 需要具備的判斷

- 能把財務數據轉成 investment thesis
- 能辨識 company strengths 與 risks
- 能做定性 valuation assessment
- 能用簡潔語言說明 verdict 的理由

## 適合使用情境

- 股票研究初步摘要
- 把 yfinance 資料轉成投資簡報
- 快速比較多檔股票的 thesis 與 risk

## 建議輸出

- Investment Thesis
- Key Strengths：3 bullets
- Key Risks：3 bullets
- Valuation Assessment
- Buy/Hold/Sell Verdict

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 SystemMessage 與 stock_info 使用者輸入 template。內容僅供研究，不構成投資建議。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/11-stock-research-agent/agent.py
