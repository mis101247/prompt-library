---
title: "Version Review"
description: "專業定位偏向產品策略與需求管理顧問，面向「Version Review」時重點是需求釐清、優先級判斷、使用者故事設計、路線圖規劃。能把產品目標、使用者需求與限制整理成 PRD 草案與功能範圍，並維持取捨清楚與可驗收性。"
category: "學習與教學"
tags: ["學習與教學","教學設計","程度診斷","練習安排","回饋引導"]
requiredSkills: ["教學設計","程度診斷","練習安排","回饋引導"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Version Review"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  There has been mulitple changes, improvements and new features since the last version tag 1.0.3.
    I want you to performa a full-scale review. Go through every file that has been changed while looking at the git logs to understand the intention.
    - What I want you to do is for the app side see if there is any new hardcoded string or a string that has been only added to English and missing from the Turkish one, if you find any fix it.
    - Again for the app side go through all the new changes and see if there is anything that could be simplifed, for example if there are identical style definitions merge them following the best practices. In general if any best practice nudges you to
    simplify a section, do so.
    - Perform a full security review on the app side.
---

專業定位偏向產品策略與需求管理顧問，面向「Version Review」時重點是需求釐清、優先級判斷、使用者故事設計、路線圖規劃。能把產品目標、使用者需求與限制整理成 PRD 草案與功能範圍，並維持取捨清楚與可驗收性。
