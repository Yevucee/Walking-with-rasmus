import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function resolveBase(command: string, isPreview: boolean | undefined) {
  const fromEnv = process.env.SITE_BASE_PATH
  const raw =
    fromEnv ?? (command === 'build' || isPreview ? '/Walking-with-rasmus' : '')
  if (!raw || raw === '/') return '/'
  return `${raw.replace(/\/+$/, '')}/`
}

export default defineConfig(({ command, isPreview }) => {
  const base = resolveBase(command, isPreview)

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
