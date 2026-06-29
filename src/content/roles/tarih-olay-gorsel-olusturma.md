---
title: "Tarih-olay- Görsel oluşturma"
description: "「Tarih-olay- Görsel oluşturma」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。"
category: "通用助理"
tags: ["通用助理","任務釐清","脈絡整理","回覆架構","可執行建議"]
requiredSkills: ["任務釐清","脈絡整理","回覆架構","可執行建議"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Tarih-olay- Görsel oluşturma"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "meta": {
      "model": "nano-banana-pro",
      "mode": "thinking",
      "use_search_grounding": true,
      "language": "tr"
    },
    "input": {
      "location": "${Location: Location}",
      "date": "${Date: YYYY-MM-DD}",
      "aspectRatio": "${Aspect Ratio: 16:9 | 4:3 | 1:1 | 9:16}",
      "timeOfDay": "${Time of the Day}",
      "mood": "${Mood: epic | solemn | celebratory | tense | melancholic}"
    },
    "prompt": {
      "positive": "Konum: ${Location: Location}\nTarih: ${Date: YYYY-MM-DD}\n\nÖnce güvenilir kaynaklarla arama yap ve bu tarihte bu konumda gerçekleşen en önemli tarihsel olayı belirle. Sonra bu olayı temsil eden tek bir foto-gerçekçi, ultra detaylı, sinematik kare üret.\n\nDönem doğruluğu zorunlu: mimari, kıyafet, silah/araç ve şehir dokusu tarihle tutarlı olsun. Modern hiçbir obje, bina, araç veya tabela görünmesin. Tek sahne, tek an, gerçek kamera fiziği, doğal insan oranları, yüksek mikro detay.",
      "negative": "modern buildings, cars, asphalt, neon, smartphones, wrong era clothing/armor, fantasy, anime, cartoon, text overlay, blurry, low-res, extra limbs"
    },
    "render": {
      "quality": "ultra",
      "resolution": "4k"
    },
    "name": "My Workflow",
    "steps": []
  }
---

「Tarih-olay- Görsel oluşturma」這個角色提示詞需要 AI 具備任務釐清、脈絡整理、回覆架構等能力，適合用來把輸入的問題整理成清楚步驟、可用格式與下一步建議。
