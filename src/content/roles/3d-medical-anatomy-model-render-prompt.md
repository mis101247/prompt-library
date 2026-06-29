---
title: "3D Medical Anatomy Model Render Prompt"
description: "「3D Medical Anatomy Model Render Prompt」的能力側重於人物姿態與肖像質感、3D 場景與動態效果、視覺提示詞撰寫、構圖與鏡頭語言。它應以影像生成美術指導角度判讀人物、場景、道具與風格目標，再提供可直接生成的影像規格與品質控制指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: 3D Medical Anatomy Model Render Prompt"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "fixed_prompt_components": {
      "composition": "Wide angle full body shot, the entire figure is visible from head to toe, far shot, vertical portrait framing, centered and symmetrical stance",
      "background": "Isolated on a seamless pure white background, studio backdrop, clean white environment",
      "art_style": "Photorealistic 3D medical render, ZBrush digital sculpture style, scientific anatomy model aesthetics",
      "texture_and_material": "Monochromatic silver-grey skin with brushed metal texture, micro-surface details, highly detailed muscle striation, matte finish",
      "lighting_and_tech": "Cinematic rim lighting, global illumination, raytracing, ambient occlusion, 8k resolution, UHD, sharp focus, hyper-detailed"
    },
    "variables": {
      "gender": "${gender:male}",
      "view_angle": "${view_angle:Front view}",
      "target_muscle_group": "${target_muscle_group:Pectoralis Major (Chest)}",
      "highlight_color": "${highlight_color:glowing cyan blue}"
    },
    "negative_prompt": "text, infographic, chart, diagram, labels, arrows, UI, cropped image, close-up, macro shot, headshot, cut off feet, cut off head, partial body, grey background, gradient background, shadows on floor, blurry, low resolution, distortion, watermark"
  }
---

「3D Medical Anatomy Model Render Prompt」的能力側重於人物姿態與肖像質感、3D 場景與動態效果、視覺提示詞撰寫、構圖與鏡頭語言。它應以影像生成美術指導角度判讀人物、場景、道具與風格目標，再提供可直接生成的影像規格與品質控制指令。
