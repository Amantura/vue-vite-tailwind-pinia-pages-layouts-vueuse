import { defineConfig } from 'vite'
import Path from 'path'
import Vue from '@vitejs/plugin-vue'
import Eslint from '@rollup/plugin-eslint'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  server: {
    port: 8800
  },

  plugins: [
    Vue(),

    Pages({
      pagesDir: 'src/pages',
      exclude: ['**/components/*.vue'],
      extensions: ['vue', 'js'],
    }),

    Layouts({
      layoutsDir: 'src/layouts',
    }),

    Eslint({
      include: '**/*.+(vue|js|jsx|ts|tsx)',
      exclude: ['node_modules/**', 'dist/**']
    }),
  ],

  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src'),
    },
  },
})
