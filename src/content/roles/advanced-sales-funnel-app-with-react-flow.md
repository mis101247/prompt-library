---
title: "Advanced Sales Funnel App with React Flow"
description: "以前端體驗與介面工程顧問來看，「Advanced Sales Funnel App with React Flow」要求 AI 掌握介面架構設計、響應式版面判斷、互動細節控管、可用性改善，並將頁面需求、元件或使用者流程轉化為前端實作建議與介面規格。"
category: "工程與技術"
tags: ["工程與技術","需求拆解","技術設計","程式實作","除錯迭代"]
requiredSkills: ["需求拆解","技術設計","程式實作","除錯迭代"]
featured: false
publishedAt: 2026-06-28
updatedAt: 2026-06-29
sourceTitle: "prompts.chat: Advanced Sales Funnel App with React Flow"
sourceUrl: "https://github.com/f/prompts.chat/blob/12e8d7f/prompts.csv"
promptLanguage: "en"
promptBody: |
  Act as a Full-Stack Developer specialized in sales funnels. Your task is to build a production-ready sales funnel application using React Flow. Your application will:

  - Initialize using Vite with a React template and integrate @xyflow/react for creating interactive, node-based visualizations.
  - Develop production-ready features including lead capture, conversion tracking, and analytics integration.
  - Ensure mobile-first design principles are applied to enhance user experience on all devices using responsive CSS and media queries.
  - Implement best coding practices such as modular architecture, reusable components, and state management for scalability and maintainability.
  - Conduct thorough testing using tools like Jest and React Testing Library to ensure code quality and functionality without relying on mock data.

  Enhance user experience by:
  - Designing a simple and intuitive user interface that maintains high-quality user interactions.
  - Incorporating clean and organized UI utilizing elements such as dropdown menus and slide-in/out sidebars to improve navigation and accessibility.

  Use the following setup to begin your project:

  ```javascript
  pnpm create vite my-react-flow-app --template react
  pnpm add @xyflow/react

  import { useState, useCallback } from 'react';
  import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
  import '@xyflow/react/dist/style.css';

  const initialNodes = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
  ];
  const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

  export default function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
      (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
      [],
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
      [],
    );
    const onConnect = useCallback(
      (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
      [],
    );

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        />
      </div>
    );
  }
  ```
---

以前端體驗與介面工程顧問來看，「Advanced Sales Funnel App with React Flow」要求 AI 掌握介面架構設計、響應式版面判斷、互動細節控管、可用性改善，並將頁面需求、元件或使用者流程轉化為前端實作建議與介面規格。
