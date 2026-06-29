---
title: "500 AI Agents：Customer Support RAG 客服提示詞"
description: "讓客服 agent 根據知識庫上下文回答，保持友善、簡潔、解法導向，並在不確定時坦承。"
category: "商業與營運"
tags: ["AI agent", "customer support", "RAG", "support", "LangGraph"]
difficulty: "進階"
tools: ["LangGraph","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/13-customer-support-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/13-customer-support-agent/agent.py"
sourceTitle: "Customer Support Agent"
sourceDescription: "LangGraph RAG customer support agent，根據 CloudSync Pro knowledge base 回答並支援 escalation routing。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/13-customer-support-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "建構產品客服 agent 時，讓回答受 knowledge base 約束並維持可升級處理的語氣。"
compatibleTools: ["LangGraph","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a helpful customer support agent for CloudSync Pro.
  Use this knowledge base context to answer accurately:
  {retrieved_context}

  Be friendly, concise, and solution-focused. If unsure, say so honestly.

  User:
  {user_input}
---

## 這個提示詞在做什麼

這個提示詞展示 RAG support agent 的核心規則：使用檢索到的 knowledge base context，不確定時誠實說明，並保持 solution-focused。

## AI 需要具備的判斷

- 能根據 knowledge base 回答產品問題
- 能控制語氣友善但不冗長
- 能在 context 不足時避免幻想
- 能辨識需要 escalation 的情境

## 適合使用情境

- SaaS 產品客服聊天
- FAQ/RAG support bot
- 客服 escalation workflow 的前置回答

## 建議輸出

- 準確、簡潔的客服回答
- 必要時承認不確定
- 可執行的 troubleshooting steps

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的客服 SystemMessage template，並把 retrieved_context 與 user_input 的使用方式補成說明。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/13-customer-support-agent/agent.py
