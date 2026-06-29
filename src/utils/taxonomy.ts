const tagLabels: Record<string, string> = {
  'AI代理': 'AI agent',
  'AI 代理': 'AI agent',
};

const categoryLabels: Record<string, string> = {
  'coding-agent': 'AI 工程代理',
  'code-review': '程式碼審查',
  'review-automation': '程式碼審查',
  testing: '測試與驗證',
  security: '資安與風險',
  'vibe-coding': 'Vibe Coding',
  'knowledge-base': '知識管理',
  curation: '策展與整理',
  workflow: '工作流程',
};

const categoryOrder = [
  'AI 工程代理',
  '提示工程',
  '程式開發',
  '程式碼審查',
  '測試與驗證',
  '除錯與診斷',
  '架構與系統設計',
  '資安與風險',
  '資料與分析',
  '產品與設計',
  '創意與媒體',
  '文件與內容',
  '教學與學習',
  '商業與營運',
  'Vibe Coding',
  '知識管理',
  '策展與整理',
  '工作流程',
];

export function formatTag(tag: string) {
  return tagLabels[tag] ?? tag;
}

export function formatTags(tags: string[]) {
  return [...new Set(tags.map(formatTag))];
}

export function tagSearchText(tags: string[]) {
  return [...new Set([...tags, ...formatTags(tags)])].join(' ');
}

export function formatCategory(category: string) {
  return categoryLabels[category] ?? category;
}

export function sortCategories(categories: string[]) {
  return [...new Set(categories.map(formatCategory))].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);

    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    }

    return a.localeCompare(b, 'zh-Hant');
  });
}

export function tagMatches(tag: string, rawTags: string[]) {
  return rawTags.some((rawTag) => formatTag(rawTag) === tag);
}
