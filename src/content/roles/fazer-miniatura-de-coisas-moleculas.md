---
title: "Fazer miniatura de coisas/moleculas"
description: "「Fazer miniatura de coisas/moleculas」這個角色提示詞需要 AI 具備專業概念拆解、模型推理、限制條件判斷等能力，適合用來拆解科學、數學、工程或技術模型問題，協助推理、說明與檢查假設。"
category: "資料與研究"
tags: ["資料與研究","專業概念拆解","模型推理","限制條件判斷","清楚解釋"]
requiredSkills: ["專業概念拆解","模型推理","限制條件判斷","清楚解釋"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Fazer miniatura de coisas/moleculas"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Prompt:
  ${input_object}: (anything you want to be the subject)
  ${input_language}: English (any language you want)
  ---
  System Instruction:
  Generate a hyper-realistic, scientifically accurate "Autopsy" cross-section diorama based on the ${input_object} provided above. Use the following logic to procedurally dissect the object and populate the scene:
  Semantic Analysis & Text Annotations:
  Analyze the ${input_object} and determine its ACTUAL physical, biological, or mechanical structure. Break it down into 3 logical and realistic structural layers. ALL visible text labels, UI overlays, and diagram annotations in the image MUST be written in ${input_language}:
  - Layer 1 (Outer Shell/Barrier): The outermost protective barrier, casing, or skin. Label this with its scientifically accurate or technical name (translated to ${input_language}).
  - Layer 2 (Intermediate/Functional Layer): The secondary layer, internal mechanism, functional tissue, or core substance. Label this with its scientifically accurate or technical name (translated to ${input_language}).
  - Layer 3 (Inner Core/Network): The innermost core, central structure, or internal transport network. Label this with its scientifically accurate or technical name (translated to ${input_language}).
  Container:
  - The Surface: A clean, white medical/engineering examination table with sterile blue paper lining.
  Layout & Typography:
  - The dissected layers must be arranged in a strict Anatomical/Technical Chart format (left to right progression). The external view on the far left, cross-sections in the center, magnified details on the right.
  - Text Integration: The anatomical/structural text labels (in ${input_language}) must float cleanly above or beside their respective layers, looking like professional medical or engineering diagrams.
  - The Connections: Glowing Magenta Scan Lines must connect the dissected parts. Label these lines as "Scanner" or "MRI-scan" (translated to ${input_language}).
  The Micro-Narrative:
  CRITICAL: The object is massive compared to the scientists/engineers. Treat the object like a patient or a highly complex artifact on an operating table.
  - The Researchers: Dozens of tiny 1:87 Scale (HO Scale) Researchers in white lab coats, surgical masks, and magnifying headlamps.
  - The Equipment: Include scale-appropriate tools (e.g., microscopes, tiny scalpels, laser cutters, MRI machines scanning the object).
  - The Interaction: The figures must be actively analyzing and diagnosing (e.g., taking samples, consulting holographic charts displaying text in ${input_language}).
  Visual Syntax & Material Physics:
  - Material Accuracy: Photorealistic rendering of the object's ACTUAL materials (e.g., glistening moisture for organics, metallic reflections for machines, fibrous textures for woven items) contrasting with sterile medical/lab equipment.
  - Shadows: Cast soft and even, indicating bright, surgical operating theater lighting.
  Output:
  ONE image, 1:1 Aspect Ratio, Macro Photography, "Gray's Anatomy" or Technical Blueprint Aesthetic, 8k Resolution.
---

「Fazer miniatura de coisas/moleculas」這個角色提示詞需要 AI 具備專業概念拆解、模型推理、限制條件判斷等能力，適合用來拆解科學、數學、工程或技術模型問題，協助推理、說明與檢查假設。
