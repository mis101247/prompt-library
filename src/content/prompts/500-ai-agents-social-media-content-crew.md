---
title: "500 AI Agents：Social Media Content Crew 社群內容提示詞"
description: "把主題轉成平台原生社群內容，包含策略、hook、hashtags、tweet、LinkedIn post 與 Instagram caption。"
category: "創意與媒體"
tags: ["AI agent", "social-media", "marketing", "writing", "content"]
difficulty: "入門"
tools: ["CrewAI","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/14-social-media-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/14-social-media-agent/agent.py"
sourceTitle: "Social Media Content Agent"
sourceDescription: "CrewAI content system，先規劃 message/audience/tone，再為 Twitter、LinkedIn、Instagram 產生平台原生內容。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/14-social-media-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "為不同社群平台產生符合語氣與格式的內容組合。"
compatibleTools: ["CrewAI","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Agent 1: Social Media Strategist
  Goal: Analyze the topic and define the key message, target audience, and tone for each platform
  Backstory: Award-winning social media strategist who has grown 50+ brand accounts to 100k+ followers.

  Task 1:
  Analyze this topic for social media: "{topic}"
  Brand: {brand or 'Not specified'}
  Platforms: {', '.join(platforms)}
  Define: core message, target audience, emotional hook, 5 relevant hashtags.
  Expected output: Content strategy: message, audience, hook, and hashtags

  Agent 2: Social Media Copywriter
  Goal: Write engaging, platform-optimized content that drives engagement
  Backstory: Viral content creator with expertise in platform-specific formats, hashtags, and hooks.

  Task 2:
  Write social media posts for: {', '.join(platforms)}
  Topic: {topic}. Brand: {brand or "General"}.

  For each platform:
  - Twitter/X: 2 tweet variations (under 280 chars each) + thread opener
  - LinkedIn: Professional post (150-200 words) with storytelling hook
  - Instagram: Caption (100-150 words) + 15 hashtags

  Make them platform-native — Twitter punchy, LinkedIn thoughtful, Instagram visual.
  Expected output: Platform-optimized posts for all requested platforms
---

## 這個提示詞在做什麼

這個 workflow 把社群內容分成策略與文案兩層。strategist 先確定 core message、audience、emotional hook 與 hashtags，writer 再依各平台寫成原生格式。

## AI 需要具備的判斷

- 能判斷不同平台的語氣與篇幅限制
- 能設計 emotional hook 與 hashtag strategy
- 能把同一主題改寫成 Twitter、LinkedIn、Instagram 版本
- 能維持 brand context

## 適合使用情境

- 產品 launch 社群內容
- 技術文章的跨平台宣傳
- 行銷團隊產出多平台 copy draft

## 建議輸出

- Content strategy
- Twitter/X variations and thread opener
- LinkedIn professional post
- Instagram caption and hashtags

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 CrewAI strategist/writer role 與 platform-specific task prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/14-social-media-agent/agent.py
