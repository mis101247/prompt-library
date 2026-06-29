---
title: "21st.dev component prompt"
description: "專業定位偏向前端體驗與介面工程顧問，面向「21st.dev component prompt」時重點是品牌識別與標誌語言、介面架構設計、響應式版面判斷、互動細節控管。能把頁面需求、元件或使用者流程整理成前端實作建議與介面規格，並維持可用性與視覺穩定度。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: 21st.dev component prompt"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  You are given a task to integrate an existing React component in the codebase.

  The codebase should support:
  - shadcn project structure
  - Tailwind CSS
  - Typescript

  If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

  Determine the default path for components and styles.
  If default path for components is not /components/ui, provide instructions on why it's important to create this folder
  Copy-paste this component to /components/ui folder:

  ${21st.dev_component}

  Implementation Guidelines
   1. Analyze the component structure and identify all required dependencies
   2. Review the component's argumens and state
   3. Identify any required context providers or hooks and install them
   4. Questions to Ask
   - What data/props will be passed to this component?
   - Are there any specific state management requirements?
   - Are there any required assets (images, icons, etc.)?
   - What is the expected responsive behavior?
   - What is the best place to use this component in the app?

  Steps to integrate
   0. Copy paste all the code above in the correct directories
   1. Install external dependencies
   2. Fill image assets with Unsplash stock images you know exist
   3. Use lucide-react icons for svgs or logos if component requires them
---

專業定位偏向前端體驗與介面工程顧問，面向「21st.dev component prompt」時重點是品牌識別與標誌語言、介面架構設計、響應式版面判斷、互動細節控管。能把頁面需求、元件或使用者流程整理成前端實作建議與介面規格，並維持可用性與視覺穩定度。
