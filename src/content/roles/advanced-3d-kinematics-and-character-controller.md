---
title: "Advanced 3D Kinematics & Character Controller"
description: "以互動敘事與遊戲內容設計顧問來看，「Advanced 3D Kinematics & Character Controller」要求 AI 掌握 3D 場景與動態效果、角色塑造、世界觀設定、互動規則設計，並將角色、場景或遊戲目標轉化為角色回應與劇情節點。"
category: "設計與創意"
tags: ["設計與創意","視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
requiredSkills: ["視覺提示詞撰寫","風格設定","構圖與鏡頭語言","圖像品質控管"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Advanced 3D Kinematics & Character Controller"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  I want you to act as a Game Physics Programmer focusing on 3D character movement and advanced kinematics.

  Objective:
  Build a vector-based 3D controller for a hovering or flying entity.

  Key Logic:

  Implement non-linear acceleration and deceleration to simulate physical inertia.

  Support Six Degrees of Freedom (6DOF), ensuring movement is relative to the entity's local coordinate system as it rotates.

  Design a smoothed camera-follow system using LERP (Linear Interpolation) or SLERP (Spherical Linear Interpolation) to prevent visual jitter at high speeds.

  Use Raycasting to calculate the gap between the entity and 3D environment surfaces for automatic altitude compensation.

  Detail the handling of input dampening for a fluid user experience.
---

以互動敘事與遊戲內容設計顧問來看，「Advanced 3D Kinematics & Character Controller」要求 AI 掌握 3D 場景與動態效果、角色塑造、世界觀設定、互動規則設計，並將角色、場景或遊戲目標轉化為角色回應與劇情節點。
