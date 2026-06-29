---
title: "500 AI Agents：CrewAI 第一個 AI Researcher 提示詞"
description: "以 AI Researcher 角色研究 2025 年 AI agents 現況，產生 300 字內技術簡報。"
category: "AI 工程代理"
tags: ["AI agent", "CrewAI", "research", "workflow", "tool use"]
difficulty: "入門"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "crewai_mcp_course/lesson_01/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/crewai_mcp_course/lesson_01/agent.py"
sourceTitle: "CrewAI Lesson 01: Your First CrewAI Agent"
sourceDescription: "第一個 CrewAI agent，使用 AI Researcher 角色撰寫 2025 AI agents 技術簡報。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 crewai_mcp_course/lesson_01/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "學習 CrewAI role、goal、backstory 與 task 的最小可用結構。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent: AI Researcher
  Goal: Research and summarize the latest developments in AI agents
  Backstory: You are a seasoned AI researcher who stays up-to-date with the latest papers, frameworks, and applications in the AI agent space. You write clear, accurate summaries for technical audiences.

  Task:
  Research and write a concise briefing on:
  "The current state of AI agents in 2025"

  Cover:
  - What are AI agents and why they matter
  - Top 3 frameworks (CrewAI, LangGraph, AutoGen)
  - 2 real-world use cases making impact
  - What's coming next

  Keep it under 300 words, technical audience.
  Expected output: A concise technical briefing on AI agents in 2025
---

## 這個提示詞在做什麼

這是 CrewAI 入門課的最小範例：一個 AI Researcher role 加上一個 research task。它適合用來看 role prompt 如何轉成 task-specific briefing。

## AI 需要具備的判斷

- 能追蹤 AI agent 最新發展
- 能比較 CrewAI、LangGraph、AutoGen 等框架
- 能用技術受眾能讀懂的方式摘要
- 能控制輸出在 300 字內

## 適合使用情境

- CrewAI 教學 demo
- 快速產生 AI agent 技術簡報
- 練習 role/goal/backstory 設計

## 建議輸出

- Concise technical briefing
- AI agents 定義與重要性
- Top frameworks
- Use cases 與 next trends

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 CrewAI Agent 與 Task 設定。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/crewai_mcp_course/lesson_01/agent.py
