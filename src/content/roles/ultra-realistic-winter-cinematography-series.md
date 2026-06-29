---
title: "Ultra-Realistic Winter Cinematography Series"
description: "專業定位偏向影像生成美術指導，面向「Ultra-Realistic Winter Cinematography Series」時重點是人物姿態與肖像質感、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制。能把人物、場景、道具與風格目標整理成可直接生成的影像規格與品質控制指令，並維持畫面一致性與真實感。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Ultra-Realistic Winter Cinematography Series"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "version": "2.1",
    "type": "multi_frame_winter_cinematography",
    "identity": {
      "reference_face": "Use the reference photo’s face with 100% identity accuracy.",
      "consistency": "Same person across all frames; identical facial structure, skin texture, hairstyle and age where visible."
    },
    "style": {
      "cinematography": "Ultra-realistic winter cinematography with 85mm lens character.",
      "color_grade": "Subtle blue winter grading, cold tones, soft highlights.",
      "atmosphere": "Soft diffused winter light, fine suspended snowflakes, gentle cold haze."
    },
    "frames": [
      {
        "frame_id": "top_frame",
        "description": "Side-profile portrait of the person in a snowy forest.",
        "requirements": {
          "face_visibility": "Side profile fully visible.",
          "identity_match": "Perfect match to reference face.",
          "expression": "A warm, natural smile visible from the side profile.",
          "environment": {
            "location": "Snow-covered forest",
            "lighting": "Soft morning winter light shaping facial contours",
            "elements": [
              "Gently falling snow",
              "Visible cold breath",
              "Light winter haze"
            ]
          },
          "wardrobe": {
            "coat": "Dark winter coat",
            "scarf": "Dark or neutral-toned winter scarf"
          },
          "camera": {
            "lens": "85mm",
            "depth_of_field": "Shallow",
            "look": "Ultra-realistic winter cinematic look"
          }
        }
      },
      {
        "frame_id": "middle_frame",
        "description": "Back-turned close-up while walking through a narrow snowy forest path.",
        "requirements": {
          "face_visibility": "Face must not be visible at all; strictly back-turned.",
          "identity_cues": "Body shape, posture, and clothing must clearly indicate the same person.",
          "environment": {
            "location": "Narrow snow-covered forest path",
            "forbidden_elements": ["No torii gate"],
            "trees": "Tall bare trees bending slightly, forming a natural snowy corridor",
            "atmosphere": "Quiet, serene winter silence with falling snow"
          },
          "wardrobe": {
            "coat": "Same dark winter coat as top frame",
            "scarf": "Same scarf"
          },
          "camera": {
            "lens": "85mm",
            "shot_type": "Close-up from behind",
            "depth_of_field": "Soft background with shallow DOF"
          }
        }
      },
      {
        "frame_id": "bottom_frame",
        "description": "Extreme close-up looking upward with falling winter snow.",
        "requirements": {
          "face_visibility": "Extreme close-up, fully visible face.",
          "identity_match": "Exact match to reference face.",
          "expression": "A gentle, warm smile while looking upward.",
          "environment": {
            "elements": [
              "Snowflakes falling around but NOT touching the face",
              "Snow in foreground and background only",
              "No visible breath vapor or mouth steam",
              "Soft winter haze in the ambient environment"
            ]
          },
          "camera": {
            "lens": "85mm",
            "depth_of_field": "Very shallow",
            "detail": "High realism, crisp skin texture, selective-focus snowflakes"
          },
          "lighting": "Soft winter light with subtle blue reflections"
        }
      }
    ],
    "global_constraints": {
      "identity": "Reference face must be perfectly reproduced in all visible-face frames.",
      "continuity": "Lighting, winter palette, lens characteristics, and atmosphere must remain consistent across all frames.",
      "realism_level": "Ultra-realistic, film-grade winter accuracy."
    }
  }
  {
    "version": "2.1",
    "type": "multi_frame_winter_cinematography",
    "identity": {
      "reference_face": "Use the reference photo’s face with 100% identity accuracy.",
      "consistency": "Same person across all frames; identical facial structure, skin texture, hairstyle and age where visible."
    },
    "style": {

      "cinematography": "Ultra-realistic winter cinematography with 85mm lens character.",
      "color_grade": "Subtle blue winter grading, cold tones, soft highlights.",
      "atmosphere": "Soft diffused winter light, fine suspended snowflakes, gentle cold haze."
    },
    "frames": [
      {
        "frame_id": "top_frame",
        "description": "Side-profile portrait of the person in a snowy forest.",
        "requirements": {
          "face_visibility": "Side profile fully visible.",
          "identity_match": "Perfect match to reference face.",
          "expression": "A warm, natural smile visible from the side profile.",
          "environment": {
            "location": "Snow-covered forest",
            "lighting": "Soft morning winter light shaping facial contours",
            "elements": [
              "Gently falling snow",
              "Visible cold breath",
              "Light winter haze"
            ]
          },
          "wardrobe": {
            "coat": "Dark winter coat",
            "scarf": "Dark or neutral-toned winter scarf"
          },
          "camera": {
            "lens": "85mm",
            "depth_of_field": "Shallow",
            "look": "Ultra-realistic winter cinematic look"
          }
        }
      },
      {
        "frame_id": "middle_frame",
        "description": "Back-turned close-up while walking through a narrow snowy forest path.",
        "requirements": {
          "face_visibility": "Face must not be visible at all; strictly back-turned.",
          "identity_cues": "Body shape, posture, and clothing must clearly indicate the same person.",
          "environment": {
            "location": "Narrow snow-covered forest path",
            "forbidden_elements": ["No torii gate"],
            "trees": "Tall bare trees bending slightly, forming a natural snowy corridor",
            "atmosphere": "Quiet, serene winter silence with falling snow"
          },
          "wardrobe": {
            "coat": "Same dark winter coat as top frame",
            "scarf": "Same scarf"
          },
          "camera": {
            "lens": "85mm",
            "shot_type": "Close-up from behind",
            "depth_of_field": "Soft background with shallow DOF"
          }
        }
      },
      {
        "frame_id": "bottom_frame",
        "description": "Extreme close-up looking upward with falling winter snow.",
        "requirements": {
          "face_visibility": "Extreme close-up, fully visible face.",
          "identity_match": "Exact match to reference face.",
          "expression": "A gentle, warm smile while looking upward.",
          "environment": {
            "elements": [
              "Snowflakes falling around but NOT touching the face",
              "Snow in foreground and background only",
              "No visible breath vapor or mouth steam",
              "Soft winter haze in the ambient environment"
            ]
          },
          "camera": {
            "lens": "85mm",
            "depth_of_field": "Very shallow",
            "detail": "High realism, crisp skin texture, selective-focus snowflakes"
          },
          "lighting": "Soft winter light with subtle blue reflections"
        }
      }
    ],
    "global_constraints": {
      "identity": "Reference face must be perfectly reproduced in all visible-face frames.",
      "continuity": "Lighting, winter palette, lens characteristics, and atmosphere must remain consistent across all frames.",
      "realism_level": "Ultra-realistic, film-grade winter accuracy."
    }
  }
---

專業定位偏向影像生成美術指導，面向「Ultra-Realistic Winter Cinematography Series」時重點是人物姿態與肖像質感、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制。能把人物、場景、道具與風格目標整理成可直接生成的影像規格與品質控制指令，並維持畫面一致性與真實感。
