# Prompt Library

Prompt Library 是一個以 Astro 建立的正體中文提示詞知識庫，整理 `software-engineering-prompt-repos` 與 `prompts.chat` 裡值得參考的提示詞、角色 prompt 與工作流程指南。

這個網站不是大型 prompt dump，而是偏個人知識庫的精選整理：每篇內容都要讓使用者知道「這個提示詞適合什麼情境」、「可以怎麼用」、「下一步可以做什麼」。

## 目前內容

- **提示詞收藏**：適合 Codex、Claude Code、Cursor、Gemini CLI 等工具使用的工程提示詞。
- **角色提示詞**：從 `prompts.chat` 完整匯入角色與 prompt 範例，並補上正體中文描述與分類。
- **精選指南**：整理 code review、testing、context engineering 與提示詞整理方法。
- **來源頁**：保留 repo、授權與整理方向，供後續擴充與查證。

## 技術架構

- Astro 6
- Astro Content Collections
- Markdown / MDX 內容管理
- 靜態路由
- 少量 client-side JavaScript，用於搜尋、篩選與複製提示詞

主要內容位於：

```text
src/content/prompts
src/content/roles
src/content/guides
src/content/sources
```

主要頁面位於：

```text
src/pages
src/components
src/layouts
src/styles
```

新增提示詞文章時，可以先參考：

```text
docs/prompt-article-template.md
```

## 開發指令

```bash
npm run dev
npm run build
npm run preview
```

## 內容整理原則

1. 說明文字使用正體中文。
2. 提示詞本文可以保留英文，特別是工程 prompt、角色 prompt、schema 與工具指令。
3. 來源 repo 的授權要保留在 metadata 或來源頁中。
4. GPL 或授權未確認的來源，不批次全文搬運；以摘要、改寫版與來源導流為主。
5. UI 保持簡單，不把工具、來源、難度、時間等 metadata 放進主要列表，避免閱讀負擔。

## 主要來源

- `software-engineering-prompt-repos`
- `prompts.chat`：角色型提示詞與 prompt library 產品參考
- `awesome-prompts`：工程、測試、安全與 agent 類提示詞
- `pr-agent`：結構化 PR review prompt 與 workflow
- `open-code-review`：低誤報 code review workflow
- `Awesome-Prompt-Engineering`：prompt engineering 研究與工具地圖

## 部署

這是純靜態 Astro 專案，可以部署到 Vercel、Netlify、Cloudflare Pages 或任何靜態網站服務。

建置輸出位於：

```text
dist
```
