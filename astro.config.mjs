import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ajaynegi.web.app',

  integrations: [mdx(), sitemap(), react()],

  markdown: {
      shikiConfig: {
          theme: 'vitesse-dark',
      },
  },
});