---
title: "Setting Up a New iOS App in Xcode"
description: "專業定位偏向影像生成美術指導，面向「Setting Up a New iOS App in Xcode」時重點是手機抓拍與自然構圖、人物姿態與肖像質感、視覺提示詞撰寫、構圖與鏡頭語言。能把人物、場景、道具與風格目標整理成可直接生成的影像規格與品質控制指令，並維持畫面一致性與真實感。"
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

專業定位偏向影像生成美術指導，面向「Setting Up a New iOS App in Xcode」時重點是手機抓拍與自然構圖、人物姿態與肖像質感、視覺提示詞撰寫、構圖與鏡頭語言。能把人物、場景、道具與風格目標整理成可直接生成的影像規格與品質控制指令，並維持畫面一致性與真實感。
