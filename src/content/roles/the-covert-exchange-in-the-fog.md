---
title: "The Covert Exchange in the Fog"
description: "「The Covert Exchange in the Fog」的核心不是泛用回覆，而是讓 AI 以影像生成美術指導身份掌握 3D 場景與動態效果、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制，交付可直接生成的影像規格與品質控制指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: The Covert Exchange in the Fog"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Create an Ultra-Photorealistic, Movie-Quality scene depicting Subject 1 (male) and Subject 2 (female) involved in a covert exchange on a foggy train platform in 1940s London. The image must be photorealistic, featuring cinematic lighting and highly detailed textures of wool and steam. The aesthetic should look like it was shot on Arri Alexa with a cinematic depth of field, capturing the tension and romance of a noir thriller.",
    "details": {
      "year": "1944",
      "genre": "Cinematic Photorealism",
      "location": "A dimly lit, steam-filled railway platform in London at night, with the blurred silhouette of a locomotive in the background.",
      "lighting": [
        "Dramatic chiaroscuro",
        "Volumetric lighting through steam",
        "Cold atmospheric backlight",
        "Warm tungsten practical light from a station lamp"
      ],
      "camera_angle": "Over-the-shoulder close-up shot, focusing on the faces and the subtle hand exchange.",
      "emotion": [
        "Secretive",
        "Urgent",
        "Melancholic",
        "Tense"
      ],
      "color_palette": [
        "Steel blue",
        "Charcoal grey",
        "Sepia highlights",
        "Deep crimson"
      ],
      "atmosphere": [
        "Noir",
        "Mysterious",
        "Cinematic",
        "Foggy"
      ],
      "environmental_elements": "Thick billowing steam from the train engine, wet cobblestones reflecting light, vintage leather suitcases in the periphery.",
      "subject1": {
        "costume": "A textured heavy wool trench coat, a fedora hat slightly tipped forward, and leather gloves.",
        "subject_expression": "Stoic and alert, eyes darting to the side to check for surveillance.",
        "subject_action": "Discreetly slipping a small, sealed envelope into Subject 2's hand."
      },
      "negative_prompt": {
        "exclude_visuals": [
          "bright daylight",
          "modern technology",
          "smartphones",
          "digital watches",
          "modern architecture"
        ],
        "exclude_styles": [
          "cartoon",
          "3d render",
          "anime",
          "oil painting",
          "sketch",
          "low resolution"
        ],
        "exclude_colors": [
          "neon green",
          "fluorescent pink",
          "oversaturated colors"
        ],
        "exclude_objects": [
          "cars",
          "airplanes",
          "plastic"
        ]
      },
      "subject2": {
        "costume": "A tailored 1940s skirt suit with a fur collar, a pillbox hat with a small mesh veil, and red lipstick.",
        "subject_expression": "Anxious but composed, biting her lip slightly, looking intently at Subject 1.",
        "subject_action": "Grasping Subject 1's hand tightly while receiving the envelope, pulling her coat closer."
      }
    }
  }
---

「The Covert Exchange in the Fog」的核心不是泛用回覆，而是讓 AI 以影像生成美術指導身份掌握 3D 場景與動態效果、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制，交付可直接生成的影像規格與品質控制指令。
