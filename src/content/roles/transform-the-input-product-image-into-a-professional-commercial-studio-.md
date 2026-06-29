---
title: "Transform the input product image into a professional commercial studio photograph"
description: "角色價值在於品牌識別與標誌語言、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制：能釐清「Transform the input product image into a pr...」的任務脈絡，提供可直接生成的影像規格與品質控制指令，同時守住畫面一致性與真實感。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Transform the input product image into a professional commercial studio photograph"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "model": "nano-banana",
    "task": "image_to_image_product_enhancement",
    "objective": "Transform the input product image into a professional commercial studio photograph while preserving the exact product identity, geometry, proportions, stitching, texture, and material properties.",
    "input": {
      "type": "image",
      "preserve_identity": true,
      "preserve_geometry": true,
      "preserve_texture": true,
      "preserve_color": true,
      "preserve_material": true
    },
    "scene": {
      "background": {
        "type": "solid",
        "color": "#FFFFFF",
        "pure_white": true,
        "uniform": true,
        "no_gradient": true,
        "no_texture": true
      },
      "environment": "professional commercial photography studio",
      "surface": "invisible or pure white seamless sweep"
    },
    "lighting": {
      "style": "soft studio lighting",
      "setup": "three_point_lighting",
      "key_light": {
        "type": "softbox",
        "position": "front-left",
        "intensity": "medium",
        "softness": "high"
      },
      "fill_light": {
        "type": "softbox",
        "position": "front-right",
        "intensity": "low",
        "softness": "high"
      },
      "rim_light": {
        "type": "softbox",
        "position": "rear",
        "intensity": "low",
        "purpose": "edge separation and clean outline"
      },
      "shadow": {
        "type": "contact_shadow",
        "softness": "soft",
        "opacity": "low",
        "blur": "subtle",
        "direction": "natural",
        "realistic": true
      },
      "reflections": {
        "allowed": false
      }
    },
    "camera": {
      "angle": "front-facing or natural product angle",
      "alignment": "perfectly centered",
      "lens": "85mm equivalent",
      "distortion": "none",
      "focus": "tack sharp across entire product",
      "depth_of_field": "moderate",
      "aperture": "f/8",
      "perspective": "natural and undistorted"
    },
    "composition": {
      "framing": "centered",
      "product_scale": "occupies 75-90% of frame",
      "orientation": "straight, upright, natural",
      "symmetry": "maintained if applicable",
      "clean_edges": true,
      "no_crop_of_product": true
    },
    "quality": {
      "resolution": "4096x4096",
      "definition": "ultra high definition",
      "sharpness": "maximum",
      "noise": "none",
      "grain": "none",
      "compression_artifacts": "none",
      "photorealism": "maximum",
      "commercial_quality": true,
      "catalog_ready": true,
      "ecommerce_ready": true
    },
    "color": {
      "profile": "sRGB",
      "accuracy": "true_to_original",
      "white_balance": "neutral studio",
      "exposure": "balanced",
      "contrast": "natural",
      "saturation": "accurate",
      "no_color_shift": true
    },
    "material_rendering": {
      "fabric_detail": "fully preserved",
      "texture_clarity": "high",
      "stitching_visibility": "clear",
      "edges": "clean and precise",
      "wrinkles": "natural and realistic",
      "no_fake_modifications": true
    },
    "constraints": {
      "do_not_modify_product_design": true,
      "do_not_change_shape": true,
      "do_not_add_or_remove_parts": true,
      "do_not_hallucinate_details": true,
      "do_not_stylize": true,
      "keep_product_exact": true
    },
    "negative_prompt": [
      "colored background",
      "gray background",
      "gradient background",
      "dirty background",
      "text",
      "logo",
      "watermark",
      "reflection floor",
      "extra objects",
      "props",
      "person",
      "hands",
      "model",
      "distortion",
      "warping",
      "blurry",
      "low resolution",
      "noise",
      "grain",
      "overexposed",
      "underexposed",
      "harsh shadows",
      "hard shadows",
      "inconsistent lighting",
      "fake texture",
      "hallucinated details"
    ],
    "output": {
      "format": "PNG",
      "background": "pure_white",
      "transparent_background": false,
      "ready_for": [
        "ecommerce",
        "catalog",
        "website",
        "advertising",
        "print"
      ]
    }
  }
---

角色價值在於品牌識別與標誌語言、視覺提示詞撰寫、構圖與鏡頭語言、光線質感控制：能釐清「Transform the input product image into a pr...」的任務脈絡，提供可直接生成的影像規格與品質控制指令，同時守住畫面一致性與真實感。
