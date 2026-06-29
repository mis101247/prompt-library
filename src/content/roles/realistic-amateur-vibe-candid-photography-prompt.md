---
title: "Realistic Amateur Vibe Candid Photography Prompt"
description: "「Realistic Amateur Vibe Candid Photography Prompt」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Realistic Amateur Vibe Candid Photography Prompt"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "prompt": "instagirl, candid phone snapshot, realistic amateur vibe, natural skin texture, light makeup at most, handheld micro-blur, iPhone 11 wide 26mm EXIF look, f/1.8, 1/60s, ISO 200, slight lens distortion, casual posture, everyday outfit, mild flyaway hair, imperfect framing, background clutter present, no retouching, realistic shadows, faithful anatomy, same person identity, same body proportions",
    "negative_prompt": "beauty filter, skin smoothing, studio glam, hdr glow, cinematic grading, fashion editorial, airbrush, liquify, body morph, face changed, de-aged, uncanny valley, extra fingers, warped limbs, NSFW, lingerie, bikini, watermark, text, logo, border",
    "image": "<REFERENCE_IMAGE_URL>",
    "strength": 0.35,
    "guidance": 5.0,
    "control_nets": [
      {
        "type": "openpose",
        "image": "<REFERENCE_IMAGE_URL>",
        "weight": 0.7,
        "guess_mode": false
      },
      {
        "type": "depth",
        "image": "<REFERENCE_IMAGE_URL>",
        "weight": 0.45
      }
    ],
    "face_lock": {
      "type": "ip_adapter_faceid",
      "ref_image": "<REFERENCE_FACE_CROP_OR_SAME_URL>",
      "weight": 0.75
    }
  }
---

「Realistic Amateur Vibe Candid Photography Prompt」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。
