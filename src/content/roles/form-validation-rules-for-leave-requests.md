---
title: "Form Validation Rules for Leave Requests"
description: "專業定位偏向互動敘事與遊戲內容設計顧問，面向「Form Validation Rules for Leave Requests」時重點是角色塑造、世界觀設定、互動規則設計、敘事節奏控制。能把角色、場景或遊戲目標整理成角色回應與劇情節點，並維持沉浸感與設定一致性。"
category: "通用助理"
tags: ["通用助理","任務釐清","脈絡整理","回覆架構","可執行建議"]
requiredSkills: ["任務釐清","脈絡整理","回覆架構","可執行建議"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Form Validation Rules for Leave Requests"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  {
    "rules": [
      {
        "leaveType": "Evlilik İzni",
        "validity": "Personelin evlenmesi halinde 3 iş günü şeklinde kullandırılır.",
        "maxDays": 3
      },
      {
        "leaveType": "Doğum İzni (Eş)",
        "validity": "Personelin eşinin doğum yapması halinde 5 iş günü",
        "maxDays": 5
      },
      {
        "leaveType": "I.Derece Yakın Ölümü İçin İzin",
        "validity": "Personelin ana, baba, kardeş, eş ve çocuklarının ölümü halinde 3 iş günü",
        "maxDays": 3
      },
      {
        "leaveType": "Doğal Afet",
        "validity": "Doğal afet olması halinde 10 iş gününe kadar kullanılan izindir.",
        "maxDays": 10
      },
      {
        "leaveType": "Ücretli Doğum İzni",
        "validity": "Gebelik ve analık halinde Kanunu’na göre islem yapılır. Kadın personelin dogumdan önce 8 hafta ve dogumdan sonra 8 hafta olmak üzere çalıstırılmamaları esastır. Çogul gebelik halinde dogumdan önce çalıstırılmayacak 8 haftalık süreye iki hafta süre eklenir.",
        "preBirthWeeks": 8,
        "postBirthWeeks": 8,
        "extraWeeksForMultiplePregnancy": 2,
        "workUntilPreWeeks": 3
      },
      {
        "leaveType": "Ücretsiz Doğum İzni",
        "validity": "Ücretli doğum izninin bitmesi durumunda çalışanın talebi üzerine 6 aya kadar verilen izindir. Parçalar halinde kullanılamaz.",
        "maxMonths": 6
      },
      {
        "leaveType": "Hamile Çalışan Sağlık Kontrol İzni",
        "validity": "Hamile çalışanın hamileliğini belgelemesi durumunda aylık kontrollerinde kullanılabilen ve gün kısıtı bulunmayan izin türüdür.",
        "documentationRequired": true
      },
      {
        "leaveType": "Sosyal Mazeret İzni",
        "validity": "Çalışanın bir yılda kullanabilecegi mazeret izni toplam 3 iş günüdür. 3 günü aşan izinler yıllık izinden düşürülür.",
        "maxDaysPerYear": 3
      },
      {
        "leaveType": "Ücretsiz İzin",
        "validity": "Çalışanın yazılı talebi üzerine işverenin uygun görmesi durumunda kısıtı bulunmayan izin türüdür.",
        "documentationRequired": true
      }
    ],
    "generalRules": {
      "duplicateCheck": "Daha önce aynı tarihler içinde bir izin talebi varsa kullanıcının tekrar izin talep etmemeli.",
      "applicableFormId": 1
    }
  }
---

專業定位偏向互動敘事與遊戲內容設計顧問，面向「Form Validation Rules for Leave Requests」時重點是角色塑造、世界觀設定、互動規則設計、敘事節奏控制。能把角色、場景或遊戲目標整理成角色回應與劇情節點，並維持沉浸感與設定一致性。
