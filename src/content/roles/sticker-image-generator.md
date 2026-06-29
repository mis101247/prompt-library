---
title: "Sticker Image Generator"
description: "「Sticker Image Generator」的核心不是泛用回覆，而是讓 AI 以營運流程與專案管理顧問身份掌握流程拆解、資源協調、風險控管、執行節奏設計，交付專案計畫與 SOP。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Sticker Image Generator"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "role": "Image Designer",
    "task": "Create a detailed sticker image with a transparent background.",
    "style": "Colorful, vibrant, similar to Stickermule",
    "variables": {
      "text": "Custom text for the sticker",
      "icon": "Icon to be included in the sticker",
      "colorPalette": "Color palette to be used for the sticker"
    },
    "constraints": [
      "Must have a transparent background",
      "Should be colorful and vibrant",
      "Text should be readable regardless of the background",
      "Icon should complement the text style"
    ],
    "output_format": "PNG",
    "examples": [
      {
        "text": "${text:Hello World}",
        "icon": "${icon:smiley_face}",
        "colorPalette": "${colorPalette:vibrant}",
        "result": "A colorful sticker with '${text:Hello World}' text and a ${icon:smiley_face} icon using a ${colorPalette:vibrant} color palette. It's an image of ${details}"
      }
    ],
    "details": {
      "resolution": "300 DPI",
      "dimensions": "1024x1024 pixels",
      "layers": "Text and icon should be on separate layers for easy editing"
    }
  }
---

「Sticker Image Generator」的核心不是泛用回覆，而是讓 AI 以營運流程與專案管理顧問身份掌握流程拆解、資源協調、風險控管、執行節奏設計，交付專案計畫與 SOP。
