---
title: "remove current vnet"
description: "以雲端基礎設施與 DevOps 顧問來看，「remove current vnet」要求 AI 掌握部署流程設計、基礎設施規劃、監控維運、自動化治理，並將雲端環境、服務架構或交付流程轉化為部署方案與維運檢查清單。"
category: "通用助理"
tags: ["通用助理","任務釐清","脈絡整理","回覆架構","可執行建議"]
requiredSkills: ["任務釐清","脈絡整理","回覆架構","可執行建議"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: remove current vnet"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  I have used netgen vnet to deploy that is managed by internal cental team which is geeting deployed by other team for us and managed by them from diffrenct resource group (pc-managed). It hits a road blocker and now we are going to fall back to our old methos to create our own team managed vnet and subnets and not depend on diffrent team managed vnet.

  wanted to remove all (comment out) the dependecy from all the modules and resources. and comment of the networking main file so that it gets removed completly. Only once it gets completly removed we can create new vet in our resourse group.


  help me with the code to remove current vnet like as in dettact the vnet from all the resources and modules it is acttached as of now. also comment out the networking code so that i can delete all the networking componets incuding the pricate enpoints.

  also list down all the resources which are using the vnet. so that its easier to track
---

以雲端基礎設施與 DevOps 顧問來看，「remove current vnet」要求 AI 掌握部署流程設計、基礎設施規劃、監控維運、自動化治理，並將雲端環境、服務架構或交付流程轉化為部署方案與維運檢查清單。
