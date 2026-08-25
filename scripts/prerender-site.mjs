import { writeFile, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { preview } from 'vite';
import { allPageTargets, pageUrl } from './seo-config.mjs';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const distDir = path.join(root, 'dist');
const PREVIEW_PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PREVIEW_PORT}`;

function distFileFor(page, locale) {
  if (locale === 'en') return path.join(distDir, page.file);
  const nested = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  return path.join(distDir, locale, nested);
}

async function waitForPageContent(page) {
  await page.waitForSelector('header', { timeout: 30_000 });
  await page.waitForSelector('h1', { timeout: 30_000 });
  await page.waitForSelector('main', { timeout: 30_000 });
  await page.waitForFunction(() => {
    const main = document.querySelector('main');
    if (!main) return false;
    const text = (main.innerText || '').replace(/\s+/g, ' ').trim();
    return text.length >= 200;
  }, { timeout: 30_000 });
}

async function main() {
  const server = await preview({
    root,
    preview: {
      host: '127.0.0.1',
      port: PREVIEW_PORT,
      strictPort: true,
    },
  });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    javaScriptEnabled: true,
  });

  try {
    const targets = allPageTargets();
    for (const { locale, page } of targets) {
      const url = `${ORIGIN}${pageUrl(locale, page)}`;
      const view = await context.newPage();
      console.log(`Prerender ${url}`);
      await view.goto(url, { waitUntil: 'load', timeout: 60_000 });
      await waitForPageContent(view);

      let html = await view.content();
      if (!/^<!DOCTYPE/i.test(html)) {
        html = `<!DOCTYPE html>\n${html}`;
      }

      const outFile = distFileFor(page, locale);
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, html, 'utf8');
      await view.close();
      console.log(`  wrote ${path.relative(root, outFile)}`);
    }

    await copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
    console.log('  wrote dist/404.html (SPA fallback)');
  } finally {
    await context.close();
    await browser.close();
    await server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
