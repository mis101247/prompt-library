---
title: "[sigrex.io] Fear & Greed Sentiment Filter"
description: "適合請 AI 扮演「[sigrex.io] Fear & Greed Sentiment Filter」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","sigrex","fear","greed","sentiment"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: [sigrex.io] Fear & Greed Sentiment Filter"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {{val:symbol=BTCUSDT}}
  {{val:rsi_ob=68}}
  {{val:rsi_os=32}}

  Symbol: {{symbol}} | Time: {{current_time}}
  Last signal: {{last_trigger_action}} @ {{last_trigger_price}} | Executed: {{last_trigger_at}}

  Signal history:
  {{trigger_history}}

  Current market sentiment data:
  {{get:https://api.alternative.me/fng/?limit=1&format=json}}

  STRATEGY RULES:
  Use the Fear & Greed value fetched above as a sentiment filter:
  - Value 0–30 = Extreme Fear → favor LONG setups only
  - Value 31–50 = Fear → allow LONG, avoid SHORT
  - Value 51–74 = Greed → allow SHORT, be cautious with LONG
  - Value 75–100 = Extreme Greed → favor SHORT setups only

  LONG when:
    - Sentiment is Extreme Fear or Fear
    - RSI is below {{rsi_os}} and turning up
    - MACD histogram crosses positive
    - No open position

  SHORT when:
    - Sentiment is Extreme Greed or Greed
    - RSI is above {{rsi_ob}} and turning down
    - MACD histogram crosses negative
    - No open position

  EXIT when:
    - RSI crosses back to neutral (45–55 range)
    - OR sentiment flips against current position direction

  HOLD if sentiment and technicals disagree, or no clear signal.
---

適合請 AI 扮演「[sigrex.io] Fear & Greed Sentiment Filter」，協助處理工程、技術判斷或開發相關任務。
