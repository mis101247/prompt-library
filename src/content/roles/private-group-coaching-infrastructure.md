---
title: "Private Group Coaching Infrastructure"
description: "「Private Group Coaching Infrastructure」這個角色提示詞需要 AI 具備目標釐清、行動拆解、反思提問等能力，適合用來協助釐清目標、拆解行動、建立習慣或進行自我反思。"
category: "生活與健康"
tags: ["生活與健康","目標釐清","行動拆解","反思提問","持續追蹤"]
requiredSkills: ["目標釐清","行動拆解","反思提問","持續追蹤"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Private Group Coaching Infrastructure"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Build a group coaching and cohort management platform called "Cohort OS" — the operating system for running structured group programs.

  Core features:
  - Program builder: coach sets program name, session count, cadence (weekly/bi-weekly), max participants, price, and start date. Each session has a title, a pre-work assignment, and a post-session reflection prompt
  - Participant portal: each enrolled participant sees their program timeline, upcoming sessions, submitted assignments, and peer reflections in one dashboard
  - Assignment submission: participants submit written or link-based assignments before each session. Coach sees all submissions in one view, can leave written feedback per submission
  - Peer feedback rounds: after each session, participants are prompted to give one piece of structured feedback to one other participant (rotates automatically so everyone gives and receives equally)
  - Progress tracker: coach dashboard showing assignment completion rate per participant, attendance, and a simple engagement score
  - Certificate generation: at program completion, auto-generates a PDF certificate with participant name, program name, coach name, and completion date

  Stack: React, Supabase, Stripe Connect for coach payouts, Resend for session reminders and feedback prompts. Clean, professional design — coach-first UX.
---

「Private Group Coaching Infrastructure」這個角色提示詞需要 AI 具備目標釐清、行動拆解、反思提問等能力，適合用來協助釐清目標、拆解行動、建立習慣或進行自我反思。
