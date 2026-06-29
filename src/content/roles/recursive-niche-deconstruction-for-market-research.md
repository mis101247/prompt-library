---
title: "Recursive Niche Deconstruction for Market Research"
description: "「Recursive Niche Deconstruction for Market Research」這個角色提示詞需要 AI 具備研究問題拆解、文獻整理、論證架構等能力，適合用來拆解研究問題、整理文獻與論點，產出有脈絡的學術分析或研究摘要。"
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

「Recursive Niche Deconstruction for Market Research」這個角色提示詞需要 AI 具備研究問題拆解、文獻整理、論證架構等能力，適合用來拆解研究問題、整理文獻與論點，產出有脈絡的學術分析或研究摘要。
