---
title: "3D Mechanical Part Image to Technical Drawing Conversion"
description: "專業定位偏向視覺創作與藝術企劃顧問，面向「3D Mechanical Part Image to Technical Drawi...」時重點是 3D 場景與動態效果、創意主題轉譯、視覺風格規劃、作品情境設計。能把藝術主題、風格目標或創作素材整理成創作方向與視覺規格，並維持風格一致性與可創作性。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: 3D Mechanical Part Image to Technical Drawing Conversion"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "task": "image_to_image",
    "input_image": "3d_render_of_mechanical_part.png",
    "prompt": "Reference scale: the outer diameter of the flange is exactly 360 mm. Mechanical engineering drawing sheet with three separate drawings of the same part placed in clearly separated rectangular areas. Drawing 1: fully dimensioned orthographic views (front, top, side) with precise numeric measurements in millimeters, diameter symbols, radius annotations, hole count notation and center lines. Drawing 2: sectional view taken through the center axis of the part, showing internal geometry with proper section hatching and wall thickness clearly visible. Drawing 3: isometric reference view of the part without any dimensions, used only for spatial understanding. ISO mechanical drafting standard, consistent line weights, monochrome black lines on white background, manufacturing-ready technical documentation, no perspective distortion.",
    "negative_prompt": "single combined drawing, merged views, artistic rendering, perspective view, realistic lighting, shadows, textures, colors, gradients, sketch style, hand drawn look, missing dimensions, decorative presentation",
    "settings": {
      "model": "sdxl",
      "sampler": "DPM++ 2M Karras",
      "steps": 45,
      "cfg_scale": 6,
      "denoising_strength": 0.45,
      "resolution": {
        "width": 1024,
        "height": 1024
      }
    },
    "output_expectation": "one technical drawing sheet containing three clearly separated drawings: dimensioned orthographic views, a centered sectional view, and an undimensioned isometric reference, suitable for manufacturing reference"
  }
---

專業定位偏向視覺創作與藝術企劃顧問，面向「3D Mechanical Part Image to Technical Drawi...」時重點是 3D 場景與動態效果、創意主題轉譯、視覺風格規劃、作品情境設計。能把藝術主題、風格目標或創作素材整理成創作方向與視覺規格，並維持風格一致性與可創作性。
