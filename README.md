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

```bash
npm run build
```

Static files are written to `dist/`. The build also copies `index.html` to `404.html` for GitHub Pages client-side routing.

Preview the production bundle:

```bash
npm run preview
```

## Deployment (GitHub Pages)

Live site: **https://yevucee.github.io/Walking-with-rasmus/**

The production build uses a **relative asset base** (`./`) so assets work under the project URL.

**One-time setup:** Repo **Settings → Pages → Source: GitHub Actions**

Push to `main` to trigger `.github/workflows/deploy-pages.yml`.

## Credits

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for design and image credits.
