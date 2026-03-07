import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://roboindex.github.io',
  integrations: [sitemap()],
  output: 'static',
});
