---
title: "3D to 2D Floor Plan Converter"
description: "適合請 AI 扮演「3D to 2D Floor Plan Converter」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","floor","plan","converter"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「3D to 2D Floor Plan Converter」，協助處理工程、技術判斷或開發相關任務。
