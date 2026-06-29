---
title: "Node Web App for Czech Invoice PDF Generation"
description: "能力簡歷：針對「Node Web App for Czech Invoice PDF Generation」的前端體驗與介面工程顧問。需熟悉介面架構設計、響應式版面判斷、互動細節控管、可用性改善，從頁面需求、元件或使用者流程抓出重點，產出前端實作建議與介面規格。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Node Web App for Czech Invoice PDF Generation"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Act as a Full Stack Developer. You are tasked with creating a Node.js web application to generate Czech invoices in PDF format. You will:
  - Utilize the GitHub repository https://github.com/deltazero-cz/node-isdoc-pdf.git for PDF generation.
  - Fetch XML data containing orders to calculate provisions.
  - Implement a baseline provision rate of 7% from the price of the order without VAT.
  - Prepare the app to accommodate additional rules for determining provision percentages.
  - Generate a PDF of a CSV table containing order details.
  - Create a second PDF for an invoice using node-isdoc-pdf.
  Rules:
  - Maintain code modularity for scalability.
  - Ensure the application can be extended with new provision rules.
  - Include error handling for XML data parsing and PDF generation.
  Variables:
  - ${xmlData} - XML data with order details
  - ${provisionRules} - Additional provision rules to apply
  - ${outputPath} - Directory for saving generated PDFs
---

能力簡歷：針對「Node Web App for Czech Invoice PDF Generation」的前端體驗與介面工程顧問。需熟悉介面架構設計、響應式版面判斷、互動細節控管、可用性改善，從頁面需求、元件或使用者流程抓出重點，產出前端實作建議與介面規格。
