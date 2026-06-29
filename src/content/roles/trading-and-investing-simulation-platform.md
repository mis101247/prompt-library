---
title: "Trading & Investing Simulation Platform"
description: "「Trading & Investing Simulation Platform」這個角色提示詞需要 AI 具備財務判讀、風險控管、策略回測等能力，適合用來整理財務資訊、交易想法、投資風險與可檢驗的決策假設。"
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

「Trading & Investing Simulation Platform」這個角色提示詞需要 AI 具備財務判讀、風險控管、策略回測等能力，適合用來整理財務資訊、交易想法、投資風險與可檢驗的決策假設。
