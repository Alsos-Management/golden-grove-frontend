import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// When the site is cut over to goldengroverecovery.com, set SITE_URL in env and drop BASE.
const SITE_URL = process.env.SITE_URL || 'https://alsosmanagement.github.io';
const BASE = process.env.SITE_BASE ?? '/golden-grove-frontend';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['react-router-dom'],
    },
  },
});
