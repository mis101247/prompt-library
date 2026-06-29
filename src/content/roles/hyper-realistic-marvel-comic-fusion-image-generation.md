---
title: "Hyper-Realistic Marvel Comic Fusion Image Generation"
description: "「Hyper-Realistic Marvel Comic Fusion Image Generation」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Hyper-Realistic Marvel Comic Fusion Image Generation"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "image_generation": {
      "requirements": {
        "face_preservation": {
          "preserve_original": true,
          "accuracy_level": "100% identical to reference",
          "details": [
            "real facial proportions",
            "exact skin texture",
            "true eye shape and color",
            "natural look without makeup"
          ]
        },
        "pose": {
          "match_reference_pose": true,
          "description": "Chest-up portrait, face forward with a gentle rightward tilt."
        },
        "lighting": {
          "match_reference_lighting": true,
          "type": "soft diffused indoor lighting",
          "direction": "front-left",
          "shadows": "gentle soft shadows",
          "background_tone": "neutral with slight bluish tint"
        }
      },

      "subject": {
        "gender": "male",
        "age": "child",
        "hairstyle": {
          "match_reference": true,
          "description": "same hairstyle as reference, adapted naturally for a young boy"
        },
        "expression": "neutral, slightly curious",
        "clothing": {
          "top": "Avengers-style suit top (child version), subtle tech-textured fabric",
          "accessory": "miniature Avengers emblem on the chest"
        }
      },

      "composition": {
        "frame": "chest-up portrait",
        "orientation": "frontal with slight rightward tilt",
        "style": "hyper-realistic with split real/comic effect"
      },

      "special_effects": {
        "split_effect": {
          "type": "irregular centered tear",
          "edges": "white angled torn-paper look",
          "description": "image looks ripped down the middle"
        },

        "realistic_side": {
          "background": "soft, neutral, bluish environment",
          "filters": [
            "soft analog grain",
            "light vintage texture",
            "reduced saturation",
            "subtle film imperfections"
          ],
          "overlays": [
            "small holographic HUD icons (Iron Man–style)",
            "mini Captain America shield doodle",
            "tiny Thor hammer sketch",
            "stylized blue tech sparks"
          ]
        },

        "illustrated_side": {
          "art_style": "bold comic-style illustration inspired by Marvel",
          "color_palette": "vibrant, high-contrast superhero palette",
          "hair": "same color as realistic half but stylized sharply",
          "eyes": "slightly exaggerated heroic emphasis",
          "background": "dynamic red-blue comic burst pattern",
          "decorations": {
            "elements": [
              "chibi Iron Man flying",
              "pixel-style Captain America",
              "small cartoon lightning bolts",
              "comic-style 'POW!' and 'WHOOSH!' text bubbles",
              "floating colorful Avengers symbols"
            ]
          }
        }
      },

      "aesthetic": {
        "overall_tone": "heroic, energetic, lightly vintage",
        "lighting_consistency": "perfectly matching the reference",
        "skin_texture_realism": "high",
        "blending_quality": "smooth transition with crisp tear edge"
      },

      "output": {
        "style": "hyper-realistic + Marvel comic fusion",
        "quality": "ultra-high-resolution",
        "filters": [
          "subtle analog film",
          "soft grain"
        ]
      }
    }
  }
---

「Hyper-Realistic Marvel Comic Fusion Image Generation」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。
