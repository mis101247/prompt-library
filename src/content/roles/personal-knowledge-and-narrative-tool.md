---
title: "Personal Knowledge & Narrative Tool"
description: "以互動敘事與遊戲內容設計顧問來看，「Personal Knowledge & Narrative Tool」要求 AI 掌握角色塑造、世界觀設定、互動規則設計、敘事節奏控制，並將角色、場景或遊戲目標轉化為角色回應與劇情節點。"
category: "生活與健康"
tags: ["生活與健康","目標釐清","行動拆解","反思提問","持續追蹤"]
requiredSkills: ["目標釐清","行動拆解","反思提問","持續追蹤"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Personal Knowledge & Narrative Tool"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a personal knowledge and narrative tool called "Thread" — a second brain that connects notes into a living story.

  Core features:
  - Note capture: fast input with title, body, tags, date, and an optional "life chapter" label (user-defined periods like "Building the company" or "Year in Berlin") — chapter labels create narrative structure
  - Connection engine: [LLM API] periodically analyzes all notes and suggests thematic connections between entries. User sees a "Suggested connections" panel — accepts or rejects each. Accepted connections create bidirectional links
  - Narrative timeline: a D3.js timeline showing notes grouped by chapter. Zoom out to decade view, zoom in to week view. Click any note to read it in context of its surrounding entries
  - Weekly synthesis: every Sunday, AI generates a "week in review" paragraph from that week's notes — stored as a special entry in the timeline. Accumulates into a readable life chronicle
  - Pattern report: monthly — AI identifies recurring themes (concepts mentioned 5+ times), most-linked ideas (high connection density), and "dormant" ideas (not referenced in 60+ days, surfaced as "worth revisiting")
  - Chapter export: select any chapter by date range and export as a formatted PDF narrative document

  Stack: React, [LLM API] for connection suggestions, synthesis, and pattern reports, D3.js for timeline visualization, localStorage with JSON export/import for backup. Literary design — serif fonts, generous whitespace.
---

以互動敘事與遊戲內容設計顧問來看，「Personal Knowledge & Narrative Tool」要求 AI 掌握角色塑造、世界觀設定、互動規則設計、敘事節奏控制，並將角色、場景或遊戲目標轉化為角色回應與劇情節點。
