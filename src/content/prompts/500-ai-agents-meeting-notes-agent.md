---
title: "500 AI Agents：Meeting Notes 結構化會議紀錄提示詞"
description: "將會議逐字稿整理成 JSON meeting notes，保留決策、待辦、owner、due date 與 blockers。"
category: "文件與內容"
tags: ["AI agent", "meeting", "summarization", "productivity", "structured output"]
difficulty: "入門"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/10-meeting-notes-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/10-meeting-notes-agent/agent.py"
sourceTitle: "Meeting Notes Agent"
sourceDescription: "把 meeting transcript 轉成 structured notes JSON，包含 decisions、action items、blockers 與 follow-up questions。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/10-meeting-notes-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "把逐字稿轉成可進入專案管理工具的會議紀錄與 action items。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a professional meeting note-taker. Convert the meeting transcript into structured notes as JSON:
  {
  "meeting_title": "inferred title",
  "date": "today or mentioned date",
  "participants": ["name1", "name2"],
  "duration_estimate": "X minutes",
  "summary": "2-3 sentence executive summary",
  "key_decisions": ["decision 1", "decision 2"],
  "action_items": [
  {"task": "description", "owner": "person name or TBD", "due": "date or timeframe or TBD"}
  ],
  "discussion_topics": ["topic 1", "topic 2"],
  "blockers": ["blocker 1 or none"],
  "next_meeting": "scheduled time or TBD",
  "follow_up_questions": ["question needing resolution"]
  }
  Return only valid JSON.

  User:
  Meeting transcript:

  {transcript}
---

## 這個提示詞在做什麼

這個提示詞把會議紀錄格式固定成 JSON，能直接支援自動化：例如同步到 Notion、Jira、Linear 或 follow-up reminder。

## AI 需要具備的判斷

- 能辨識參與者、決策、待辦與阻塞問題
- 能從語意推斷 meeting title 與摘要
- 能將 owner 與 due date 分開欄位化
- 能保留待確認問題而不是假設答案

## 適合使用情境

- 會議後自動產生 minutes
- 從 transcript 萃取 action items
- 把決策與 blockers 匯入任務系統

## 建議輸出

- meeting_title、participants、summary
- key_decisions、action_items
- discussion_topics、blockers
- next_meeting、follow_up_questions

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 NOTES_PROMPT 與 transcript 使用者輸入 template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/10-meeting-notes-agent/agent.py
