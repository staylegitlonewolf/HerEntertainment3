# webOS TV (Personal Install)

This folder is for **personal / developer-mode installs** on LG webOS TVs.
It is **not** the LG Content Store publishing flow.

## Build

From the repo root:

```bash
npm install
npm run build:webos
```

This generates a self-contained app folder at `webos/app/`.

## Install (Developer Mode)

High-level steps:

1. On the TV, install **Developer Mode** from the LG Content Store.
2. Enable Developer Mode and add your TV in **webOS Studio**.
3. Package + install using webOS Studio, pointing at `webos/app/`.

Optional CLI packaging (requires `ares-package` on PATH):

```powershell
./webos/package.ps1
```

The IPK will be written to `webos/out/`.

