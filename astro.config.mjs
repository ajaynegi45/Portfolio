// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ajaynegi.web.app',
    integrations: [mdx(), sitemap()],
    markdown: {
        syntaxHighlight: 'prism',
        shikiConfig: {
            theme: 'vitesse-dark',
        },
    },
});


// themes: {
//   light: 'github-light',
//   dark: 'github-dark',
// },
