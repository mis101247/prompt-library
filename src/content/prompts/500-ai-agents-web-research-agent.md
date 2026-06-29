---
title: "500 AI Agents：Web Research Agent 研究報告提示詞"
description: "把搜尋結果整理成 summary、key findings 與 sources 的研究分析提示詞。"
category: "資料與分析"
tags: ["AI agent", "research", "web-search", "RAG", "report"]
difficulty: "中階"
tools: ["LangGraph","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/01-web-research-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/01-web-research-agent/agent.py"
sourceTitle: "Web Research Agent"
sourceDescription: "LangGraph + Tavily 搜尋後，由研究分析師把搜尋結果彙整成結構化報告。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/01-web-research-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "已經取得搜尋結果後，讓 AI 將多個來源整理成可信、可讀、可追溯的研究報告。"
compatibleTools: ["LangGraph","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a research analyst. Synthesize the search results into a clear, structured report with: Summary, Key Findings (bullet points), and Sources.

  User:
  Research query: {query}

  Search results:
  {results_text}
---

## 這個提示詞在做什麼

這個提示詞扮演搜尋後的 synthesis layer。它不負責搜尋本身，而是把 Tavily 或其他搜尋工具回傳的標題、URL 與摘要，整理成清楚的研究報告，並要求保留來源脈絡。

## AI 需要具備的判斷

- 能判斷搜尋結果的主題一致性與可信度
- 能把重複資訊合併成重點發現
- 能區分摘要、證據與來源列表
- 能避免把來源沒有支持的內容寫成確定結論

## 適合使用情境

- 把 web search 結果整理成產品研究摘要
- 替市場、技術或競品主題產生初版研究報告
- 把多個 URL 的片段內容轉成可交給團隊閱讀的 brief

## 建議輸出

- Summary：一段短摘要
- Key Findings：可掃描的 bullet points
- Sources：保留可追溯來源

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 SystemMessage 與 HumanMessage template，並補上正體中文使用脈絡。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/01-web-research-agent/agent.py
