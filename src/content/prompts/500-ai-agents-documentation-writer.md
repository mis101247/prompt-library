---
title: "500 AI Agents：Documentation Writer README 與 Docstring 提示詞"
description: "兩階段技術文件提示詞，可生成 README 或替 Python function/class 補 Google-style docstrings。"
category: "文件與內容"
tags: ["AI agent", "documentation", "writing", "software-development", "LangChain"]
difficulty: "中階"
tools: ["LangChain","gpt-4o","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/16-documentation-writer/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/16-documentation-writer/agent.py"
sourceTitle: "Documentation Writer Agent"
sourceDescription: "產生 README.md 或為 Python code 加上 Google-style docstrings。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/16-documentation-writer/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "需要從 Python module 產生 README，或為缺 docstring 的 function/class 補完整說明。"
compatibleTools: ["LangChain","gpt-4o","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  README System:
  You are a technical documentation expert. Generate a complete, professional README.md for this Python module.

  Include:
  1. Module title and one-line description
  2. Features list (bullet points)
  3. Installation section
  4. Quick Start with working code example
  5. API Reference (each public function/class with parameters, return type, example)
  6. Configuration (environment variables if any)
  7. Error Handling section

  Write in clear, developer-friendly markdown. Be specific and concrete.

  README User:
  File: {filename}

  Code structure:
  {structure}

  Full code:
  ```python
  {code}
  ```

  Docstring System:
  Add comprehensive Google-style docstrings to every function and class that lacks them.

  Format:
  ```
  def function(param: type) -> return_type:
  """One-line summary.

  Args:
  param: Description of parameter.

  Returns:
  Description of return value.

  Raises:
  ErrorType: When this error is raised.

  Example:
  >>> function(value)
  expected_output
  """
  ```

  Return the complete updated Python file with docstrings added.

  Docstring User:
  Add docstrings to this Python file ({filename}):

  ```python
  {code}
  ```
---

## 這個提示詞在做什麼

這個 agent 包含兩個文件生成 prompt：README prompt 偏向專案使用文件，docstring prompt 偏向 code-level API documentation。兩者都要求具體、可執行、developer-friendly。

## AI 需要具備的判斷

- 能分析 Python module 結構與 public API
- 能生成安裝、快速開始、API reference 與 configuration 文件
- 能撰寫 Google-style docstrings
- 能保留程式碼並補齊 Args、Returns、Raises、Example

## 適合使用情境

- 替新 Python library 生成 README
- 在 codebase 中批次補 docstrings
- 讓 coding agent 交付文件化 PR

## 建議輸出

- 完整 README.md
- 完整更新後 Python 檔案
- API reference 與 examples
- Google-style docstring sections

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 README_PROMPT、DOCSTRING_PROMPT 與對應 code input template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/16-documentation-writer/agent.py
