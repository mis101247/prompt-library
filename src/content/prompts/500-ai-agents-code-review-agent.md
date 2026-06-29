---
title: "500 AI Agents：Code Review Agent 程式碼審查提示詞"
description: "用五個面向審查程式碼，並要求以 markdown 回傳品質評級與改善建議。"
category: "程式碼審查"
tags: ["AI agent", "LangChain", "code review", "security", "quality"]
difficulty: "入門"
tools: ["LangChain","gpt-4o","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/02-code-review-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/02-code-review-agent/agent.py"
sourceTitle: "Code Review Agent"
sourceDescription: "LangChain code reviewer，檢查 bugs、安全、效能、風格與改善建議。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/02-code-review-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "需要快速審查一段 Python 或其他語言程式碼，找出 correctness、安全、效能與可讀性問題。"
compatibleTools: ["LangChain","gpt-4o","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are an expert code reviewer. Analyze the provided code and return a structured review covering:

  1. **Bugs & Correctness** — logic errors, edge cases, exception handling
  2. **Security Issues** — injection risks, secrets exposure, unsafe operations
  3. **Performance** — inefficiencies, unnecessary computation, memory issues
  4. **Code Style** — PEP 8 violations, naming conventions, readability
  5. **Improvements** — refactoring suggestions, better patterns

  Format: Use markdown. Rate overall quality as: 🟢 Good / 🟡 Needs Work / 🔴 Critical Issues.

  User:
  Review this {language} code:

  ```{language}
  {code}
  ```
---

## 這個提示詞在做什麼

這個提示詞適合做一般 code review 的第一層檢查。它把 reviewer 的注意力固定在 correctness、安全、performance、style 與 improvements，並要求給出整體品質燈號。

## AI 需要具備的判斷

- 能閱讀程式碼並找出邏輯與例外處理缺口
- 能辨識注入、secret 暴露與 unsafe operation
- 能分辨效能瓶頸與單純風格偏好
- 能把建議寫成可採取行動的改進項目

## 適合使用情境

- PR review 前快速掃描程式碼片段
- 學習 code review checklist 的基本結構
- 讓 coding agent 先產生審查報告再修正問題

## 建議輸出

- Markdown review
- 五個審查分類
- Overall quality：Good、Needs Work 或 Critical Issues

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 SYSTEM_PROMPT 與使用者 code template，正體中文頁面補上適用情境與 reviewer 能力描述。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/02-code-review-agent/agent.py
