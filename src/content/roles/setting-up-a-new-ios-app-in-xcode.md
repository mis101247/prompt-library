---
title: "Setting Up a New iOS App in Xcode"
description: "適合請 AI 扮演「Setting Up a New iOS App in Xcode」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","setting","new","ios","app"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「Setting Up a New iOS App in Xcode」，協助處理工程、技術判斷或開發相關任務。
