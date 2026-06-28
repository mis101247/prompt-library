---
title: "PR Review Playbook Generator"
description: "把 repo 類型、技術棧與團隊規則轉成一份可貼進 AI reviewer 的 PR review playbook。"
category: "review-automation"
tags: ["PR review", "automation", "structured output", "workflow"]
difficulty: "中階"
tools: ["Astro", "Markdown", "Codex", "GitHub"]
timeEstimate: "1-2 天"
featured: true
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "project"
sourceRepo: "pr-agent"
sourceRepoUrl: "https://github.com/The-PR-Agent/pr-agent"
sourcePath: "pr_agent/settings/pr_reviewer_prompts.toml"
sourceUrl: "https://github.com/The-PR-Agent/pr-agent/blob/bd09b6cf/pr_agent/settings/pr_reviewer_prompts.toml"
sourceTitle: "pr_review_prompt"
sourceDescription: "以 diff 格式、finding 信心門檻與 YAML output contract 組成的 PR review prompt template。"
sourceExplanation: "這個來源展示了 review prompt 如何變成可維護的規格；把它產品化後，可以協助團隊生成自己的 review playbook。"
localizationNote: "專案說明以正體中文重寫；參考提示詞架構但不複製完整 production template。"
preserveOriginalPrompt: false
oneLiner: "輸入 repo 背景，輸出團隊專用 AI PR reviewer playbook。"
audience: ["小型工程團隊", "維護多個 side projects 的個人開發者", "想降低 AI review 噪音的 tech lead"]
mvpScope: ["表單輸入 repo 類型、語言、框架與高風險區域", "輸出 review priorities、不要評論的項目與 YAML schema", "提供 copy button 與 markdown 匯出"]
suggestedStack: ["Astro", "Content Collections", "少量 client-side JavaScript", "Markdown templates"]
usablePrompts: ["pr-review-yaml", "precision-code-review", "security-code-reviewer"]
extensions: ["支援不同語言的 review checklist", "加入 GitHub PR template 匯出", "根據 source repo 產生不同 review profile"]
---

這個專案可以從非常小的工具開始：一頁表單、一個 preview、一個複製按鈕。

真正有價值的不是生成很長的提示詞，而是幫使用者把「這個 repo 需要 review 什麼、不需要 review 什麼」想清楚。
