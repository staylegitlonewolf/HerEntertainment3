$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $repoRoot "webos\\app"
$outDir = Join-Path $repoRoot "webos\\out"

if (!(Test-Path $appDir)) {
  throw "Missing $appDir. Run: npm run build:webos"
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$ares = Get-Command ares-package -ErrorAction SilentlyContinue
if (-not $ares) {
  throw "ares-package not found. Install webOS CLI tools (or use webOS Studio) and ensure ares-package is on PATH."
}

Write-Host "Packaging IPK..."
ares-package $appDir -o $outDir
Write-Host "Done. Output in: $outDir"

