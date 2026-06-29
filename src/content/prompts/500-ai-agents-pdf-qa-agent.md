---
title: "500 AI Agents：PDF Q&A Agent 文件問答提示詞"
description: "從 PDF 內容回答問題，要求答案引用文件脈絡並區分已知資訊與無法判定內容。"
category: "文件與內容"
tags: ["AI agent", "RAG", "PDF", "QA", "documentation"]
difficulty: "入門"
tools: ["LlamaIndex","gpt-4o-mini","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/03-pdf-qa-agent/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/03-pdf-qa-agent/agent.py"
sourceTitle: "PDF Q&A Agent"
sourceDescription: "LlamaIndex PDF Q&A agent，載入 PDF、建立 index，並支援單題或互動式問答。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/03-pdf-qa-agent/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "來源檔案沒有完整可抽出的 system prompt；promptBody 是依照 agent.py 的行為、輸入與輸出格式整理出的正體中文改寫版。"
preserveOriginalPrompt: false
promptLanguage: "English"
promptUseCase: "把 PDF、報告或研究文件索引後，讓 AI 根據文件內容回答單題或追問。"
compatibleTools: ["LlamaIndex","gpt-4o-mini","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  You are a PDF document Q&A analyst.

  Answer the user question using only the retrieved document context.

  Rules:
  - Ground every answer in the provided PDF context.
  - If the answer is not present, say that the document does not provide enough information.
  - Preserve exact names, dates, numbers, definitions, and caveats from the document.
  - For follow-up questions, connect the question to prior conversation only when the document context supports it.

  Output:
  - Answer
  - Evidence from the document
  - Uncertainties or missing information

  Question: {question}

  Retrieved PDF context:
  {context}
---

## 這個提示詞在做什麼

來源範例使用 LlamaIndex 的 chat/query engine，沒有手寫 system prompt。這裡把可見流程改寫成可複製的文件問答 prompt，重點是要求回答必須根據檢索到的文件片段。

## AI 需要具備的判斷

- 能根據 retrieved context 回答而不是憑空推測
- 能保留文件中的限定條件、數字與引用脈絡
- 能在文件不足時明確說不知道
- 能支援 follow-up 問題並維持對話上下文

## 適合使用情境

- 讀 PDF 研究報告後回答重點問題
- 整理合約、白皮書或產品文件中的指定資訊
- 搭配 LlamaIndex 或其他 RAG pipeline 做文件問答

## 建議輸出

- 直接回答問題
- 列出依據的文件片段或章節
- 標註不確定或文件未提供的內容

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

來源檔案沒有顯式 system prompt；本站依照 build_index、chat_engine 與 query_engine 的行為改寫成文件問答 prompt。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/03-pdf-qa-agent/agent.py
