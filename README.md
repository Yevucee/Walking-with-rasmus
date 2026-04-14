# Walking with Rasmus

Single-page marketing site for **High Ground** — private walking conversations in extraordinary landscapes. Built from a Figma export as a **Vite + React + TypeScript** app with **Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Static files are written to `dist/`. Preview the production bundle:

```bash
npm run preview
```

## Deployment (GitHub Pages)

The production build uses a **relative asset base** (`./`) so it works under a project URL such as `https://yevucee.github.io/Walking-with-rasmus/` without extra path configuration.

### One-time setup (required before Actions deploy works)

If you skip this, the **deploy** job fails with **404** (`Failed to create deployment`).

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Save if prompted. Wait a minute, then **Actions** → re-run the failed workflow (or push a commit).

Also ensure **Settings** → **Actions** → **General** → “Actions permissions” allows workflows to run.

### Option A — GitHub Actions (recommended)

Push to `main`, or run **Deploy to GitHub Pages** manually via **Actions** → **workflow_dispatch**. The workflow builds into `dist/` and publishes with `actions/deploy-pages`.

### Option B — Manual

Run `npm run build`, then upload the contents of `dist/` to your Pages branch or hosting target.

## Credits

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for design and image credits.
