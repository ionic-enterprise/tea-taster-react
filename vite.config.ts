/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'Tea Tasting Notes',
        short_name: 'TeaTaster',
        description: 'Take some tea tasting notes',
        theme_color: '#ac9d83',
        background_color: '#8a7a5f',
        icons: [
          {
            src: 'icons/icon-72.webp',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'icons/icon-96.webp',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'icons/icon-128.webp',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'icons/icon-192.webp',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'icons/icon-256.webp',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'icons/icon-512.webp',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,webp}'],
      },
    }),
  ],
  server: {
    port: 8100,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
