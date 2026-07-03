---
title: "Fable 5 一次性制度化提示詞"
description: "把一次高階模型 session 用來建立可長期沿用的 agent 制度、路由檔案、模型調度規則與驗證流程。"
category: "AI 工程代理"
tags: ["AI 代理", "workflow", "context engineering", "verification", "Threads"]
difficulty: "進階"
tools: ["Codex", "Claude", "ChatGPT", "Gemini"]
timeEstimate: "20-40 分鐘"
featured: false
publishedAt: "2026-07-03"
updatedAt: "2026-07-03"
sourceType: "prompt"
sourceRepo: "Threads / @gyozalab"
sourceRepoUrl: "https://www.threads.com/@gyozalab/"
sourcePath: "post/DaS69OPFJxy"
sourceUrl: "https://www.threads.com/@gyozalab/post/DaS69OPFJxy"
sourceTitle: "這是我這輩子唯一一次使用 Fable 5 的機會"
sourceDescription: "使用者提供的 Threads 貼文來源，主題是把一次高階模型 session 的判斷力轉成可被較弱模型長期沿用的制度、檔案、派工模板與驗證流程。"
sourceExplanation: "這個 prompt 適合收錄到 AI 工程代理分類，因為它把高階模型的主要價值從「直接完成日常任務」轉向「建立可交接、可驗證、可維護的 agent 作業制度」，很適合用來設計 CLAUDE.md、AGENTS.md、subagent 調度規範與長期工作流。本站依使用者提供的原文與來源連結整理成可直接複製的版本。"
localizationNote: "本站用正體中文整理用途、使用情境與操作方式；可複製的 prompt body 保留使用者提供的正體中文原文。"
preserveOriginalPrompt: true
promptLanguage: "Traditional Chinese"
promptUseCase: "當你有一次使用高階模型的機會，想把它用在建立長期可沿用的 agent 作業制度，而不是消耗在單次日常任務時，可以直接複製使用。"
compatibleTools: ["Codex", "Claude", "ChatGPT", "Gemini", "Cursor"]
copyLabel: "複製制度化提示詞"
relatedProjects: []
relatedGuides: []
promptBody: |
  這是我這輩子唯一一次使用 Fable 5 的機會。這個 session 結束後，我的環境將由較小的模型（Sonnet、Opus、Haiku 等）長期運作。所以你的任務只有一個：把你的判斷力轉成可長期沿用的制度與檔案，讓之後每一個較弱模型的 session 都因此變強。用這個 session 立制度，不要拿去執行日常任務。

  作業規則（先讀完再動手）：
  1. 自主作業。環境能查的自己查（CLAUDE.md、可用 subagent、模型與 effort 參數、MCP、skill、記憶機制）。開場最多問我一批問題，五題以內，之後不再停下來等我。
  2. 價值排序＋隨做隨寫。先做價值最高的產出，每完成一項立刻寫進檔案再做下一項。這個 session 隨時可能中斷，中斷時已落檔的就是我拿到的全部。
  3. 改任何既有檔案前先留備份副本。新內容寫成新檔，CLAUDE.md 只放精簡路由指向新檔。
  4. 你的讀者是較弱的模型。你自己不需要被逐步指揮，但寫給它們的規則要具體、可執行、有判準與範例；抽象要求（例如「保持高品質」）等於沒寫。
  5. 產出不可依賴只有你能做到的能力，全部要在 Sonnet 等級就跑得動。
  6. 環境允許的話用最高 effort 跑，長回合沒關係。

  交付清單（按價值排序執行）：
  A. 快速診斷：我目前 harness 最漏 token、最容易失焦、最容易出錯的前三名，各附具體修法。這份先寫，供後面所有產出引用。
  B. 重寫 CLAUDE.md：最高槓桿的檔案，未來每個 session 都會載入。收斂重複規則、刪過時內容、把長內容抽成引用檔，套用「弱模型需要明確、強模型需要留白」的寫法。
  C. 模型調度守則（獨立檔案）：指揮官不下場（大量讀取、掃 repo、查網頁、批次改檔一律派 subagent，主對話只進結論）；派工三件套（目標與動機、驗收條件、回報格式）；顯式指定 model 與 effort（按我環境實際可用的型號寫，不憑印象）；回報合約（subagent 只回結論與檔案:行號，長產物落檔傳路徑）；升降級路徑（小模型錯一次直接升級、中階模型同一子任務連錯兩次帶完整失敗軌跡升級、解出的模式降回便宜模型批次套用、同一件事最多重試兩輪）；驗證不自驗（驗收派 fresh-context agent：檔案用 read-back、程式碼用測試或實跑、高風險判斷加第二意見或多答案評審選優）。
  D. 判斷力外化（獨立檔案）：把只有你這個等級才擅長的判斷，寫成弱模型可執行的 rubric 與 checklist。至少涵蓋：何時該升級模型、何時算真的完成、何時該停下來問使用者、什麼訊號代表方向錯了該換路而非重試、品質底線怎麼驗。每條判準附一個正例和一個反例。
  E. 派工 prompt 模板：給未來主模型直接套用的委派模板（含驗收條件與回報格式的填空），常見任務型態各一份：搜尋、實作、重構、研究、審查。
  F. 維護協議：未來的弱模型怎麼安全地更新以上檔案。哪些可以自行改、哪些動之前要先問使用者、每次踩坑後教訓寫回哪裡、用什麼格式、累積多長要精簡。
  G. 給未來 session 的信：三件我沒問、但你認為對這個環境最重要的事，加上你認為這套制度最可能的退化方式與預防法。

  收尾（必做，不可省略）：
  1. 開一個 fresh-context subagent 對抗審查全部產出：找規則互相打架、路徑或工具名錯誤、弱模型會誤讀的模糊語句，修完為止。
  2. read-back 驗證每個檔案確實落地、內容完整。
  3. 給我一頁總結：改了什麼、為什麼、明天開始怎麼用。
  4. 如果 context 快用完：立刻停下手上的產出，先完成收尾前三步，把未完成項目寫進「給未來 session 的信」交接。

  誠實條款：標註 harness 的極限。拆解、驗證、多樣本評審補得了執行品質；模糊題與品味判斷補不了，要寫明遇到時怎麼辦（升級模型、外部第二意見、或明說做不到）。不確定的事就查，查不到就標註，不要編造。
