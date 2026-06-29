---
title: "500 AI Agents：Email Drafting Crew 商務信件提示詞"
description: "先萃取信件目的、重點與 CTA，再產生有 subject、greeting、body、closing 的商務 email。"
category: "文件與內容"
tags: ["AI agent", "CrewAI", "writing", "communication", "productivity"]
difficulty: "入門"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/05-email-drafting-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/05-email-drafting-agent/agent.py"
sourceTitle: "Email Drafting Agent"
sourceDescription: "兩個 CrewAI agent 先分析 email context，再撰寫可寄出的 professional email。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/05-email-drafting-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "需要從零散 context 產生語氣一致、目的清楚且可直接寄出的商務信件。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent 1: Email Context Analyst
  Goal: Understand the email context, extract key points, and define the structure
  Backstory: You are an expert business communication analyst who distills complex situations into clear email requirements.

  Task 1:
  Analyze this email requirement:
  Context: {context}
  Recipient: {recipient}
  Desired tone: {tone}

  Extract: purpose, key points to cover, call to action, subject line suggestion.
  Expected output: Structured email brief: purpose, key points, CTA, and suggested subject line

  Agent 2: Professional Email Writer
  Goal: Draft clear, concise, and effective professional emails
  Backstory: You are a professional copywriter specializing in business emails that get responses.

  Task 2:
  Using the analysis, draft a complete professional email.
  Tone: {tone}. Recipient: {recipient}.
  Include: Subject line, greeting, body paragraphs, closing, signature placeholder.
  Keep it concise — under 200 words for the body.
  Expected output: Complete formatted email ready to send
---

## 這個提示詞在做什麼

這是一個典型的兩段式 CrewAI 寫作流程：先由 analyst 建立 email brief，再由 writer 依照 tone 與 recipient 產出完整 email。

## AI 需要具備的判斷

- 能辨識信件目的、收件者與語氣
- 能萃取必要 key points 與 call to action
- 能把分析轉成短而清楚的正式信件
- 能維持 subject、greeting、body、closing 的格式完整

## 適合使用情境

- 寄客戶 follow-up
- 整理內部溝通信件
- 把 meeting context 改寫成正式 email

## 建議輸出

- Structured email brief
- Subject line
- Under 200 words 的 email body
- Closing 與 signature placeholder

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 CrewAI Agent role/goal/backstory 與 Task description/expected_output。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/05-email-drafting-agent/agent.py
