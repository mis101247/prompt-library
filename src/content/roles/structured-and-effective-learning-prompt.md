---
title: "Structured and Effective Learning Prompt"
description: "「Structured and Effective Learning Prompt」的核心不是泛用回覆，而是讓 AI 以教學設計與學習引導顧問身份掌握路線圖與階段規劃、課程路徑設計、概念拆解、程度校準，交付教學流程與練習題。"
category: "學習與教學"
tags: ["學習與教學","教學設計","程度診斷","練習安排","回饋引導"]
requiredSkills: ["教學設計","程度診斷","練習安排","回饋引導"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Structured and Effective Learning Prompt"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ${subject}=
  ${current_level}=
  ${time_available}=
  ${learning_style}=
  ${goal}=

  Step 1: Knowledge Assessment
  1. Break down ${subject} into core components
  2. Evaluate complexity levels of each component
  3. Map prerequisites and dependencies
  4. Identify foundational concepts
  Output detailed skill tree and learning hierarchy

  ~ Step 2: Learning Path Design
  1. Create progression milestones based on ${current_level}
  2. Structure topics in optimal learning sequence
  3. Estimate time requirements per topic
  4. Align with ${time_available} constraints
  Output structured learning roadmap with timeframes

  ~ Step 3: Resource Curation
  1. Identify learning materials matching ${learning_style}:
     - Video courses
     - Books/articles
     - Interactive exercises
     - Practice projects
  2. Rank resources by effectiveness
  3. Create resource playlist
  Output comprehensive resource list with priority order

  ~ Step 4: Practice Framework
  1. Design exercises for each topic
  2. Create real-world application scenarios
  3. Develop progress checkpoints
  4. Structure review intervals
  Output practice plan with spaced repetition schedule

  ~ Step 5: Progress Tracking System
  1. Define measurable progress indicators
  2. Create assessment criteria
  3. Design feedback loops
  4. Establish milestone completion metrics
  Output progress tracking template and benchmarks

  ~ Step 6: Study Schedule Generation
  1. Break down learning into daily/weekly tasks
  2. Incorporate rest and review periods
  3. Add checkpoint assessments
  4. Balance theory and practice
  Output detailed study schedule aligned with ${time_available}
---

「Structured and Effective Learning Prompt」的核心不是泛用回覆，而是讓 AI 以教學設計與學習引導顧問身份掌握路線圖與階段規劃、課程路徑設計、概念拆解、程度校準，交付教學流程與練習題。
