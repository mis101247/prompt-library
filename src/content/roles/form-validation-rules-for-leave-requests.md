---
title: "Form Validation Rules for Leave Requests"
description: "適合請 AI 扮演「Form Validation Rules for Leave Requests」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","form","validation","rules","leave"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
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

適合請 AI 扮演「Form Validation Rules for Leave Requests」，協助處理工程、技術判斷或開發相關任務。
