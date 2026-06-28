---
title: "Prompt Source Explorer"
description: "把 software-engineering-prompt-repos 做成可瀏覽、可篩選、可追溯來源的提示詞探索器。"
category: "knowledge-base"
tags: ["source map", "prompt library", "curation", "metadata"]
difficulty: "入門"
tools: ["Astro", "Content Collections", "Markdown", "Fuse.js optional"]
timeEstimate: "半天"
featured: true
publishedAt: "2026-06-28"
updatedAt: "2026-06-28"
sourceType: "project"
sourceRepo: "Awesome-Prompt-Engineering"
sourceRepoUrl: "https://github.com/promptslab/Awesome-Prompt-Engineering"
sourcePath: "README.md"
sourceUrl: "https://github.com/promptslab/Awesome-Prompt-Engineering/blob/710e1e9/README.md"
sourceTitle: "Awesome Prompt Engineering README"
sourceDescription: "prompt engineering papers、tools、agent ecosystem 與 AI coding assistants 的 landscape map。"
sourceExplanation: "它提供來源探索器的資訊架構靈感：不是只顯示提示詞，而是讓每個來源有適合用途、內容類型與下一步整理方向。"
localizationNote: "以正體中文重新整理來源 metadata；來源清單不全文搬運，改以導覽與摘要為主。"
preserveOriginalPrompt: false
oneLiner: "把 prompt repos 變成有 metadata、tag 與來源頁的靜態探索器。"
audience: ["prompt curator", "內容架構師", "想整理個人 AI 工作流程的人"]
mvpScope: ["建立 sources collection", "每個 source 顯示 repo、license、starting files", "跨提示詞、專案點子、指南顯示引用關係"]
suggestedStack: ["Astro", "Content Collections", "Markdown", "Static routes"]
usablePrompts: ["agentic-coder"]
extensions: ["新增全文搜尋", "加入來源授權標籤", "從 map.md 半自動產生 sources seed"]
---

這個站本身就是這個專案點子的第一版。

如果要再做成獨立工具，可以加入匯入器，從 `map.md` 和 repo files 產生候選 source records，再由人手動確認是否收錄。
