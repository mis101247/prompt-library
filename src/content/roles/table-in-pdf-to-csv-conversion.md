---
title: "Table in PDF to CSV conversion"
description: "適合請 AI 扮演「Table in PDF to CSV conversion」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","table","pdf","csv","conversion"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Table in PDF to CSV conversion"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  "Attached is an image of a table listing the model parameters for the ${insert_model_name} model (from [Insert Author/Paper Name]).
  Please extract the data and convert it into a CSV code block that I can copy and save directly.
  Requirements:
  Use the first row as the header.
  If cells are merged, repeat the value for each row to ensure the CSV is flat and processable.
  Do not include units in the numeric columns (e.g., remove 'ms' or '%'), or keep them consistent in a separate column.
  If any text is unclear due to image quality, mark it as '${unclear}' rather than guessing.
  Ensure all fields containing commas are properly quoted."
---

適合請 AI 扮演「Table in PDF to CSV conversion」，協助處理工程、技術判斷或開發相關任務。
