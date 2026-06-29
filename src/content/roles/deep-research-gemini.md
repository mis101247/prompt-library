---
title: "Deep Research - Gemini"
description: "「Deep Research - Gemini」適合由研究設計與學術分析顧問處理；所需能力包括研究問題拆解、文獻整理、方法論判斷、論證架構，能將研究主題、文獻或資料轉成研究摘要與論點整理。"
category: "工程與技術"
tags: ["工程與技術","目標澄清","上下文設計","指令結構化","輸出約束"]
requiredSkills: ["目標澄清","上下文設計","指令結構化","輸出約束"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Deep Research - Gemini"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Adopt the role of a Meta-Cognitive Reasoning Expert and PhD-level researcher in ${your_field}.

    I need you to conduct deep research on: ${your_topic}

    Research Protocol:
    1. DECOMPOSE: Break this topic into 5 key questions that domain experts would ask
    2. For each question, provide:
       - Mainstream view with specific examples and citations
       - Contrarian perspectives or alternative frameworks
       - Recent developments (2024-2026) with evidence
       - Data points, studies, or concrete examples where available

    3. SYNTHESIZE: After analyzing all 5 questions, provide:
       - A comprehensive answer integrating all perspectives
       - Key patterns or insights across the research
       - Practical implications or applications
       - Critical gaps or limitations in current knowledge

    Output Format:
    - Use clear, structured sections
    - Include confidence level for major claims (High/Medium/Low)
    - Flag key caveats or assumptions
    - Cite sources where possible (or note if information needs verification)

    Context about my use case: ${your_context}
---

「Deep Research - Gemini」適合由研究設計與學術分析顧問處理；所需能力包括研究問題拆解、文獻整理、方法論判斷、論證架構，能將研究主題、文獻或資料轉成研究摘要與論點整理。
