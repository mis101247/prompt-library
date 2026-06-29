---
title: "500 AI Agents：Travel Planner Crew 旅遊規劃提示詞"
description: "多代理旅遊規劃流程，先研究目的地，再產生每日行程與預算拆解。"
category: "生活與健康"
tags: ["AI agent", "travel", "planning", "itinerary", "budget"]
difficulty: "中階"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/12-travel-planner-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/12-travel-planner-agent/agent.py"
sourceTitle: "Travel Planner Agent"
sourceDescription: "三個 CrewAI roles 共同完成 destination research、itinerary planning 與 budget analysis。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/12-travel-planner-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "根據目的地、天數、預算與興趣，產生可執行的旅行行程和預算方案。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent 1: Destination Researcher
  Goal: Research {destination} and provide key travel insights
  Backstory: Expert travel journalist who has visited 100+ countries. Knows the best hidden gems and practical tips.

  Task 1:
  Research {destination} for a {days}-day trip.
  Cover: best time to visit, neighborhoods to stay in, must-see attractions,
  local food scene, transportation tips, and cultural customs to know.
  Traveler interests: {interests}
  Expected output: Destination brief with key areas, attractions, food, and practical tips

  Agent 2: Travel Itinerary Planner
  Goal: Create a detailed {days}-day itinerary for {destination}
  Backstory: Luxury travel consultant with 15 years of experience crafting personalized itineraries.

  Task 2:
  Create a {days}-day itinerary for {destination}.
  Budget: ${budget} total. Interests: {interests}.
  Include morning/afternoon/evening activities, specific restaurant recommendations,
  and travel time between locations. Make it achievable and enjoyable.
  Expected output: Day-by-day {days}-day itinerary with activities, meals, and timing

  Agent 3: Travel Budget Analyst
  Goal: Estimate realistic costs for the trip within ${budget} budget
  Backstory: Financial travel advisor who helps travelers maximize experiences within budget.

  Task 3:
  Provide a budget breakdown for the {days}-day {destination} trip.
  Total budget: ${budget}. Include: flights (estimate), accommodation, food, activities,
  transportation. Flag if budget is tight and suggest adjustments.
  Expected output: Itemized budget breakdown with daily averages and money-saving tips
---

## 這個提示詞在做什麼

這個 CrewAI workflow 把旅遊規劃拆成三個專業角色：目的地研究、行程規劃、預算分析。適合學習如何把複合任務拆成 role/task pipeline。

## AI 需要具備的判斷

- 能研究目的地與實用旅行資訊
- 能把天數與興趣轉成 morning/afternoon/evening itinerary
- 能估算 flights、accommodation、food、activities 與 transportation
- 能指出預算緊張與替代方案

## 適合使用情境

- 客製化旅遊規劃
- 旅遊產品 demo
- 多代理 planning workflow 範例

## 建議輸出

- Destination brief
- Day-by-day itinerary
- Budget breakdown
- Money-saving tips

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的三個 CrewAI Agent role/goal/backstory 與三個 Task prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/12-travel-planner-agent/agent.py
