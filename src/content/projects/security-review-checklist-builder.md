---
title: "Security Review Checklist Builder"
description: "根據 app 類型與資料風險，產生一份精簡安全 code review checklist 與 AI reviewer 提示詞。"
category: "security"
tags: ["security", "checklist", "OWASP", "review"]
difficulty: "中階"
tools: ["Astro", "Markdown", "Codex", "GitHub"]
timeEstimate: "1 天"
featured: false
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "project"
sourceRepo: "awesome-prompts"
sourceRepoUrl: "https://github.com/ai-boost/awesome-prompts"
sourcePath: "prompts/code_reviewer_security.txt"
sourceUrl: "https://github.com/ai-boost/awesome-prompts/blob/61fbcff/prompts/code_reviewer_security.txt"
sourceTitle: "Code Reviewer System Prompt — Security-Focused"
sourceDescription: "以 OWASP、API security、供應鏈與 client-side security 為核心的 security review prompt。"
sourceExplanation: "完整安全提示詞太長，產品化後可以依 app 類型裁切 checklist，讓 review 更實際。"
localizationNote: "使用正體中文引導語與本站改寫提示詞，不直接搬運 GPL 來源全文。"
preserveOriginalPrompt: false
oneLiner: "用幾個風險問題產生專案專用安全 review checklist。"
audience: ["處理 auth/API/付款的個人開發者", "需要 lightweight security review 的小團隊", "review 高風險 PR 的工程師"]
mvpScope: ["選擇 app 類型與敏感資料類型", "輸出高優先安全 checklist", "產生可貼進 AI reviewer 的提示詞"]
suggestedStack: ["Astro", "Content Collections", "Client-side filters"]
usablePrompts: ["security-code-reviewer", "precision-code-review"]
extensions: ["加入 OWASP Top 10 mapping", "匯出 GitHub PR checklist", "依 framework 顯示建議工具"]
---

這個專案的關鍵是「裁切」。

不是每個 PR 都需要完整 OWASP 清單，但涉及登入、權限、使用者資料或第三方 API 時，一份短而準的 checklist 很有價值。
