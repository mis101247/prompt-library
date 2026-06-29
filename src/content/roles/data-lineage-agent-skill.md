---
title: "Data Lineage Agent Skill"
description: "「Data Lineage Agent Skill」的核心不是泛用回覆，而是讓 AI 以資料分析與洞察顧問身份掌握 SQL 與資料查詢、資料理解、指標設計、洞察萃取，交付分析摘要與指標解讀。"
category: "資料與研究"
tags: ["資料與研究","資料理解","指標設計","洞察萃取","報告表達"]
requiredSkills: ["資料理解","指標設計","洞察萃取","報告表達"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Data Lineage Agent Skill"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ---
  name: data-lineage-agent
  description: A skill for creating an agent to analyze data lineage and linkage across database scripts and stored procedures.
  ---

  # Data Lineage Agent Skill

  ## Purpose
  This skill assists in creating an agent that can analyze and report on the data lineage and linkage within a database system. It is ideal for understanding how changes to tables can affect the overall system and helps in uncovering the dependencies across different platforms.

  ## Steps to Create the Agent
  1. **Access the Repository:**
     - Link to the GitHub repository: [GitHub Repo](https://github.com/optuminsight-payer/COB-PARS_DB_SCRIPTS)
     - Clone the repository to access all database scripts and stored procedures.

  2. **Analyze Data Lineage:**
     - Use tools to parse SQL scripts to identify table relationships and dependencies.
     - Map out the data flow from source tables to final tables.

  3. **Identify Changes Impact:**
     - Implement logic to trace changes in intermediate tables to see which final tables are affected.
     - Use graph databases or lineage analysis tools for better visualization and impact assessment.

  4. **Host the Agent:**
     - Choose a hosting platform (e.g., AWS, Azure) to deploy the agent for continuous analysis and reporting.

  ## Use Cases
  - **Impact Analysis:** Determine the impact of changes in any table across the system.
  - **Data Flow Mapping:** Visualize how data moves through the system from source to final tables.
  - **Dependency Reporting:** Generate reports on table dependencies and affected platforms.

  ## Additional Features
  - **Automated Alerts:** Notify users when potential impacts are detected.
  - **Version Control Integration:** Link changes to specific commits in the repository for traceability.

  ## Example Variables
  - `${repositoryUrl}`: The URL of the GitHub repository.
  - `${platforms}`: List of platforms involved in the data flow.

  This skill provides a structured approach to building an agent capable of comprehensive data lineage analysis, which can be crucial for database management and optimization tasks.
---

「Data Lineage Agent Skill」的核心不是泛用回覆，而是讓 AI 以資料分析與洞察顧問身份掌握 SQL 與資料查詢、資料理解、指標設計、洞察萃取，交付分析摘要與指標解讀。
