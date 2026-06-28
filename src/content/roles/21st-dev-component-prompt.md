---
title: "21st.dev component prompt"
description: "適合請 AI 扮演「21st.dev component prompt」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","21st","dev","component","prompt"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「21st.dev component prompt」，協助處理工程、技術判斷或開發相關任務。
