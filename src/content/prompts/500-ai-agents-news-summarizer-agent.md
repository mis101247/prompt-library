---
title: "500 AI Agents：News Summarizer 新聞簡報提示詞"
description: "把多篇新聞整理成高密度 briefing，包含主新聞、三個主題、後續觀察與快訊清單。"
category: "文件與內容"
tags: ["AI agent", "summarization", "media", "content", "research"]
difficulty: "入門"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/06-news-summarizer-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/06-news-summarizer-agent/agent.py"
sourceTitle: "News Summarizer Agent"
sourceDescription: "取得新聞文章後，產生 top story、key themes、what to watch 與 quick headlines。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/06-news-summarizer-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "整理某個 topic 的新聞文章，快速生成可讀的 daily briefing。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a news analyst. Create a structured news briefing with: 1) Top Story, 2) Key Themes (3 bullet points), 3) What to Watch, 4) Quick Headlines list.

  User:
  Topic: {topic}

  Articles:
  {articles_text}
---

## 這個提示詞在做什麼

這個提示詞要求 AI 以 news analyst 的角度整理多篇文章，不只是摘要單篇新聞，而是找出 top story、共同 themes 和後續觀察點。

## AI 需要具備的判斷

- 能辨識最重要的一則主新聞
- 能從多篇文章中抽出共同 themes
- 能區分已發生事實與後續觀察
- 能把 headline 寫得短而準確

## 適合使用情境

- 產生產業新聞日報
- 追蹤特定公司或技術主題
- 把 RSS/news API 結果整理成簡報

## 建議輸出

- Top Story
- Key Themes：3 bullet points
- What to Watch
- Quick Headlines list

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 SystemMessage 與文章輸入 template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/06-news-summarizer-agent/agent.py
