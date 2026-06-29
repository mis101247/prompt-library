---
title: "Cyber-Pulse: 3D Neon Particle Swarm"
description: "「Cyber-Pulse: 3D Neon Particle Swarm」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。"
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

「Cyber-Pulse: 3D Neon Particle Swarm」這個角色提示詞需要 AI 具備視覺提示詞撰寫、風格設定、構圖與鏡頭語言等能力，適合用來把人物、產品、場景或參考素材轉成清楚的圖像生成與影像風格指令。
