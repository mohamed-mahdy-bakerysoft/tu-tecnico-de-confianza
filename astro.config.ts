import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://jeronimomayorca.vercel.app/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true }), tailwind()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});