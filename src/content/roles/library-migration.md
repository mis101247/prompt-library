---
title: "library migration"
description: "「library migration」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。"
category: "通用助理"
tags: ["通用助理","任務釐清","脈絡整理","回覆架構","可執行建議"]
requiredSkills: ["任務釐清","脈絡整理","回覆架構","可執行建議"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: library migration"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  🔴 1. Data Access & Connection Management
  These are critical because they affect performance, scalability, and outages.

  🔹 Redis
  ❌ Jedis (older pattern, topology issues)

  ✅ Lettuce (reactive, auto-reconnect)

  ✅ Valkey Glide (AWS recommended)

  🔹 JDBC Connection Pool
  ❌ Apache DBCP

  ❌ C3P0

  ✅ HikariCP (default in Spring Boot, fastest, stable)



  🔹 ORM / Persistence
  ❌ Old Hibernate 4.x

  ❌ MyBatis legacy configs

  ✅ Hibernate 6+

  ✅ Spring Data JPA latest
---

「library migration」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。
