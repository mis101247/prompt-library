---
title: "Angular Directive Generator"
description: "「Angular Directive Generator」的能力側重於讀者定位、內容架構、語氣調整、編修潤飾。它應以文字溝通與編輯顧問角度判讀主題、素材或既有文本，再提供可發布的文字草稿與改寫版本。"
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

「Angular Directive Generator」的能力側重於讀者定位、內容架構、語氣調整、編修潤飾。它應以文字溝通與編輯顧問角度判讀主題、素材或既有文本，再提供可發布的文字草稿與改寫版本。
