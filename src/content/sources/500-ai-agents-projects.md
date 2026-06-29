---
name: "500-AI-Agents-Projects"
repo: "500-AI-Agents-Projects"
githubUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
localPath: "github-repo/500-AI-Agents-Projects"
commit: "9fda658"
license: "MIT"
description: "收錄可執行 AI agent 範例、框架比較、產業用例與 CrewAI MCP 課程，適合把 agent.py 裡的 system prompt、CrewAI role/task 與 agent workflow 整理成提示詞模板。"
bestFor: ["AI agent","LangChain","LangGraph","CrewAI","LlamaIndex","agent workflow","role prompt"]
contentTypes: ["prompt","role prompt","agent workflow","course example"]
startingFiles: ["agents/","agents/*/agent.py","agents/*/metadata.yaml","crewai_mcp_course/lesson_*/agent.py"]
nextMaterials: ["持續匯入新的 agents/ 範例","把 framework 內建 agent 的 hidden prompt 補成可讀 workflow prompt","整理多 agent orchestration 的 role/task pattern"]
fullTextPolicy: "來源採 MIT License。本站保留可明確抽出的 prompt/template，並以正體中文補充用途、角色能力、使用方式與來源導流；對 framework 內建 agent 僅改寫可執行 workflow，不宣稱為原始 system prompt。"
---

這個 repo 的價值在於它不只列出 AI agent 題目，也提供可執行的 `agent.py`、metadata 與 README。本站把其中明確可抽出的 `SystemMessage`、CrewAI `Agent` / `Task` 設定，以及 framework wrapper 的工作流程整理成提示詞與角色提示詞。

匯入時會區分兩類：第一類是來源檔案中直接存在的 prompt/template，會盡量保留原文；第二類是像 LlamaIndex PDF Q&A、LangChain SQL agent、pandas dataframe agent 這類依賴 framework hidden prompt 的範例，本站只根據可見流程改寫成可複製的操作 prompt。
