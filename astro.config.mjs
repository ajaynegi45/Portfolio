// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://ajaynegi.web.app',
    integrations: [
        mdx(),
        sitemap({
            xslURL: '/sitemap.xsl'
    }),
        sentry({
            dsn: "https://edaf914c0e159f4063a4c0b410538bff@o4509439190171648.ingest.de.sentry.io/4509439193448528",
            // Setting this option to true will send default PII data to Sentry.
            // For example, automatic IP address collection on events
            // @ts-ignore
            sendDefaultPii: true,
            sourceMapsUploadOptions: {
                project: "javascript-astro",
                org: "codies-coder",
                authToken: process.env.SENTRY_AUTH_TOKEN,
            },
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'vitesse-dark',
        },
    },
});