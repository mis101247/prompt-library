---
title: "500 AI Agents：Job Application Crew 求職材料提示詞"
description: "兩代理求職工作流，先解析 JD，再產生 cover letter、履歷重點、面試題與談薪區間。"
category: "商業與營運"
tags: ["AI agent", "recruitment", "resume", "writing", "communication"]
difficulty: "中階"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/18-job-application-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/18-job-application-agent/agent.py"
sourceTitle: "Job Application Agent"
sourceDescription: "CrewAI job application workflow，分析職缺後產生 cover letter、resume bullets、interview questions 與 negotiation range。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/18-job-application-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "把職缺描述與候選人 profile 轉成客製化求職材料。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent 1: Job Requirements Analyst
  Goal: Analyze the job description and identify key requirements, values, and culture signals
  Backstory: Ex-hiring manager at FAANG with 10 years recruiting experience. Expert at decoding job descriptions.

  Task 1:
  Analyze this job description:
  {job_desc}

  Extract: top 5 required skills, culture signals, what this company values most, potential red flags, and key phrases to mirror in the application.
  Expected output: Job analysis: key requirements, culture signals, important keywords

  Agent 2: Career Coach and Application Writer
  Goal: Create tailored application materials that maximize interview chances
  Backstory: Career coach who has helped 500+ candidates land roles at top tech companies.

  Task 2:
  Using the job analysis, create application materials for this candidate:
  {candidate_profile}

  Produce:
  1. COVER LETTER (250-300 words, 3 paragraphs: hook, evidence, close)
  2. TOP 5 RESUME BULLETS TO HIGHLIGHT (tailored to this specific role)
  3. 10 LIKELY INTERVIEW QUESTIONS (5 behavioral, 5 technical) with suggested answer frameworks
  4. NEGOTIATION RANGE ESTIMATE based on role seniority and company
  Expected output: Cover letter, resume bullets, interview questions, salary range
---

## 這個提示詞在做什麼

這個 CrewAI workflow 將求職文件拆成 job requirements analysis 與 application writing。前者讀懂公司要什麼，後者把候選人經驗對齊成 cover letter 與面試準備。

## AI 需要具備的判斷

- 能從 JD 抽出 required skills、culture signals 與 company values
- 能辨識 red flags 與可 mirror 的 key phrases
- 能寫出 250-300 字 cover letter
- 能產生 behavioral/technical interview questions 與 answer frameworks

## 適合使用情境

- 客製化 cover letter
- 求職前面試準備
- 履歷 bullet 對齊特定職缺

## 建議輸出

- Job analysis
- Cover letter
- Top 5 resume bullets
- 10 interview questions
- Negotiation range estimate

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 CrewAI analyst/writer role 與兩段 Task prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/18-job-application-agent/agent.py
