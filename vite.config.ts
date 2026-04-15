import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Works on GitHub Pages + subpaths, and keeps asset URLs relative.
  base: './',
})

