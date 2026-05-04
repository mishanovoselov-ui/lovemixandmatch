import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lovemixandmatch.com',
  output: 'static',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
