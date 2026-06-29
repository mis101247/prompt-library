---
title: "aa/cli taste"
description: "「aa/cli taste」這個角色提示詞需要 AI 具備測試策略設計、測試案例拆解、驗收標準等能力，適合用來規劃測試策略、測試案例、驗收標準與品質風險，協助確認功能是否可靠。"
category: "工程與技術"
tags: ["工程與技術","測試策略設計","測試案例拆解","驗收標準","品質風險判斷"]
requiredSkills: ["測試策略設計","測試案例拆解","驗收標準","品質風險判斷"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: aa/cli taste"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  # Cli taste of AA
  - Use pnpm as the package manager for CLI projects. Confidence: 1.00
  - Use TypeScript for CLI projects. Confidence: 0.95
  - Use tsup as the build tool for CLI projects. Confidence: 0.95
  - Use vitest for testing CLI projects. Confidence: 0.95
  - Use Commander.js for CLI command handling. Confidence: 0.95
  - Use clack for interactive user input in CLI projects. Confidence: 0.95
  - Check for existing CLI name conflicts before running npm link. Confidence: 0.95
  - Organize CLI commands in a dedicated commands folder with each module separated. Confidence: 0.95
  - Include a small 150px ASCII art welcome banner displaying the CLI name. Confidence: 0.95
  - Use lowercase flags for version and help commands (-v, --version, -h, --help). Confidence: 0.85
  - Start projects with version 0.0.1 instead of 1.0.0. Confidence: 0.85
  - Version command should output only the version number with no ASCII art, banner, or additional information. Confidence: 0.90
  - Read CLI version from package.json instead of hardcoding it in the source code. Confidence: 0.75
  - Always use ora for loading spinners in CLI projects. Confidence: 0.95
  - Use picocolors for terminal string coloring in CLI projects. Confidence: 0.90
  - Use Ink for building interactive CLI UIs in CommandCode projects. Confidence: 0.80
  - Use ink-spinner for loading animations in Ink-based CLIs. Confidence: 0.70
  - Hide internal flags from help: .addOption(new Option('--local').hideHelp()). Confidence: 0.90
  - Use pnpm.onlyBuiltDependencies in package.json to pre-approve native binary builds. Confidence: 0.60
  - Use ANSI Shadow font for ASCII art at large terminal widths and ANSI Compact for small widths. Confidence: 0.85
  - Use minimal white, gray, and black colors for ASCII art banners. Confidence: 0.85
  - Check if package is publishable using `npx can-i-publish` before building or publishing. Confidence: 0.85
---

「aa/cli taste」這個角色提示詞需要 AI 具備測試策略設計、測試案例拆解、驗收標準等能力，適合用來規劃測試策略、測試案例、驗收標準與品質風險，協助確認功能是否可靠。
