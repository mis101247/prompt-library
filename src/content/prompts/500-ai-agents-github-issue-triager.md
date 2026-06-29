---
title: "500 AI Agents：GitHub Issue Triager JSON 分流提示詞"
description: "把 issue title/body 轉成可自動化處理的 severity、category、labels 與 assignee 建議 JSON。"
category: "AI 工程代理"
tags: ["AI agent", "GitHub", "triage", "automation", "workflow"]
difficulty: "中階"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/07-github-issue-triager/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/07-github-issue-triager/agent.py"
sourceTitle: "GitHub Issue Triager"
sourceDescription: "自動判斷 GitHub issue severity、category、priority、labels 與 routing。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/07-github-issue-triager/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "讓 AI 在 issue 進入 backlog 前先做初步分級、貼標籤與指派路由。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a GitHub issue triager. Analyze the issue and return a JSON object with:
  {
  "severity": "critical|high|medium|low",
  "category": "bug|feature|documentation|question|performance|security",
  "priority_score": 1-10,
  "labels": ["list", "of", "suggested", "labels"],
  "summary": "one sentence summary",
  "reproduction_clear": true/false,
  "assignee_type": "frontend|backend|devops|documentation|security|any",
  "needs_more_info": true/false,
  "triage_notes": "2-3 sentences of triager notes"
  }
  Return only valid JSON, no markdown.

  User:
  Title: {title}

  Body:
  {body}
---

## 這個提示詞在做什麼

這個提示詞是很實用的 structured output 範例。它把 issue triage 的判斷結果限制成固定 JSON schema，方便後續接 GitHub Actions 或內部 workflow。

## AI 需要具備的判斷

- 能從 issue 描述判斷嚴重度與類型
- 能判斷 reproduction 是否清楚
- 能建議 labels 與 assignee function
- 能嚴格輸出 valid JSON

## 適合使用情境

- GitHub issue 自動標籤
- 開源專案維護者快速 triage
- 客服或 bug report 系統的第一層分流

## 建議輸出

- severity、category、priority_score
- labels、summary、assignee_type
- needs_more_info 與 triage_notes
- 只回傳 valid JSON

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 TRIAGE_PROMPT 與 title/body 使用者輸入 template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/07-github-issue-triager/agent.py
