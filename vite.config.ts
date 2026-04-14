import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // Relative asset URLs in production so the built site works on GitHub Pages
  // project URLs (https://<user>.github.io/<repo>/) without hard-coding the repo name.
  base: command === 'build' ? './' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
