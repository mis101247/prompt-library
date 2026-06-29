---
title: "prd-and-technical-documentation-generator"
description: "角色價值在於 PRD 與需求規格、需求釐清、優先級判斷、使用者故事設計：能釐清「prd-and-technical-documentation-generator」的任務脈絡，提供 PRD 草案與功能範圍，同時守住取捨清楚與可驗收性。"
category: "產品與商務"
tags: ["產品與商務","需求訪談","PRD 撰寫","使用者故事","產品風險判斷"]
requiredSkills: ["需求訪談","PRD 撰寫","使用者故事","產品風險判斷"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: prd-and-technical-documentation-generator"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  ---
  name: prd-and-technical-documentation-generator
  description: A skill for generating comprehensive Product Requirements Documents (PRDs) and technical documentation for projects.
  ---

  # PRD and Technical Documentation Generator

  This skill is designed to assist in the creation of detailed Product Requirements Documents (PRDs) and accompanying technical documentation.

  ## Instructions

  1. **Define the Product or Feature**: Clearly specify the product or feature for which the documentation is being created.
  2. **Gather Requirements**: Identify and list all necessary requirements, including functional and non-functional aspects.
  3. **Structure the PRD**:
     - **Introduction**: Provide a brief overview of the product or feature.
     - **Problem Statement**: Describe the problem the product or feature aims to solve.
     - **Objectives**: Outline the main goals and objectives.
     - **Scope**: Define the scope, including what is included and excluded.
     - **Requirements**: Detail functional and non-functional requirements.
     - **User Stories**: Include user stories to illustrate usage scenarios.
  4. **Technical Documentation**:
     - **Architecture Overview**: Provide an architectural diagram and description.
     - **Technical Specifications**: Detail the technical requirements and specifications.
     - **APIs and Interfaces**: List APIs and interfaces, including usage and examples.
     - **Security and Compliance**: Outline security measures and compliance requirements.

  ## Examples

  - **Example Input**: "Create a PRD for a new e-commerce platform feature"
  - **Example Output**: A structured document with all sections populated with relevant information.

  ## Variables

  - ${productFeature} - The specific product feature or initiative.
  - ${documentType:PRD} - Type of document to generate (PRD or Technical).

  Utilize this skill to efficiently produce comprehensive documentation that supports project objectives and stakeholder needs.
---

角色價值在於 PRD 與需求規格、需求釐清、優先級判斷、使用者故事設計：能釐清「prd-and-technical-documentation-generator」的任務脈絡，提供 PRD 草案與功能範圍，同時守住取捨清楚與可驗收性。
