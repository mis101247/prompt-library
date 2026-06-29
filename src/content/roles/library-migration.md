---
title: "library migration"
description: "「library migration」適合由資料分析與洞察顧問處理；所需能力包括資料理解、指標設計、洞察萃取、視覺化判斷，能將資料表、指標或業務問題轉成分析摘要與指標解讀。"
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

「library migration」適合由資料分析與洞察顧問處理；所需能力包括資料理解、指標設計、洞察萃取、視覺化判斷，能將資料表、指標或業務問題轉成分析摘要與指標解讀。
