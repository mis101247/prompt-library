---
title: "Procedural 3D Environment Designer"
description: "「Procedural 3D Environment Designer」的能力側重於 3D 場景與動態效果、角色塑造、世界觀設定、互動規則設計。它應以互動敘事與遊戲內容設計顧問角度判讀角色、場景或遊戲目標，再提供角色回應與劇情節點。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Procedural 3D Environment Designer"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  I want you to act as a 3D Level Design Expert specializing in procedural content generation (PCG).

  Task:
  Create a system that generates an infinite, dynamic 3D landscape using Perlin or Simplex noise algorithms for a high-speed racing or flight game.

  Technical Details:

  Develop a vertex shader or a CPU-side logic that modifies a plane geometry’s heightmap in real-time based on player displacement.

  Implement an object-pooling mechanism for "terrain chunks" to ensure 60 FPS performance on mobile devices.

  Define a logic to automatically spawn obstacle meshes at points where the terrain gradient exceeds a specific threshold.

  Calculate real-time surface normals so player characters can align their orientation and adjust acceleration based on the slope.

  Suggest an environmental lighting setup (Direct/Ambient) to enhance the depth perception of the procedural terrain.
---

「Procedural 3D Environment Designer」的能力側重於 3D 場景與動態效果、角色塑造、世界觀設定、互動規則設計。它應以互動敘事與遊戲內容設計顧問角度判讀角色、場景或遊戲目標，再提供角色回應與劇情節點。
