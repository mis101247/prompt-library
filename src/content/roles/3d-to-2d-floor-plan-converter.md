---
title: "3D to 2D Floor Plan Converter"
description: "「3D to 2D Floor Plan Converter」的核心不是泛用回覆，而是讓 AI 以視覺創作與藝術企劃顧問身份掌握 3D 場景與動態效果、創意主題轉譯、視覺風格規劃、作品情境設計，交付創作方向與視覺規格。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: 3D to 2D Floor Plan Converter"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "task": "image_to_image",
    "description": "Convert a furnished 3D interior render into a clean 2D architectural floor plan drawing",
    "input_image": "3d_render_of_apartment_interior.png",
    "prompt": "top-down 2D architectural floor plan, black and white technical drawing, clean vector-style lines, precise wall thickness, clearly defined rooms, labeled spaces with room names and square meter areas, doors with swing arcs, windows shown as breaks in walls, minimal shading, no perspective, orthographic projection, architectural blueprint style, professional residential floor plan, similar to CAD drawing",
    "negative_prompt": "3d perspective, isometric view, realistic lighting, shadows, textures, furniture rendering, people, depth, photorealism, colors, gradients, soft edges, artistic sketch, hand drawn style",
    "settings": {
      "model": "sdxl",
      "sampler": "DPM++ 2M Karras",
      "steps": 30,
      "cfg_scale": 7,
      "denoising_strength": 0.65,
      "resolution": {
        "width": 1024,
        "height": 1024
      }
    },
    "output_expectation": "flat 2D floor plan similar to architectural plan drawings, suitable for real estate listings or construction documents"
  }
---

「3D to 2D Floor Plan Converter」的核心不是泛用回覆，而是讓 AI 以視覺創作與藝術企劃顧問身份掌握 3D 場景與動態效果、創意主題轉譯、視覺風格規劃、作品情境設計，交付創作方向與視覺規格。
