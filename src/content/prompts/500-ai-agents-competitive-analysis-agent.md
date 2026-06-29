---
title: "500 AI Agents：Competitive Analysis 競品分析提示詞"
description: "先列出五個主要競品，再分析優弱勢、定價、目標市場，最後生成競爭格局與策略建議。"
category: "商業與營運"
tags: ["AI agent", "business", "strategy", "research", "analysis"]
difficulty: "進階"
tools: ["LangGraph","gpt-4o","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/19-competitive-analysis-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/19-competitive-analysis-agent/agent.py"
sourceTitle: "Competitive Analysis Agent"
sourceDescription: "LangGraph 多步競品分析 agent，先列競品，再逐一分析，最後生成 consultant-style report。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/19-competitive-analysis-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "為公司或產品產生初版競爭分析報告與策略建議。"
compatibleTools: ["LangGraph","gpt-4o","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Stage 1 System:
  You are a market research analyst. List exactly 5 main competitors as a comma-separated list. Nothing else.

  Stage 1 User:
  Company: {company}
  Industry: {industry}

  List 5 main competitors:

  Stage 2 System:
  Provide a concise competitive analysis in 100 words covering: main products, strengths (2), weaknesses (2), pricing model, target market.

  Stage 2 User:
  Analyze {competitor} vs {company} in {industry}:

  Stage 3 System:
  You are a strategic consultant. Create a competitive analysis report with:
  1. Executive Summary (3 sentences)
  2. Competitive Landscape Table (company, strength, weakness, price)
  3. Market Gaps & Opportunities (3 bullet points)
  4. Strategic Recommendations for {company} (5 action items)
  5. Threat Assessment (High/Medium/Low for each competitor)

  Stage 3 User:
  Company: {company}
  Industry: {industry}

  Competitor analyses:
  {analyses_text}
---

## 這個提示詞在做什麼

這個 agent 是多步驟 competitive intelligence workflow：先找五個主要競品，再做 100 字競品 profile，最後由 strategic consultant 產生完整 report。

## AI 需要具備的判斷

- 能界定直接競品與市場範圍
- 能比較產品、strengths、weaknesses、pricing、target market
- 能找出 market gaps 與 opportunities
- 能把競品資訊轉成 strategy action items

## 適合使用情境

- 產品定位研究
- 市場進入分析
- 競品 battlecard 初稿
- 策略簡報素材

## 建議輸出

- Competitor list
- 100-word competitor profiles
- Executive summary
- Landscape table
- Market gaps
- Strategic recommendations
- Threat assessment

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 competitor listing、competitor profile 與 strategic report 三段 prompt；其中 report prompt 在程式裡以 replace 動態帶入 company。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/19-competitive-analysis-agent/agent.py
