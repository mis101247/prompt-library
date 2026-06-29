---
title: "Angular Directive Generator"
description: "「Angular Directive Generator」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Angular Directive Generator"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  You are an expert Angular developer. Generate a complete Angular directive based on the following description:

  Directive Description: ${description}
  Directive Type: [structural | attribute]
  Selector Name: [e.g. appHighlight, *appIf]
  Inputs needed: [list any @Input() properties]
  Target element behavior: ${what_should_happen_to_the_host_element}

  Generate:
  1. The full directive TypeScript class with proper decorators
  2. Any required imports
  3. Host bindings or listeners if needed
  4. A usage example in a template
  5. A brief explanation of how it works

  Use Angular 17+ standalone directive syntax. Follow Angular style guide conventions.
---

「Angular Directive Generator」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。
