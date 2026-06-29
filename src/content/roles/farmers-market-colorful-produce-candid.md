---
title: "Farmers Market (colorful produce, candid)"
description: "「Farmers Market (colorful produce, candid)」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Farmers Market (colorful produce, candid)"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "category": "FARMERS_MARKET_PRODUCE_CANDID",
    "identity_lock": {
      "enabled": true,
      "priority": "ABSOLUTE_MAX",
      "instruction": "Lock identity to reference image exactly. Adult 21+ only. No face changes."
    },
    "subject": {
      "demographics": "Adult woman, 21-29, match reference identity.",
      "hair": {
        "color": "Match reference.",
        "style": "Loose waves, tucked behind ear",
        "texture": "Strands visible, mild flyaways",
        "movement": "Natural movement while walking"
      },
      "face": {
        "eyes": "Exact reference eyes; bright daylight catchlights",
        "skin_details": "Pores visible, natural sunlit texture",
        "micro_details": "Preserve marks"
      },
      "clothing": {
        "outfit": "Casual black top + light jacket (no logos/text)",
        "fabric": "Cotton/denim weave visible"
      },
      "accessories": {
        "bag": "Canvas tote (no logos)",
        "jewelry": ["Small silver hoops"],
        "props": ["Paper bag of produce (unbranded)"]
      }
    },
    "pose": {
      "type": "Walking candid",
      "orientation": "Half-body",
      "hands": "One hand holding produce bag, other adjusting tote strap",
      "gaze": "Looking at camera mid-laugh",
      "expression": "Bright, natural smile"
    },
    "setting": {
      "environment": "Outdoor farmers market",
      "background_elements": [
        "Colorful fruit/vegetable stalls (no readable signs)",
        "Soft crowd blur (no identifiable faces)",
        "Sunlight dappling"
      ],
      "depth": "Subject sharp; background lively bokeh"
    },
    "camera": {
      "shot_type": "Half-body lifestyle",
      "angle": "Eye level",
      "focal_length_equivalent": "26mm phone or 35mm editorial",
      "framing": "4:5, subject off-center",
      "focus": "Face sharp; background soft"
    },
    "lighting": {
      "source": "Natural daylight",
      "direction": "Soft front/side",
      "highlights": "Natural facial highlights",
      "shadows": "Soft under-chin"
    },
    "mood_and_expression": {
      "tone": "Fresh, happy, relatable",
      "atmosphere": "Weekend candid"
    },
    "style_and_realism": {
      "style": "Photorealistic IG lifestyle",
      "imperfections": "Minor motion blur in produce bag edges allowed"
    },
    "technical_details": {
      "aspect_ratio": "4:5",
      "resolution": "High",
      "noise": "Low",
      "mode_variants": {
        "amateur": "Slightly shaky candid framing, mild HDR, imperfect crop",
        "pro": "Clean editorial exposure, crisp detail, shallow DOF"
      }
    },
    "constraints": {
      "adult_only": true,
      "single_subject_only": true,
      "no_text": true,
      "no_logos": true,
      "no_watermarks": true,
      "no_readable_signage": true
    },
    "negative_prompt": [
      "readable text", "logos", "watermark",
      "identity drift", "face morphing",
      "extra fingers", "warped hands",
      "plastic skin", "over-smoothing"
    ]
  }
---

「Farmers Market (colorful produce, candid)」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。
