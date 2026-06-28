---
title: "用 pr-agent / open-code-review 設計低噪音 PR review 工作流程"
description: "把 production AI reviewer 的 prompt architecture 拆成 plan、review、filter 與 structured output，讓 AI review 更可控。"
category: "code-review"
tags: ["PR review", "workflow", "structured output", "review filter"]
difficulty: "進階"
tools: ["Codex", "GitHub", "pr-agent", "open-code-review"]
timeEstimate: "18 分鐘"
featured: true
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "workflow"
sourceRepo: "pr-agent"
sourceRepoUrl: "https://github.com/The-PR-Agent/pr-agent"
sourcePath: "pr_agent/settings/pr_reviewer_prompts.toml"
sourceUrl: "https://github.com/The-PR-Agent/pr-agent/blob/bd09b6cf/pr_agent/settings/pr_reviewer_prompts.toml"
sourceTitle: "pr_review_prompt"
sourceDescription: "PR-Agent 的 structured PR review prompt，包含 diff 格式、review rules 與 YAML output contract。"
sourceExplanation: "它和 open-code-review 一起看，可以學到 production review 工作流程的兩個重點：輸出要結構化，評論要可確認。"
localizationNote: "指南用正體中文重新整理流程；提示詞細節只保留精簡改寫版。"
preserveOriginalPrompt: false
guideType: "workflow"
learningGoals: ["理解 AI review 的輸入/輸出契約", "設計低誤報 filter", "知道何時使用 YAML structured output"]
prerequisites: ["看過 PR diff", "了解基本 code review 流程"]
relatedPrompts: ["pr-review-yaml", "precision-code-review", "security-code-reviewer"]
---

好的 AI reviewer 不應該像一個很吵的 lint tool。

它應該只報具體、可觸發、可修補的問題，並且讓使用者知道每個 finding 的位置、嚴重度與真實情境。

## 四段工作流程

第一段是 change summary。先讓 agent 說明這個 PR 看起來改了什麼。

第二段是 risk planning。只列出可能需要檢查的風險，不急著下結論。

第三段是 review。針對新增與修改內容提出 finding，忽略已刪除與未修改程式碼。

第四段是 filter。移除猜測、重複、風格偏好與沒有具體觸發情境的評論。

## 為什麼要 structured output

如果 review 結果是 YAML 或 JSON，後面才能做排序、去重、轉成 GitHub comments 或產生 dashboard。

但 schema 不應該太大。v1 只需要 file、line、severity、issue、trigger、fix。

## 什麼不要報

不要報「可能可以更好」。

不要報需要猜測整個 codebase 才能成立的問題。

不要把 style opinion 包裝成 bug。

這些規則比多列幾個 checklist 更能降低 AI review 噪音。
