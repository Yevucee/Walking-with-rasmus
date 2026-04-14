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

**Option A — GitHub Actions (recommended)**  
Push to `main`. The workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys to GitHub Pages. In the repository settings, enable **Pages** with **GitHub Actions** as the source.

**Option B — Manual**  
Run `npm run build`, then upload the contents of `dist/` to your Pages branch or hosting target.

## Credits

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for design and image credits.
