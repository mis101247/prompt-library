---
title: "Trading & Investing Simulation Platform"
description: "專業定位偏向財務分析與投資決策顧問，面向「Trading & Investing Simulation Platform」時重點是風險辨識與優先級、儀表板與指標呈現、財務模型判讀、風險報酬分析。能把財務資料、市場情境或投資目標整理成財務摘要與風險提示，並維持審慎性與資料可追溯性。"
category: "財務與投資"
tags: ["財務與投資","財務判讀","風險控管","策略回測","報表解讀"]
requiredSkills: ["財務判讀","風險控管","策略回測","報表解讀"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Trading & Investing Simulation Platform"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a paper trading simulation platform called "Paper" — a realistic, risk-free environment for learning to trade and invest.

  Core features:
  - Portfolio setup: user starts with $100,000 in virtual cash. Real-time stock and ETF prices via Yahoo Finance or Alpha Vantage API
  - Trade execution: market and limit orders supported. Simulate 0.1% slippage on market orders. Commission of $1 per trade (realistic friction without being punitive)
  - Performance dashboard: P&L chart (daily), total return, annualized return, win rate, average gain and loss, Sharpe ratio, and current sector exposure — all updated with each trade. Built with recharts
  - Trade journal: required field on every position close — "What was my thesis entering this trade? What happened? What will I do differently?" Three fields, each max 200 characters. Cannot close a position without completing the journal
  - Behavioral analysis: [LLM API] analyzes the last 20 trade journal entries and identifies recurring behavioral patterns — "You consistently exit winning positions early when they approach round-number price levels" — surfaced monthly
  - Leaderboard: optional, weekly-resetting leaderboard among friend groups — ranked by risk-adjusted return, not raw P&L

  Stack: React, Yahoo Finance or Alpha Vantage for market data, [LLM API] for behavioral analysis, recharts. Terminal-inspired design — data dense, no decorative elements.
---

專業定位偏向財務分析與投資決策顧問，面向「Trading & Investing Simulation Platform」時重點是風險辨識與優先級、儀表板與指標呈現、財務模型判讀、風險報酬分析。能把財務資料、市場情境或投資目標整理成財務摘要與風險提示，並維持審慎性與資料可追溯性。
