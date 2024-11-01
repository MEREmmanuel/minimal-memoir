// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://github.com/MEREmmanuel/minimal-memoir', // Cambia esto a la URL de tu GitHub Pages
    markdown: {
        shikiConfig: {
            themes: {
                light: 'snazzy-light',
            },
        },
    },
});
