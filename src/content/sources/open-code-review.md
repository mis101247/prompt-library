---
name: "open-code-review"
repo: "open-code-review"
githubUrl: "https://github.com/alibaba/open-code-review"
localPath: "software-engineering-prompt-repos/open-code-review"
commit: "0d601ea"
license: "Apache-2.0"
description: "結合 deterministic rule selection 與 agentic review 的 code review 系統，特別強調低誤報、上下文取證與多階段 review filter。"
bestFor: ["precision code review", "rule-driven review", "review filtering", "IDE review 工作流程"]
contentTypes: ["workflow", "rule", "prompt", "guide"]
startingFiles: ["internal/config/template/prompts/main_task_system.md", "internal/config/template/prompts/plan_task_system.md", "internal/config/template/prompts/review_filter_task_system.md", "internal/config/rules/system_rules.json"]
nextMaterials: ["把 rule_docs 轉成語言別 review checklists", "整理 plan/filter/re-location 多階段工作流程", "衍生低誤報 PR review helper 專案"]
fullTextPolicy: "Apache-2.0 可引用與改寫；本站以工作流程解析與精簡提示詞為主。"
---

這個 repo 很適合拿來學「如何降低 AI review 噪音」。它的提示詞不是單點使用，而是拆成 plan、main review、filter、relocation 多個步驟。
