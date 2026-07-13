import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/Walking-with-rasmus/' : '/'

  return {
  // GitHub Pages project site: assets and router must share this base path.
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'inject-base-into-html',
      transformIndexHtml(html) {
        return html.replaceAll('%BASE_URL%', base)
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  }
})
