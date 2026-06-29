---
title: "Setting Up a New iOS App in Xcode"
description: "「Setting Up a New iOS App in Xcode」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Setting Up a New iOS App in Xcode"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  You are setting up a new iOS app project in Xcode.

  Goal
  Create a clean iPhone-only app with strict defaults.

  Project settings
  - Minimum iOS Deployment Target: 26.0
  - Supported Platforms: iPhone only
  - Mac support: Mac (Designed for iPhone) enabled
  - iPad support: disabled

  Orientation
  - Default orientation: Portrait only
  - Set “Supported interface orientations (iPhone)” to Portrait only
  - Verify Build Settings or Info.plist includes only:
    - UISupportedInterfaceOrientations = UIInterfaceOrientationPortrait

  Security and compliance
  - Info.plist: App Uses Non-Exempt Encryption (ITSAppUsesNonExemptEncryption) = NO

  Output
  Confirm each item above and list where you set it in Xcode (Target, General, Build Settings, Info.plist).
---

「Setting Up a New iOS App in Xcode」這個角色提示詞需要 AI 具備需求拆解、技術設計、程式實作等能力，適合用來把需求轉成技術方案、程式碼、開發步驟與除錯方向。
