import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { sortByPublishedAt } from '../utils/content';

export async function GET(context) {
  const entries = sortByPublishedAt([
    ...(await getCollection('prompts')),
    ...(await getCollection('guides')),
  ]);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/${entry.collection}/${entry.id}/`,
    })),
  });
}
