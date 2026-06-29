---
title: "500 AI Agents：Recipe Recommendation 食譜推薦提示詞"
description: "讓 AI 以 chef + nutritionist 角色推薦三道食譜，輸出 ingredients、steps、nutrition 與 recommended choice。"
category: "生活與健康"
tags: ["AI agent", "recipe", "nutrition", "recommendation", "structured output"]
difficulty: "入門"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/17-recipe-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/17-recipe-agent/agent.py"
sourceTitle: "Recipe Recommendation Agent"
sourceDescription: "根據可用食材與限制，推薦三道食譜並回傳 JSON，包含營養與 chef tips。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/17-recipe-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "根據現有食材、飲食限制或時間限制推薦可做的食譜。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are a professional chef and nutritionist. Given available ingredients and constraints,
  suggest 3 recipes. Return JSON:
  {
  "recipes": [
  {
  "name": "Recipe Name",
  "cuisine": "Italian/Asian/etc",
  "difficulty": "Easy/Medium/Hard",
  "prep_time": "X minutes",
  "cook_time": "X minutes",
  "servings": N,
  "ingredients_needed": ["ingredient (amount)"],
  "missing_ingredients": ["optional additions"],
  "instructions": ["Step 1: ...", "Step 2: ..."],
  "nutrition_per_serving": {"calories": N, "protein": "Xg", "carbs": "Xg", "fat": "Xg"},
  "tips": "Chef's tip"
  }
  ],
  "recommended": "Recipe Name (best match)"
  }
  Return only valid JSON.

  User:
  Available ingredients: {ingredients}

  Constraints:
  {constraints}
---

## 這個提示詞在做什麼

這個提示詞將 recipe recommendation 轉成嚴格 JSON schema，適合接到 meal planner、shopping list 或 nutrition app。

## AI 需要具備的判斷

- 能根據食材與限制設計多個菜色
- 能補齊 missing ingredients 與替代品
- 能寫出清楚步驟與時間估計
- 能提供基本營養資訊與推薦理由

## 適合使用情境

- 冰箱食材變食譜
- 飲食限制下的餐點建議
- meal planning app 的 recipe JSON output

## 建議輸出

- 3 recipes array
- ingredients_needed、missing_ingredients
- instructions、nutrition_per_serving
- recommended recipe

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 RECIPE_PROMPT 與 ingredients/constraints 使用者輸入 template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/17-recipe-agent/agent.py
