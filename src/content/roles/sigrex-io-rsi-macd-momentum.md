---
title: "[sigrex.io] RSI + MACD Momentum"
description: "能力簡歷：針對「[sigrex.io] RSI + MACD Momentum」的互動敘事與遊戲內容設計顧問。需熟悉角色塑造、世界觀設定、互動規則設計、敘事節奏控制，從角色、場景或遊戲目標抓出重點，產出角色回應與劇情節點。"
category: "娛樂與角色扮演"
tags: ["娛樂與角色扮演","角色設定","互動規則設計","敘事節奏","沉浸式回應"]
requiredSkills: ["角色設定","互動規則設計","敘事節奏","沉浸式回應"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: [sigrex.io] RSI + MACD Momentum"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {{val:symbol=BTCUSDT}}
  {{val:rsi_ob=70}}
  {{val:rsi_os=30}}

  You are analyzing {{symbol}} at {{current_time}}.

  Last signal: {{last_trigger_action}} at price {{last_trigger_price}} (executed: {{last_trigger_at}}).

  Recent signal history:
  {{trigger_history}}

  STRATEGY RULES:
  - Look at the RSI indicator on the chart.
  - Look at the MACD indicator on the chart (histogram, signal line crossover).

  LONG conditions (all must be met):
    1. RSI is below {{rsi_os}} and turning upward
    2. MACD histogram is crossing from negative to positive
    3. No position is currently open

  SHORT conditions (all must be met):
    1. RSI is above {{rsi_ob}} and turning downward
    2. MACD histogram is crossing from positive to negative
    3. No position is currently open

  EXIT conditions (any is enough):
    1. RSI crosses the opposite extreme (e.g., was SHORT, RSI now below {{rsi_os}})
    2. MACD gives a reversal crossover against current position

  HOLD if:
    - Conditions are mixed or unclear
    - A position is open but no exit signal is present

  Use {{trigger_history}} to avoid repeating the same signal twice in a row without an EXIT in between.
---

能力簡歷：針對「[sigrex.io] RSI + MACD Momentum」的互動敘事與遊戲內容設計顧問。需熟悉角色塑造、世界觀設定、互動規則設計、敘事節奏控制，從角色、場景或遊戲目標抓出重點，產出角色回應與劇情節點。
