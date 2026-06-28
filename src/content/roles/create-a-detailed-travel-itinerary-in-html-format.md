---
title: "Create a detailed travel itinerary in HTML format"
description: "適合請 AI 扮演「Create a detailed travel itinerary in HTML format」，協助處理工程、技術判斷或開發相關任務。"
category: "工程與技術"
tags: ["工程與技術","create","detailed","travel","itinerary"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-28
sourceTitle: "prompts.chat: Create a detailed travel itinerary in HTML format"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  <!DOCTYPE html>
  <html>
  <head>
      <title>Travel Itinerary: Nanjing to Changchun</title>
      <style>
          body { font-family: Arial, sans-serif; }
          .itinerary { margin: 20px; }
          .day { margin-bottom: 20px; }
          .header { font-size: 24px; font-weight: bold; }
          .sub-header { font-size: 18px; font-weight: bold; }
      </style>
  </head>
  <body>
      <div class="itinerary">
          <div class="header">Travel Itinerary: Nanjing to Changchun</div>
          <div class="sub-header">Dates: ${startDate} to ${endDate}</div>
          <div class="sub-header">Budget: ${budget} RMB</div>

          <div class="day">
              <div class="sub-header">Day 1: Arrival in Changchun</div>
              <p><strong>Flight:</strong> ${flightDetails}</p>
              <p><strong>Hotel:</strong> ${hotelName} - Located in city center, comfortable and affordable</p>
              <p><strong>Weather:</strong> ${weatherForecast}</p>
              <p><strong>Packing Tips:</strong> ${packingRecommendations}</p>
          </div>

          <div class="day">
              <div class="sub-header">Day 2: Exploring Changchun</div>
              <p><strong>Attractions:</strong> ${attraction1} (Ticket: ${ticketPrice1}, Open: ${openTime1})</p>
              <p><strong>Lunch:</strong> Try local cuisine at ${restaurant1}</p>
              <p><strong>Afternoon:</strong> Visit ${attraction2} (Ticket: ${ticketPrice2}, Open: ${openTime2})</p>
              <p><strong>Dinner:</strong> Enjoy a meal at ${restaurant2}</p>
              <p><strong>Transportation:</strong> ${transportDetails}</p>
          </div>

          <!-- Repeat similar blocks for Day 3, Day 4, etc. -->
          
          <div class="day">
              <div class="sub-header">Day 5: Departure</div>
              <p><strong>Return Flight:</strong> ${returnFlightDetails}</p>
          </div>

      </div>
  </body>
  </html>
---

適合請 AI 扮演「Create a detailed travel itinerary in HTML format」，協助處理工程、技術判斷或開發相關任務。
