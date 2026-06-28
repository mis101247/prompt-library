---
title: "Cyber-Pulse: 3D Neon Particle Swarm"
description: "適合請 AI 扮演「Cyber-Pulse: 3D Neon Particle Swarm」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","cyber","pulse","neon","particle"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「Cyber-Pulse: 3D Neon Particle Swarm」，協助處理工程、技術判斷或開發相關任務。
