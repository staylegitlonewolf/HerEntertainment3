import { mkdirSync, copyFileSync, existsSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const repoRoot = path.resolve(__dirname, '..')
const outDir = path.join(repoRoot, 'webos', 'app')

mkdirSync(outDir, { recursive: true })

const appInfoSrc = path.join(repoRoot, 'webos', 'appinfo.json')
const appInfoDest = path.join(outDir, 'appinfo.json')
if (existsSync(appInfoSrc)) copyFileSync(appInfoSrc, appInfoDest)

// Minimal PNG icon (1x1) — packaging expects the referenced file to exist.
// You can replace this with a real 80x80/130x130 icon anytime.
const iconPath = path.join(outDir, 'icon.png')
if (!existsSync(iconPath)) {
  const base64 =
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/erf6q8AAAAASUVORK5CYII='
  writeFileSync(iconPath, Buffer.from(base64, 'base64'))
}

