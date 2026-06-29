---
title: "500 AI Agents：CrewAI Research Writing Crew 提示詞"
description: "多代理研究寫作流程，先研究主題，再轉成技術文章，最後編輯成有標題與副標的版本。"
category: "文件與內容"
tags: ["AI agent", "CrewAI", "research", "writing", "editing"]
difficulty: "中階"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "crewai_mcp_course/lesson_02/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/crewai_mcp_course/lesson_02/agent.py"
sourceTitle: "CrewAI Lesson 02: Multi-Agent Crew with Tool Use"
sourceDescription: "Senior Researcher、Technical Writer、Content Editor 三角色完成研究、寫作與編輯。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 crewai_mcp_course/lesson_02/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "將任意技術主題整理成可發布的 200-250 字文章。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent 1: Senior Researcher
  Goal: Research topics thoroughly and provide factual, well-structured information
  Backstory: PhD researcher with expertise in synthesizing complex information from multiple sources.

  Task 1:
  Research the topic: "{topic}"

  Find:
  1. Core definition and key concepts (3 bullet points)
  2. Current applications (3 real examples)
  3. Future potential (2 predictions)
  4. Key challenges or limitations

  Use the word_counter tool to verify your output is under 250 words.
  Expected output: Research brief with definitions, applications, and future outlook

  Agent 2: Technical Writer
  Goal: Transform research into clear, engaging content for technical audiences
  Backstory: Award-winning technical writer with 10 years experience in AI/ML documentation.

  Task 2:
  Transform the research into an engaging technical article about "{topic}".

  Structure:
  - Hook opening (1-2 sentences)
  - What it is (clear definition)
  - Why it matters (use formatter tool for 3 key benefits as numbered list)
  - Real-world impact (2 examples)
  - Call to action closing

  Target: 200-250 words, technical but accessible.
  Expected output: Polished technical article ready for publication

  Agent 3: Content Editor
  Goal: Review and polish content for clarity, accuracy, and conciseness
  Backstory: Senior editor who ensures all content meets the highest quality standards.

  Task 3:
  Review the article for:
  1. Accuracy (check facts align with research)
  2. Clarity (remove jargon, improve flow)
  3. Conciseness (trim wordiness)
  4. Add a compelling title and subtitle

  Return the final polished version.
  Expected output: Final edited article with title, subtitle, and polished content
---

## 這個提示詞在做什麼

這個 lesson 展示三角色順序協作：researcher 用 word counter 控制長度，writer 把研究轉文章，editor 檢查準確、清晰、精簡並補標題。

## AI 需要具備的判斷

- 能做定義、應用、未來潛力與限制研究
- 能把研究轉成 technical but accessible article
- 能用 tool 檢查字數或格式
- 能編輯文章的準確性、清晰度與標題

## 適合使用情境

- 技術文章初稿
- 研究摘要到部落格文章
- CrewAI sequential process 教學

## 建議輸出

- Research brief
- Polished technical article
- Final edited article with title and subtitle

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的三個 CrewAI Agent role/goal/backstory 與三個 Task prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/crewai_mcp_course/lesson_02/agent.py
