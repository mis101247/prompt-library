---
title: "Table in PDF to CSV conversion"
description: "「Table in PDF to CSV conversion」這個角色提示詞需要 AI 具備資訊整理、結構化摘要、文件編排等能力，適合用來把長文、會議、逐字稿或文件整理成摘要、筆記、清單與後續行動。"
category: "內容與寫作"
tags: ["內容與寫作","資訊整理","結構化摘要","文件編排","重點萃取"]
requiredSkills: ["資訊整理","結構化摘要","文件編排","重點萃取"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
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

「Table in PDF to CSV conversion」這個角色提示詞需要 AI 具備資訊整理、結構化摘要、文件編排等能力，適合用來把長文、會議、逐字稿或文件整理成摘要、筆記、清單與後續行動。
