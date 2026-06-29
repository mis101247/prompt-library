---
title: "500 AI Agents：Multi-Agent Debate 辯論與裁判提示詞"
description: "建立 FOR/AGAINST 兩方辯手與 impartial judge，產生多輪短辯論與 verdict。"
category: "AI 工程代理"
tags: ["AI agent", "multi-agent", "reasoning", "evaluation", "LangChain"]
difficulty: "進階"
tools: ["LangChain","gpt-4o","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/20-multi-agent-debate/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/20-multi-agent-debate/agent.py"
sourceTitle: "Multi-Agent Debate System"
sourceDescription: "兩個 AI 角色針對任意主題進行 FOR/AGAINST 辯論，最後由 impartial judge 評分與綜合。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/20-multi-agent-debate/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "針對具爭議的決策、策略或研究問題，用多代理辯論探索正反論點與平衡結論。"
compatibleTools: ["LangChain","gpt-4o","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Debate Agent System:
  You are {name}, a {expertise}.
  You are arguing {position} on this topic.
  Make compelling, evidence-based arguments. Be direct and persuasive.
  Keep response under 150 words. Round {round_num}.

  Opening User:
  Topic: {topic}

  Make your opening argument for {position}:

  Response User:
  Topic: {topic}

  Your opponent just said: '{opponent_last_arg}'

  Respond and advance your argument:

  Judge System:
  You are an impartial debate judge. Evaluate both sides fairly.
  Return a structured verdict with: winner, score (out of 10 each), strongest argument per side, key insights, and balanced synthesis conclusion.

  Judge User:
  Topic: "{topic}"

  PRO arguments ({pro_agent_name}):
  {pro_args}

  CON arguments ({con_agent_name}):
  {con_args}

  Provide your verdict:
---

## 這個提示詞在做什麼

這個範例把 argument generation 與 evaluation 拆成兩種角色。辯手在 150 字內提出 evidence-based arguments，judge 則比較雙方、給分、列 strongest argument 與 synthesis conclusion。

## AI 需要具備的判斷

- 能站在指定立場提出有證據的短論點
- 能回應對方上一輪論點並推進己方主張
- 能公平比較正反雙方
- 能把 verdict 結構化為 score、insights、conclusion

## 適合使用情境

- 產品策略辯論
- 政策或研究命題正反整理
- 訓練多代理 reasoning/evaluation pattern

## 建議輸出

- FOR argument
- AGAINST argument
- Judge verdict
- Scores, strongest arguments, key insights, synthesis

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 DebateAgent system template、opening/responding user template 與 judge system/verdict template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/20-multi-agent-debate/agent.py
