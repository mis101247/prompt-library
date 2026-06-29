---
title: "Mechanical Part Render to Technical Drawing Converter"
description: "「Mechanical Part Render to Technical Drawing...」的能力側重於 3D 場景與動態效果、創意主題轉譯、視覺風格規劃、作品情境設計。它應以視覺創作與藝術企劃顧問角度判讀藝術主題、風格目標或創作素材，再提供創作方向與視覺規格。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Mechanical Part Render to Technical Drawing Converter"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "task": "image_to_image",
    "description": "Convert a 3D mechanical part render into a fully dimensioned manufacturing drawing",
    "input_image": "3d_render_of_pipe_or_mechanical_part.png",
    "prompt": "mechanical engineering drawing, multi-view orthographic projection, front view, top view, side view and section view, fully dimensioned technical drawing, precise numeric measurements in millimeters, diameter symbols, radius annotations, hole count notation, center lines, section hatching, consistent line weights, ISO mechanical drafting standard, black ink on white background, manufacturing-ready documentation",
    "negative_prompt": "artistic style, perspective view, soft shading, textures, realistic lighting, colors, decorative rendering, sketch, hand-drawn look, incomplete dimensions",
    "settings": {
      "model": "sdxl",
      "sampler": "DPM++ 2M Karras",
      "steps": 40,
      "cfg_scale": 6,
      "denoising_strength": 0.5,
      "resolution": {
        "width": 1024,
        "height": 1024
      }
    },
    "output_expectation": "ISO-style mechanical drawing with clear dimensions suitable for CNC, casting, or fabrication reference"
  }
---

「Mechanical Part Render to Technical Drawing...」的能力側重於 3D 場景與動態效果、創意主題轉譯、視覺風格規劃、作品情境設計。它應以視覺創作與藝術企劃顧問角度判讀藝術主題、風格目標或創作素材，再提供創作方向與視覺規格。
