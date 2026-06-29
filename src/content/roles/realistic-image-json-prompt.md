---
title: "Realistic İmage JSON Prompt"
description: "「Realistic İmage JSON Prompt」的能力側重於 3D 場景與動態效果、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制。它應以影像生成美術指導角度判讀人物、場景、道具與風格目標，再提供可直接生成的影像規格與品質控制指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Realistic İmage JSON Prompt"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "meta_instruction": {
      "image_category": "cinematic_scene",
      "core_prompt": "A cinematic shot taken from inside a dimly lit blacksmith shop looking outwards towards a partially open rolling shutter. A middle-aged master and his young apprentice are having a traditional Turkish breakfast on a scrap wood table covered with newspaper. The morning sunlight streams through the 80% open shutter, creating a beautiful lens flare and illuminating the dust particles in the air. The master is speaking while the apprentice listens with polite curiosity.",
      "negative_prompt": "clean pristine clothes, spotless environment, modern furniture, soft unworked hands, messy food, overexposed, fully open shutter, artificial studio lighting, cartoonish, 3d render"
    },
    "narrative_and_purpose": {
      "story_or_concept": "A moment of mentorship and tradition. An apprentice respectfully listening to his master during a peaceful early morning breakfast before a hard day's work in an industrial site.",
      "mood_and_vibe": "Authentic, warm, respectful, raw, industrious, serene morning."
    },
    "subjects": [
      {
        "presence": "primary",
        "type": "human",
        "description": "Middle-aged blacksmith master.",
        "dynamic_attributes": {
          "if_human": {
            "role_and_demographics": "Middle-aged male, stubble beard, wearing reading glasses resting on his chest with a neck strap.",
            "emotion_and_expression": "Experienced, calm, speaking with authority and warmth.",
            "action_and_wardrobe": "Wearing slightly dirty mechanic overalls. Hands are clean from dirt but look deeply worn, calloused, and weathered. Sitting and eating breakfast."
          }
        }
      },
      {
        "presence": "primary",
        "type": "human",
        "description": "Young blacksmith apprentice.",
        "dynamic_attributes": {
          "if_human": {
            "role_and_demographics": "Young male, humble appearance.",
            "emotion_and_expression": "Curious, polite, respectful, actively listening.",
            "action_and_wardrobe": "Wearing slightly dirty mechanic overalls. Hands are clean but show signs of manual labor. Sitting at the table, leaning in slightly to listen attentively."
          }
        }
      }
    ],
    "environment_and_worldbuilding": {
      "setting_type": "indoor",
      "location_details": "Inside a gritty mechanic and blacksmith shop in an industrial zone. A metal rolling shutter door is 80% open, revealing the bright morning outside.",
      "time_of_day_and_weather": "Early morning, sunrise, clear weather outside.",
      "props_and_supporting_elements": [
        "Low coffee table made from scrap wood",
        "Newspaper spread as a tablecloth",
        "Chrome plates containing tomatoes, black olives, white feta cheese, and cucumbers",
        "A metal pan of 'menemen' (Turkish scrambled eggs with tomatoes) in the center",
        "A custom trivet under the pan made from welded scrap iron pieces",
        "Metal shavings scattered organically on the shop floor"
      ]
    },
    "camera_and_lens": {
      "shot_scale": "medium_shot",
      "camera_angle": "eye_level",
      "lens_focal_length": "35mm",
      "depth_of_field": "Shallow depth of field, sharp focus on the subjects and the breakfast table, background and outside lightly blurred."
    },
    "lighting_and_atmosphere": {
      "lighting_source": "natural",
      "lighting_quality": "high_contrast",
      "atmospheric_effects": "Morning sun rays streaming into the dark shop, illuminated airborne dust particles, gentle lens flare from the sun."
    },
    "composition_and_layout": {
      "framing_rule": "rule_of_thirds",
      "functional_space": "none"
    },
    "post_processing_and_medium": {
      "medium": "digital_photography",
      "color_grading": "Cinematic color grading, warm earthy tones inside contrasting with the bright morning light outside, subtle teal and orange hues.",
      "texture_and_grain": "Subtle film grain, highly detailed textures on hands, wood, and metal."
    }
  }
---

「Realistic İmage JSON Prompt」的能力側重於 3D 場景與動態效果、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制。它應以影像生成美術指導角度判讀人物、場景、道具與風格目標，再提供可直接生成的影像規格與品質控制指令。
