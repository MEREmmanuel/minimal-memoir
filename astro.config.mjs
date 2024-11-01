// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://MEREmmanuel.github.io', // Cambia esto a la URL de tu GitHub Pages
    markdown: {
        shikiConfig: {
            themes: {
                light: 'snazzy-light',
            },
        },
    },
    base: 'minimal-memoir',
});
