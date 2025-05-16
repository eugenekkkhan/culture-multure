import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/culture-multure/',
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSvgr(),
  ],
})