---

## 這個提示詞在做什麼

這個提示詞把一次高階模型 session 定位成「建立制度」而不是「完成單次任務」。它要求模型先盤點當前 agent harness、可用 subagent、模型與 effort、MCP、skill 與記憶機制，再把高階判斷轉成較弱模型也能照著做的檔案、規則與模板。

它的核心價值在於把能力外化：把模糊的「請做得更好」拆成具體的診斷、路由、派工、升降級、驗證、維護與交接規則，讓後續較小模型的每次 session 都能吃到前一次高階模型留下的制度紅利。

## AI 需要具備的判斷

- 能分辨「當下任務產出」與「長期制度產出」哪個槓桿更高。
- 能盤點工具、模型、檔案與工作流限制，並把不確定處標註清楚。
- 能把高階判斷改寫成弱模型可執行的 checklist、rubric 與範例。
- 能設計 subagent 派工、驗收、升降級與 fresh-context 驗證流程。
- 能在 context 可能中斷時，優先把最高價值成果落檔。

## 適合使用情境

- 有一次使用高階模型的機會，想把它投資在長期工作環境改善。
- 想重整 `CLAUDE.md`、`AGENTS.md` 或其他 coding agent 載入檔。
- 想建立 subagent 派工模板、模型路由規則與驗證協議。
- 想把個人工作流中的隱性判斷轉成較弱模型也能照做的制度。

## 建議輸出

- 快速診斷與前三個最該修的 harness 問題。
- 精簡後的主路由檔，以及被抽出的獨立規範檔。
- 模型調度守則與常見任務派工模板。
- 判斷力 rubric、維護協議與未來 session 交接信。
- fresh-context 審查與 read-back 驗證後的一頁總結。

## 使用方式

1. 先把這份提示詞貼到你能使用的最高階模型 session。
2. 如果環境裡有現成的 `CLAUDE.md`、`AGENTS.md`、subagent、MCP 或 skill，讓模型自行盤點。
3. 若你有不能改的檔案、偏好的目錄、模型預算或命名規則，開場一次補充完。
4. 要求模型每完成一項就落檔，避免長回合中斷時成果只留在對話裡。
5. 收尾時確認它完成 fresh-context 審查、read-back 驗證與一頁總結。

## 使用注意事項

- 這份提示詞會要求模型修改或新增制度檔；使用前請確認工作目錄與備份策略。
- 原文提到的 Fable 5、Sonnet、Opus、Haiku、subagent、MCP 與 skill 需要依實際環境替換或驗證。
- 如果平台不支援 subagent，可以把「fresh-context subagent」改成另開一個乾淨對話審查。
- 如果任務涉及安全、法務、財務、醫療或公司內部規範，制度草案仍需要人工審閱。
- 不要把這份 prompt 用來要求模型直接完成日常需求；它的用途是替未來 session 建基礎設施。

## 來源與整理策略

來源貼文：`post/DaS69OPFJxy`。

本站保留使用者提供的正體中文提示詞全文，並補上用途、判斷點、適合情境與使用注意事項，方便使用者判斷什麼時候應該把高階模型 session 用來建立長期制度，而不是消耗在單次任務上。
