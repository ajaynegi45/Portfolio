// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ajaynegi.web.app',
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'vitesse-dark',
        },
    },
});


// themes: {
//   light: 'github-light',
//   dark: 'github-dark',
// },
