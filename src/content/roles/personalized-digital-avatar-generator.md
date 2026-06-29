---
title: "Personalized Digital Avatar Generator"
description: "「Personalized Digital Avatar Generator」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Personalized Digital Avatar Generator"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a web app called "Alter" — a personalized digital avatar creation tool.

  Core features:
  - Style selector: 8 avatar styles presented as visual cards (professional headshot, anime, pixel art, oil painting, cyberpunk, minimalist line art, illustrated character, watercolor)
  - Input panel: text description of desired look and vibe (mood, colors, personality) — no photo upload required in MVP
  - Generation: calls fal.ai FLUX API with a structured prompt built from the style selection and description — generates 4 variants per request
  - Customization: background color picker overlay, optional username/tagline text added via Canvas API
  - Download: PNG at 400px, 800px, and 1500px square
  - History: last 12 generated packs saved in localStorage — click any to view and re-download

  UI: bright, expressive, fun. Large visual cards for style selection. Results shown in a 2x2 grid. Mobile-responsive.

  Stack: React, fal.ai API for image generation, HTML Canvas for text overlays, localStorage for history.
---

「Personalized Digital Avatar Generator」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。
