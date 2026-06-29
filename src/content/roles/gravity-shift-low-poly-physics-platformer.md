---
title: "Gravity Shift: Low-Poly Physics Platformer"
description: "「Gravity Shift: Low-Poly Physics Platformer」這個角色提示詞需要 AI 具備專業概念拆解、模型推理、限制條件判斷等能力，適合用來拆解科學、數學、工程或技術模型問題，協助推理、說明與檢查假設。"
category: "資料與研究"
tags: ["資料與研究","專業概念拆解","模型推理","限制條件判斷","清楚解釋"]
requiredSkills: ["專業概念拆解","模型推理","限制條件判斷","清楚解釋"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Gravity Shift: Low-Poly Physics Platformer"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Game Concept: A puzzle-platformer named "Gravity Shift" where players rotate the entire world to navigate a 3D low-poly labyrinth. The environment is minimalist, using pastel gradients and sharp geometric shapes.
  Technical Prompt:
  Build a 3D platformer using Three.js and Cannon.js. The world is a cube-shaped maze. When the user presses 'R', rotate the world.gravity vector by 90 degrees.

  JavaScript
  // Gravity rotation logic
  world.gravity.set(0, -9.82, 0); // Default
  function rotateGravity() {
    let newG = new CANNON.Vec3(-world.gravity.y, world.gravity.x, 0);
    world.gravity.copy(newG);
  }
  Include smooth camera interpolation using Lerp to follow the player's rigid body during shifts.
---

「Gravity Shift: Low-Poly Physics Platformer」這個角色提示詞需要 AI 具備專業概念拆解、模型推理、限制條件判斷等能力，適合用來拆解科學、數學、工程或技術模型問題，協助推理、說明與檢查假設。
