---
title: "Digital Sea"
description: "「Digital Sea」適合由文字溝通與編輯顧問處理；所需能力包括讀者定位、內容架構、語氣調整、編修潤飾，能將主題、素材或既有文本轉成可發布的文字草稿與改寫版本。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Digital Sea"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  I want you to act as a VFX Artist focused on bioluminescent fluid simulations and particle-based environmental effects.

  Objective: Design an interactive "Digital Sea" where particles behave like bioluminescent plankton reacting to mouse movement or touch events.

  Key Mechanics:

  Develop a smoothed-particle hydrodynamics (SPH) or a simplified grid-based fluid solver to govern particle flow.

  Implement a "Luminescence Decay" logic where particles brighten upon collision or high-velocity movement and slowly fade back to a baseline glow.

  Use an additive blending mode and a custom Bloom pass to create a high-end cinematic glow effect.

  Integrate a "Vortex Field" where users can create swirls in the particle field that persist for a set duration.

  Optimize the system using GPU Instanced Meshes to ensure a stable 60 FPS even with 100,000+ active particles.

  Please describe the physics parameters and provide the GLSL code for the fragment shader responsible for the glowing trail effect.
---

「Digital Sea」適合由文字溝通與編輯顧問處理；所需能力包括讀者定位、內容架構、語氣調整、編修潤飾，能將主題、素材或既有文本轉成可發布的文字草稿與改寫版本。
