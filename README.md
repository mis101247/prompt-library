# Prompt Library

Prompt Library 是一個以 Astro 建立的正體中文提示詞知識庫，整理社群平台上流行的趣味 AI 應用，以及 GitHub repo 裡值得參考的提示詞應用、角色 prompt 與工作流程。

這個網站不是大型 prompt dump，而是偏個人知識庫的精選整理：每篇內容都要讓使用者知道「這個玩法或提示詞適合什麼情境」、「可以怎麼用」、「下一步可以做什麼」。

## 網站

[prompts.keyo.tw](https://prompts.keyo.tw/?utm_source=github&utm_medium=readme&utm_campaign=prompt_library)

## 目前內容

- **趣味應用**：整理社群平台上常見的 AI 圖像、角色扮演、生活化創作與互動玩法。
- **提示詞應用**：收錄 GitHub repo 裡可直接參考的工程、agent、內容生成與工作流程 prompt。
- **角色提示詞**：整理 `prompts.chat` 等來源的角色與 prompt 範例，並補上正體中文描述與分類。
- **來源頁**：保留社群來源、GitHub repo、授權與整理方向，供後續擴充與查證。

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

- [Prompts-For-Software-Engineers](https://github.com/wycoconut/Prompts-For-Software-Engineers)：工程提示詞與 vibe coding 入門素材
- [prompts.chat](https://github.com/f/prompts.chat)：角色型提示詞與 prompt library 產品參考
- [awesome-prompts](https://github.com/ai-boost/awesome-prompts)：工程、測試、安全與 agent 類提示詞
- [500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects)：AI agent 題目、CrewAI agent / task 與範例工作流程
- [pr-agent](https://github.com/The-PR-Agent/pr-agent)：結構化 PR review prompt 與 workflow
- [open-code-review](https://github.com/alibaba/open-code-review)：低誤報 code review workflow
- [Awesome-Prompt-Engineering](https://github.com/promptslab/Awesome-Prompt-Engineering)：prompt engineering 研究與工具地圖

## 部署

這是純靜態 Astro 專案，可以部署到 Vercel、Netlify、Cloudflare Pages 或任何靜態網站服務。

建置輸出位於：

```text
dist
```
