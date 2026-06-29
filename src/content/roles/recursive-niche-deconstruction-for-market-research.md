---
title: "Recursive Niche Deconstruction for Market Research"
description: "「Recursive Niche Deconstruction for Market R...」的核心不是泛用回覆，而是讓 AI 以產品策略與需求管理顧問身份掌握需求釐清、優先級判斷、使用者故事設計、路線圖規劃，交付 PRD 草案與功能範圍。"
category: "資料與研究"
tags: ["資料與研究","研究問題拆解","文獻整理","論證架構","學術寫作"]
requiredSkills: ["研究問題拆解","文獻整理","論證架構","學術寫作"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Recursive Niche Deconstruction for Market Research"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "industry": "${industry}",
    "region": "${region}",
    "tree": {
      "level": "Macro",
      "name": "...",
      "market_valuation": "$X",
      "top_players": [
        {
          "name": "Company A",
          "type": "Incumbent",
          "focus": "Broad"
        },
        {
          "name": "Company B",
          "type": "Incumbent",
          "focus": "Broad"
        }
      ],
      "children": [
        {
          "level": "Sub-Niche/Micro",
          "name": "...",
          "narrowing_variable": "...",
          "market_valuation": "$X",
          "top_players": [
            {
              "name": "Startup C",
              "type": "Specialist",
              "focus": "Verticalized"
            },
            {
              "name": "Tool D",
              "type": "Micro-SaaS",
              "focus": "Hyper-Specific"
            }
          ],
          "children": []
        }
      ]
    },
    "keyword_analysis": {
      "monthly_traffic": "{region-specific traffic data}",
      "competitiveness": "{region-specific competitiveness data}",
      "potential_keywords": [
        {
          "keyword": "...",
          "traffic": "...",
          "competition": "..."
        }
      ]
    }
  }
---

「Recursive Niche Deconstruction for Market R...」的核心不是泛用回覆，而是讓 AI 以產品策略與需求管理顧問身份掌握需求釐清、優先級判斷、使用者故事設計、路線圖規劃，交付 PRD 草案與功能範圍。
