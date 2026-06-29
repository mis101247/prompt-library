---
title: "500 AI Agents：Unit Test Generator pytest 測試提示詞"
description: "要求 AI 產生完整 pytest 測試檔，涵蓋正常路徑、邊界值、錯誤情境與外部依賴 mock。"
category: "測試與驗證"
tags: ["AI agent", "testing", "pytest", "quality", "automation"]
difficulty: "中階"
tools: ["LangChain","gpt-4o","ChatGPT"]
timeEstimate: "10 分鐘"
featured: false
publishedAt: "2026-06-29"
updatedAt: "2026-06-29"
sourceType: "prompt"
sourceRepo: "500-AI-Agents-Projects"
sourceRepoUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects"
sourcePath: "agents/15-unit-test-generator/agent.py"
sourceUrl: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/15-unit-test-generator/agent.py"
sourceTitle: "Unit Test Generator Agent"
sourceDescription: "根據 Python code 產生 pytest test suite，涵蓋 happy path、edge cases、errors、fixtures、parametrize 與 mocks。"
sourceExplanation: "整理 500-AI-Agents-Projects 的 agents/15-unit-test-generator/agent.py，把可執行 agent 中的 system prompt、human prompt、CrewAI role/task 或 framework workflow 轉成可閱讀、可複製的提示詞文章。"
localizationNote: "promptBody 保留來源中的英文 prompt/template；本站補上正體中文用途、能力與使用方式說明。"
preserveOriginalPrompt: true
promptLanguage: "English"
promptUseCase: "讓 AI 根據 Python 模組產生可直接執行的 pytest 測試檔。"
compatibleTools: ["LangChain","gpt-4o","ChatGPT"]
copyLabel: "複製提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  System:
  You are an expert Python test engineer. Generate a comprehensive pytest test suite for the provided code.

  Requirements:
  1. Use pytest fixtures where appropriate
  2. Test happy paths (normal expected inputs)
  3. Test edge cases (boundary values, empty inputs)
  4. Test error conditions (invalid inputs, exceptions)
  5. Use descriptive test names: `test_function_name_scenario`
  6. Add brief docstrings to each test
  7. Use `pytest.mark.parametrize` for repetitive tests
  8. Mock external dependencies (API calls, file I/O, DB)
  9. Aim for 90%+ code coverage

  Output ONLY the complete test file content, ready to run with `pytest`.

  User:
  Generate tests for this Python code (from `{filename}`):

  ```python
  {code}
  ```
---

## 這個提示詞在做什麼

這個提示詞把測試生成任務規格化，要求 fixtures、parametrize、mock、descriptive names 與 90%+ coverage 目標，很適合 coding agent 在修改程式前後補測試。

## AI 需要具備的判斷

- 能理解 Python function/class 行為
- 能設計 happy path、edge case 與 error condition
- 能使用 pytest fixtures 與 parametrize
- 能 mock API、file I/O、DB 等外部依賴

## 適合使用情境

- 為既有 Python code 補單元測試
- 在重構前建立 regression safety net
- 讓 coding agent 先寫測試再修 bug

## 建議輸出

- 完整 pytest test file
- 描述性 test names
- fixtures、parametrize、mocks
- 只輸出可執行測試內容

## 使用方式

- 先把 promptBody 中的變數替換成自己的資料，例如 query、topic、code、transcript 或 destination。
- 保留 system prompt 的角色與輸出格式，user prompt 則填入任務資料。
- 如果要移植到 agent framework，先把角色、輸入、工具、輸出 schema 拆開，再接回 workflow。

## 來源與改寫策略

保留來源中的 TEST_PROMPT 與 filename/code 使用者輸入 template。 來源：https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/9fda658/agents/15-unit-test-generator/agent.py
