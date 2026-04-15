import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site (https://<user>.github.io/HerEntertainment3/)
  base: '/HerEntertainment3/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
