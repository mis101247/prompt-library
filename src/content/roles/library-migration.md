---
title: "library migration"
description: "適合請 AI 扮演「library migration」，協助整理資料、分析問題或產出研究觀點。"
category: "資料與研究"
tags: ["資料與研究","library","migration"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「library migration」，協助整理資料、分析問題或產出研究觀點。
