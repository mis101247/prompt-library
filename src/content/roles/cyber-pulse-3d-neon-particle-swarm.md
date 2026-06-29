---
title: "Cyber-Pulse: 3D Neon Particle Swarm"
description: "「Cyber-Pulse: 3D Neon Particle Swarm」的能力側重於 3D 場景與動態效果、讀者定位、內容架構、語氣調整。它應以文字溝通與編輯顧問角度判讀主題、素材或既有文本，再提供可發布的文字草稿與改寫版本。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Cyber-Pulse: 3D Neon Particle Swarm"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Game Concept: A fast-paced arcade "dodge-em-up" set in a digital void. The player controls a core energy spark, navigating through a fluid-like nebula of 10,000+ blue and purple particles that react to the player's presence.
  Technical Prompt:
  Create a Three.js scene featuring a Points system with 15,000 particles. Use a custom ShaderMaterial for a glow effect. Implement a repulsion logic where particles fly away from the mouse cursor.

  JavaScript
  // Core repulsion math
  let dist = particlePos.distanceTo(mousePos);
  if (dist < 5) {
    direction.subVectors(particlePos, mousePos).normalize();
    particlePos.addScaledVector(direction, 0.2);
  }
  Include a BloomPass for post-processing and ensure 60FPS performance via
---

「Cyber-Pulse: 3D Neon Particle Swarm」的能力側重於 3D 場景與動態效果、讀者定位、內容架構、語氣調整。它應以文字溝通與編輯顧問角度判讀主題、素材或既有文本，再提供可發布的文字草稿與改寫版本。
