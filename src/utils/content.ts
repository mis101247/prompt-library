import type { CollectionEntry } from 'astro:content';

type DatedEntry =
  | CollectionEntry<'prompts'>
  | CollectionEntry<'roles'>
  | CollectionEntry<'guides'>;

export function sortByPublishedAt<T extends DatedEntry>(entries: T[]) {
  return entries.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function sortFeaturedFirst<T extends DatedEntry>(entries: T[]) {
  return entries.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
  });
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}
