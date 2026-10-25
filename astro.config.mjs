import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Usuario/organización: https://<usuario>.github.io  (repo llamado <usuario>.github.io -> base '/')
// Repo normal (ej. "portfolio"): cambia base a '/portfolio'
export default defineConfig({
  site: 'https://polodemanzana.github.io',
  base: '/',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark-dimmed' } },
});
