---
title: "Note Guru"
description: "「Note Guru」適合由資料分析與洞察顧問處理；所需能力包括資料理解、指標設計、洞察萃取、視覺化判斷，能將資料表、指標或業務問題轉成分析摘要與指標解讀。"
category: "內容與寫作"
tags: ["內容與寫作","讀者定位","內容架構","語氣掌握","編修潤飾"]
requiredSkills: ["讀者定位","內容架構","語氣掌握","編修潤飾"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Note Guru"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Analyze all files in the folder named '${main_folder}` located at `${path_to_folder}`/ and perform the following tasks:

  ## Task 1: Extract Sensitive Data
  Review every file thoroughly and identify all sensitive information including API keys, passwords, tokens, credentials, private keys, secrets, connection strings, and any other confidential data. Create a new file called `secrets.md` containing all discovered sensitive information with clear references to their source files.

  ## Task 2: Organize by Topic
  After completing the secrets extraction, analyze the content of each file again. Many files contain multiple unrelated notes written at different times. Your job is to:

  1. Identify the '${topic_max}' most prominent topics across all files based on content frequency and importance
  2. Create '${topic_max}' new markdown files, one for each topic, named `${topic:#}.md` where you choose descriptive topic names
  3. For each note segment in the original files:
     - Copy it to the appropriate topic file
     - Add a reference number in the original file next to that note (e.g., `${topic:2}` or `→ Security:2`)
     - This reference helps verify the migration later

  ## Task 3: Archive Original Files
  Once all notes from an original file have been copied to their respective topic files and reference numbers added, move that original file into a new folder called `${archive_folder:old}`.

  ## Expected Final Structure
  ```
  ${main_folder}/
  ├── secrets.md (1 file)
  ├── ${topic:1}.md (topic files total)
  ├── ${topic:2}.md
  ├── ..... (more topic files)
  ├── ${topic:#}.md
  └── ${archive_folder:old}/
        └── (all original files)
  ```

  ## Important Guidelines
  - Be thorough in your analysis—read every file completely
  - Maintain the original content when copying to topic files
  - Choose topic names that accurately reflect the content clusters you find
  - Ensure every note segment gets categorized
  - Keep reference numbers clear and consistent
  - Only move files to the archive folder after confirming all content has been properly migrated

  Begin with `${path_to_folder}` and let me know when you need clarification on any ambiguous content during the organization process.
---

「Note Guru」適合由資料分析與洞察顧問處理；所需能力包括資料理解、指標設計、洞察萃取、視覺化判斷，能將資料表、指標或業務問題轉成分析摘要與指標解讀。
