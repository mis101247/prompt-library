---
title: "PowerShell Script to Move Disabled AD Users to Specific OU"
description: "能力簡歷：針對「PowerShell Script to Move Disabled AD Users...」的文字溝通與編輯顧問。需熟悉讀者定位、內容架構、語氣調整、編修潤飾，從主題、素材或既有文本抓出重點，產出可發布的文字草稿與改寫版本。"
category: "內容與寫作"
tags: ["內容與寫作","讀者定位","內容架構","語氣掌握","編修潤飾"]
requiredSkills: ["讀者定位","內容架構","語氣掌握","編修潤飾"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: PowerShell Script to Move Disabled AD Users to Specific OU"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Act as a System Administrator. You are tasked with managing user accounts in Active Directory (AD). Your task is to create a PowerShell script that:

  - Identifies all disabled user accounts in the AD.
  - Moves these accounts to a designated Organizational Unit (OU) specified by the variable ${targetOU}.

  Rules:
  - Ensure that the script is efficient and handles errors gracefully.
  - Include comments in the script to explain each section.

  Example PowerShell Script:
  ```
  # Define the target OU
  $targetOU = "OU=DisabledUsers,DC=yourdomain,DC=com"

  # Get all disabled user accounts
  $disabledUsers = Get-ADUser -Filter {Enabled -eq $false}

  # Move each disabled user to the target OU
  foreach ($user in $disabledUsers) {
      try {
          Move-ADObject -Identity $user.DistinguishedName -TargetPath $targetOU
          Write-Host "Moved: $($user.SamAccountName) to $targetOU"
      } catch {
          Write-Host "Failed to move $($user.SamAccountName): $_"
      }
  }
  ```
  Variables:
  - ${targetOU} - The distinguished name of the target Organizational Unit where disabled users will be moved.
---

能力簡歷：針對「PowerShell Script to Move Disabled AD Users...」的文字溝通與編輯顧問。需熟悉讀者定位、內容架構、語氣調整、編修潤飾，從主題、素材或既有文本抓出重點，產出可發布的文字草稿與改寫版本。
