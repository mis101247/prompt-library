---
title: "Dating Profile Optimization Suite"
description: "「Dating Profile Optimization Suite」適合由影像生成美術指導處理；所需能力包括儀表板與指標呈現、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制，能將人物、場景、道具與風格目標轉成可直接生成的影像規格與品質控制指令。"
category: "內容與寫作"
tags: ["內容與寫作","讀者定位","內容架構","語氣掌握","編修潤飾"]
requiredSkills: ["讀者定位","內容架構","語氣掌握","編修潤飾"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Dating Profile Optimization Suite"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a web app called "First Impression" — a dating profile audit and optimization tool.

  Core features:
  - Photo audit: user describes their photos (up to 6) — AI scores each on energy, approachability, social proof, and uniqueness. Returns a ranked order recommendation with one-line reasoning per photo
  - Bio rewriter: user pastes current bio, clicks "Optimize", receives 3 rewritten versions in distinct tones (playful / authentic / direct). Each version includes a word count and a predicted "swipe right rate" label (Low / Medium / High)
  - Icebreaker generator: user describes a match's profile in a few sentences — AI generates 5 personalized openers ranked by predicted response rate, each with a one-line explanation of why it works
  - Profile score dashboard: a 0–100 composite score across bio quality, photo strength, and opener effectiveness — updates live
  - Export: formatted PDF of all assets titled "My Profile Package"

  Stack: React, [LLM API] for all AI calls, jsPDF for export. Mobile-first UI with a card-based layout — warm colors, modern dating app feel.
---

「Dating Profile Optimization Suite」適合由影像生成美術指導處理；所需能力包括儀表板與指標呈現、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制，能將人物、場景、道具與風格目標轉成可直接生成的影像規格與品質控制指令。
