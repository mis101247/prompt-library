---
title: "Next.js"
description: "「Next.js」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Next.js"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  # Next.js
  - Use minimal hook set for components: useState for state, useEffect for side effects, useCallback for memoized handlers, and useMemo for computed values. Confidence: 0.85
  - Never make page.tsx a client component. All client-side logic lives in components under /components, and page.tsx stays a server component. Confidence: 0.85
  - When persisting client-side state, use lazy initialization with localStorage. Confidence: 0.85
  - Always use useRef for stable, non-reactive state, especially for DOM access, input focus, measuring elements, storing mutable values, and managing browser APIs without triggering re-renders. Confidence: 0.85
  - Use sr-only classes for accessibility labels. Confidence: 0.85
  - Always use shadcn/ui as the component system for Next.js projects. Confidence: 0.85
  - When setting up shadcn/ui, ensure globals.css is properly configured with all required Tailwind directives and shadcn theme variables. Confidence: 0.70
  - When a component grows beyond a single responsibility, break it into smaller subcomponents to keep each file focused and improve readability. Confidence: 0.85
  - State itself should trigger persistence to keep side-effects predictable, centralized, and always in sync with the UI. Confidence: 0.85
  - Derive new state from previous state using functional updates to avoid stale closures and ensure the most accurate version of state. Confidence: 0.85
---

「Next.js」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。
