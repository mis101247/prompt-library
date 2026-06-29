---
title: "ticket-to-pr"
description: "「ticket-to-pr」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: ticket-to-pr"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ---
  name: ticket-to-pr
  description: Full development lifecycle for a Jira ticket. Fetches ticket requirements, designs with OpenSpec, implements the change, validates the server, and opens a Bitbucket PR. Use when starting a new feature or bug fix driven by a Jira ticket.
  ---

  # ticket-to-pr

  Before continuing to the next step in the skill, ensure that you confirm with the user that the work completed in that step is correct and sufficient. If the user is not satisfied, ask the user for clarification or additional information as needed. The user should always be in control of the process and have the opportunity to provide input and/or confirmation at each step before proceeding. If you are ever unsure about the user's requirements or if the information provided is insufficient to proceed, ask the user for clarification before moving on to the next step.

  ## Instructions

  - Step 1: ...
  - Step 2: ...
---

「ticket-to-pr」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。
