---
title: "Building a Scalable Search Service with FastAPI and PostgreSQL"
description: "以後端系統與資料架構顧問來看，「Building a Scalable Search Service with Fas...」要求 AI 掌握 SQL 與資料查詢、API 設計、資料模型判斷、權限流程規劃，並將資料需求、服務流程或系統限制轉化為架構建議與資料流程。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Building a Scalable Search Service with FastAPI and PostgreSQL"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Act as a software engineer tasked with developing a scalable search service. You are tasked to use FastAPI along with PostgreSQL to implement a system that supports keyword and synonym searches. Your task is to:

  - Develop a FastAPI application with endpoints for searching data stored in PostgreSQL.
  - Implement keyword and synonym search functionalities.
  - Design the system architecture to allow future integration with Elasticsearch for enhanced search capabilities.
  - Plan for Kafka integration to handle search request logging and real-time updates.

  Guidelines:
  - Use FastAPI for creating RESTful API services.
  - Utilize PostgreSQL's full-text search features for keyword search.
  - Implement synonym search using a suitable library or algorithm.
  - Consider scalability and code maintainability.
  - Ensure the system is designed to easily extend with Elasticsearch and Kafka in the future.
---

以後端系統與資料架構顧問來看，「Building a Scalable Search Service with Fas...」要求 AI 掌握 SQL 與資料查詢、API 設計、資料模型判斷、權限流程規劃，並將資料需求、服務流程或系統限制轉化為架構建議與資料流程。
