# Rasmus Nutzhorn

Personal brand site for **Rasmus Nutzhorn** — a calm, premium hub for how to engage Rasmus, with **Walking with Rasmus** as a flagship subpage. Built with **Vite + React + TypeScript** and **Tailwind CSS v4**.

## Site structure

| Route | Page |
|---|---|
| `/` | Homepage — introduction, ways to engage, credibility |
| `/walking-with-rasmus` | Signature walking experience (original site content) |
| `/about` | About Rasmus |
| `/work-with-rasmus` | Strategic conversations, advisory, speaking |
| `/contact` | Contact — rasmus@alicethetimebender.com |

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

Chromium is required once for the prerender step:

```bash
npx playwright install chromium
CANONICAL_BASE=https://yevucee.github.io/Walking-with-rasmus SITE_BASE_PATH=/Walking-with-rasmus npm run build
```

Static files are written to `dist/`. The build prerenders every public route to HTML, injects canonical/Open Graph tags, and writes `sitemap.xml`, `robots.txt`, `llms.txt`, and `.nojekyll`.

Preview the production bundle:

```bash
npm run preview
```

## Deployment (GitHub Pages)

Live site: **https://yevucee.github.io/Walking-with-rasmus/**

Production builds use `SITE_BASE_PATH=/Walking-with-rasmus` so assets and client-side routes resolve correctly on GitHub Pages. Canonical URLs currently use the same GitHub Pages origin until a custom domain exists.

**One-time setup:** Repo **Settings → Pages → Source: GitHub Actions**

Push to `main` to trigger `.github/workflows/deploy.yml`.

## Credits

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for design and image credits.
