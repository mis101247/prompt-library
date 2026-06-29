---
title: "21st.dev component prompt"
description: "「21st.dev component prompt」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。"
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

「21st.dev component prompt」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。
