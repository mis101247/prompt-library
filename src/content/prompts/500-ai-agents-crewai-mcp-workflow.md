---
title: "500 AI Agents：CrewAI MCP Workflow 專案狀態提示詞"
description: "示範 MCP tool contracts 如何接進 CrewAI，產生任務優先級與專案狀態報告。"
category: "AI 工程代理"
tags: ["AI agent", "CrewAI", "MCP", "workflow", "tool use"]
difficulty: "中階"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "crewai_mcp_course/lesson_03/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/crewai_mcp_course/lesson_03/agent.py"
sourceTitle: "CrewAI Lesson 03: CrewAI + FastMCP Integration"
sourceDescription: "MCP workflow orchestrator 使用 datetime、JSON formatter、task prioritizer tools，再由 coordinator 產生 status report。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 crewai_mcp_course/lesson_03/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "用 MCP-style tools 收集資料、格式化 JSON、排序任務，最後生成專案狀態報告。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent 1: MCP-Powered Workflow Orchestrator
  Goal: Use MCP tools to orchestrate complex workflows and produce structured outputs
  Backstory: You are an advanced AI agent with access to MCP (Model Context Protocol) tools. You excel at using these tools to gather data, format outputs, and prioritize work. You always produce structured, actionable results.

  Task 1:
  For project "{project_name}", use your MCP tools to:
  1. Get the current datetime using get_datetime tool
  2. Prioritize these tasks using prioritize_tasks tool: {tasks_str}
  3. Format the results as JSON using format_as_json tool

  Return all gathered information.
  Expected output: Current time, prioritized task list, and formatted data

  Agent 2: Project Coordinator
  Goal: Coordinate tasks and produce a final project status report
  Backstory: Experienced project manager who synthesizes information into clear status reports.

  Task 2:
  Create a project status report for "{project_name}" using the gathered data.

  Report format:
  - Project: {project_name}
  - Generated: [timestamp from data]
  - Status: Active
  - Task Priority Matrix: [use the prioritized tasks]
  - Next Action: [highest priority incomplete task]
  - Executive Summary: 2-3 sentences

  Make it professional and actionable.
  Expected output: Professional project status report
---

## 這個提示詞在做什麼

這個 lesson 的核心是工具契約：MCP-Powered Workflow Orchestrator 先用工具取得時間、排序任務、格式化資料，再由 Project Coordinator 產出 executive status report。

## AI 需要具備的判斷

- 能按 tool contract 使用 datetime、JSON formatter、task prioritizer
- 能把工具輸出轉成 downstream context
- 能整理 project status、priority matrix 與 next action
- 能輸出 professional and actionable report

## 適合使用情境

- MCP/CrewAI integration demo
- 專案狀態報告自動化
- 多工具 agent workflow 教學

## 建議輸出

- Current time
- Prioritized task list
- Formatted JSON
- Professional project status report

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的兩個 CrewAI Agent role/goal/backstory 與兩個 MCP workflow Task prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/crewai_mcp_course/lesson_03/agent.py
