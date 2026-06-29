---
title: "500 AI Agents：Resume Parser 與 Candidate Fit 評分提示詞"
description: "把履歷萃取成結構化 JSON，再根據職缺描述評估 fit score、strengths、gaps 與 recommendation。"
category: "商業與營運"
tags: ["AI agent", "recruitment", "resume", "parsing", "structured output"]
difficulty: "入門"
tools: ["LangChain","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/09-resume-parser-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/09-resume-parser-agent/agent.py"
sourceTitle: "Resume Parser Agent"
sourceDescription: "解析履歷為 JSON，並對照 job description 產生 fit score 與 hire/consider/pass 建議。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/09-resume-parser-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "需要自動整理候選人履歷並對照職缺做初步 fit scoring。"
compatibleTools: ["LangChain","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  Stage 1 System:
  Extract structured information from this resume and return JSON:
  {
  "name": "full name",
  "email": "email or null",
  "phone": "phone or null",
  "location": "city, country or null",
  "linkedin": "URL or null",
  "github": "URL or null",
  "summary": "2-3 sentence professional summary",
  "years_experience": number,
  "current_title": "current/most recent job title",
  "skills": {
  "languages": ["Python", "JavaScript", ...],
  "frameworks": ["Django", "React", ...],
  "tools": ["Docker", "Git", ...],
  "soft_skills": ["leadership", ...]
  },
  "experience": [{"title": "...", "company": "...", "duration": "...", "highlights": ["..."]}],
  "education": [{"degree": "...", "institution": "...", "year": "..."}],
  "certifications": ["..."],
  "languages_spoken": ["English", ...]
  }
  Return only valid JSON.

  Stage 1 User:
  {resume_text}

  Stage 2 System:
  Given this candidate profile and job description, return JSON:
  {
  "fit_score": 0-100,
  "fit_label": "Excellent|Good|Fair|Poor",
  "strengths": ["matching point 1", "matching point 2", ...],
  "gaps": ["missing skill 1", ...],
  "recommendation": "Hire|Consider|Pass",
  "recommendation_reason": "2-3 sentence explanation"
  }
  Return only valid JSON.

  Stage 2 User:
  Candidate profile:
  {candidate_profile_json}

  Job description:
  {job_desc}
---

## 這個提示詞在做什麼

這個 agent 由兩個 prompt 組成：第一段抽履歷資訊，第二段做 job fit 評估。它很適合當作 HR workflow 的 structured extraction + scoring pattern。

## AI 需要具備的判斷

- 能從非結構化履歷抽取聯絡方式、技能、經歷與教育
- 能將候選人資訊整理成固定 JSON schema
- 能根據 job description 找出匹配點與缺口
- 能給出有理由的 Hire、Consider 或 Pass 建議

## 適合使用情境

- 大量履歷初篩
- 把 PDF/文字履歷轉進 ATS
- 為 recruiter 產生候選人 fit summary

## 建議輸出

- Resume profile JSON
- fit_score 與 fit_label
- strengths、gaps
- recommendation 與原因

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 PARSE_PROMPT 與 FIT_PROMPT，合併成一個兩階段工作流程提示詞。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/09-resume-parser-agent/agent.py
