---
name: "PR-Agent / Qodo Merge"
repo: "pr-agent"
githubUrl: "https://github.com/The-PR-Agent/pr-agent"
localPath: "software-engineering-prompt-repos/pr-agent"
commit: "bd09b6cf"
license: "Apache-2.0"
description: "真實 production PR review 系統，包含 review、describe、improve、ask、changelog 等提示詞模板與 YAML/Pydantic output contracts。"
bestFor: ["structured PR review", "YAML output", "review automation", "GitHub/GitLab 工作流程"]
contentTypes: ["workflow", "prompt", "guide"]
startingFiles: ["pr_agent/settings/pr_reviewer_prompts.toml", "pr_agent/settings/pr_description_prompts.toml", "pr_agent/settings/code_suggestions/pr_code_suggestions_prompts.toml", "docs/docs/tools/review.md"]
nextMaterials: ["整理 /describe prompt 成 PR summary guide", "整理 /improve 成 actionable suggestion prompt", "把 configuration.toml 轉成 review bot 設定指南"]
fullTextPolicy: "Apache-2.0 可引用與改寫；本站仍偏向精簡與教學化，避免直接複製大型 template。"
---

這個 repo 的價值在 prompt architecture。它示範了 production AI reviewer 需要輸入格式、信心門檻、結構化輸出與工具流程，而不只是幾句角色指令。
