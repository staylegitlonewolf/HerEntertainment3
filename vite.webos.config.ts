import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build config for packaging as a local webOS TV app (IPK).
// Key differences from GitHub Pages build:
// - `base: './'` so assets resolve from a packaged app root.
// - `outDir: 'webos/app'` so webOS packaging tools can point at a self-contained folder.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'webos/app',
    emptyOutDir: true,
  },
})

