---
title: "[sigrex.io] Full Kitchen Sink"
description: "專業定位偏向互動敘事與遊戲內容設計顧問，面向「[sigrex.io] Full Kitchen Sink」時重點是角色塑造、世界觀設定、互動規則設計、敘事節奏控制。能把角色、場景或遊戲目標整理成角色回應與劇情節點，並維持沉浸感與設定一致性。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: [sigrex.io] Full Kitchen Sink"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {{val:symbol=SOLUSDT}}
  {{val:rsi_ob=70}}
  {{val:rsi_os=30}}
  {{val:max_repeat=3}}

  Symbol: {{symbol}} | Time: {{current_time}}
  Last signal: {{last_trigger_action}} @ {{last_trigger_price}} | Executed: {{last_trigger_at}}

  Full signal history:
  {{trigger_history}}

  {{comment: External sentiment — Fear & Greed}}
  Fear & Greed Index:
  {{get:https://api.alternative.me/fng/?limit=1&format=json}}

  {{comment: Strategy master config in Toon format}}
  Master config:
  {{toon:{"name":"full_strategy","symbol":"SOLUSDT","bias_source":"fear_greed","technicals":["RSI","MACD"],"rsi":{"overbought":70,"oversold":30},"macd":{"signal":"histogram_cross"},"position_rules":{"max_open":1,"allow_same_direction_repeat":false},"safety":{"max_consecutive_non_exit":3}}}}

  STRATEGY LOGIC:

  Step 1 — Sentiment Bias (from Fear & Greed fetch):
    - 0–30: Favor LONG only
    - 31–50: Lean LONG, allow neutral
    - 51–74: Lean SHORT, allow neutral
    - 75–100: Favor SHORT only

  Step 2 — Technical Confirmation (from chart):
    - LONG confirmed: RSI < {{rsi_os}} turning up + MACD positive cross
    - SHORT confirmed: RSI > {{rsi_ob}} turning down + MACD negative cross

  Step 3 — Position Check (from trigger_history):
    - If last action was LONG or SHORT → must EXIT before new entry
    - If {{trigger_history}} shows {{max_repeat}} or more signals without EXIT → HOLD

  Step 4 — Decision:
    - Sentiment and technicals agree → take signal
    - Sentiment and technicals disagree → HOLD
    - Open position with exit signal → EXIT
    - Open position without exit signal → HOLD
    - No position and no clear signal → HOLD

  {{comment: max_repeat val used above as a safety cap on consecutive non-exit signals}}
---

專業定位偏向互動敘事與遊戲內容設計顧問，面向「[sigrex.io] Full Kitchen Sink」時重點是角色塑造、世界觀設定、互動規則設計、敘事節奏控制。能把角色、場景或遊戲目標整理成角色回應與劇情節點，並維持沉浸感與設定一致性。
