import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prompt-library.keyo.tw',
  integrations: [mdx(), sitemap()],
});
