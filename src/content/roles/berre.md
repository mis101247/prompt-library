---
title: "berre"
description: "能力簡歷：針對「berre」的影像生成美術指導。需熟悉手機抓拍與自然構圖、人物姿態與肖像質感、視覺提示詞撰寫、構圖與鏡頭語言，從人物、場景、道具與風格目標抓出重點，產出可直接生成的影像規格與品質控制指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: berre"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "reference": {
      "face_identity": "${face_identity:uploaded reference image never change face and hair}",
      "identity_lock": true,
      "face_preservation": "100% identical facial structure, proportions, skin texture, eye shape, lips, nose, brows, moles, and natural expression"
    },
    "subjects": [
      {
        "type": "${subject1_type:young woman}",
        "role": "foreground subject",
        "expression": "soft confident smile",
        "gaze": "looking directly at the camera",
        "pose": {
          "position": "standing very close to the male subject",
          "interaction": "leaning slightly toward him in a casual selfie pose"
        },
        "hair": {
          "color": "dark brown",
          "style": "sleek high ponytail"
        },
        "makeup": {
          "style": "natural glam",
          "details": [
            "even glowing skin",
            "subtle contour",
            "soft blush",
            "defined brows",
            "natural pink lips"
          ]
        },
        "outfit": {
          "clothing": "black fitted short-sleeve top",
          "style": "sporty casual"
        }
      },
      {
        "type": "${subject2_type:Lionel Messi}",
        "role": "secondary subject",
        "expression": "relaxed smile",
        "gaze": "looking at the camera",
        "features": {
          "beard": "short, well-groomed full beard"
        },
        "hair": {
          "color": "brown",
          "style": "short, modern styled, slightly messy on top"
        },
        "outfit": {
          "clothing": "Inter Miami pink home football jersey",
          "details": [
            "Inter Miami heron logo visible on chest",
            "adidas logo visible",
            "sponsor logo visible",
            "athletic fit"
          ]
        }
      }
    ],
    "environment": {
      "location": "football stadium",
      "background_elements": [
        "large cheering crowd",
        "stadium seating filled with fans",
        "players and staff visible in the distance",
        "night sky with stadium floodlights"
      ]
    },
    "lighting": {
      "type": "stadium lighting",
      "characteristics": [
        "bright overhead lights",
        "even illumination on faces",
        "slight highlights on skin",
        "realistic night-time contrast"
      ]
    },
    "photography_style": {
      "style": "real-life selfie photography",
      "camera_look": "smartphone camera",
      "depth_of_field": "moderate depth of field with slightly blurred crowd",
      "mood": "excited, celebratory, candid"
    },
    "render_quality": {
      "realism": "ultra-photorealistic",
      "detail_level": "high",
      "Aspect Ratio": "4:5",
      "skin_texture": "natural and realistic",
      "resolution": "high resolution",
      "color_grading": "true-to-life colors with stadium vibrancy"
    }
  }
---

能力簡歷：針對「berre」的影像生成美術指導。需熟悉手機抓拍與自然構圖、人物姿態與肖像質感、視覺提示詞撰寫、構圖與鏡頭語言，從人物、場景、道具與風格目標抓出重點，產出可直接生成的影像規格與品質控制指令。
