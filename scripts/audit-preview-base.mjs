import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_LOCALE, LOCALES, SITE_BASE_PATH } from './seo-config.mjs';

const distDir = path.resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const REPO = SITE_BASE_PATH.replace(/^\//, '');
const localePrefixes = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

let passed = 0;
let failed = 0;
const failures = [];

function ok(label) {
  passed += 1;
  console.log(`OK  ${label}`);
}

function fail(label, detail) {
  failed += 1;
  failures.push(`${label}: ${detail}`);
  console.log(`FAIL ${label}: ${detail}`);
}

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function findMatches(html, regex) {
  return [...html.matchAll(regex)].map((m) => m[0]);
}

async function main() {
  if (!SITE_BASE_PATH) {
    console.log('SITE_BASE_PATH empty; preview-base checks skipped.');
    return;
  }

  const files = await htmlFiles(distDir);
  for (const file of files) {
    const rel = path.relative(distDir, file);
    const html = await readFile(file, 'utf8');

    const dupRepo = findMatches(html, new RegExp(`/${REPO}/${REPO}(/|"|\\?|#)`, 'g'));
    if (dupRepo.length) fail(`${rel} duplicate repo`, dupRepo.slice(0, 3).join(', '));
    else ok(`${rel} no /${REPO}/${REPO}/`);

    for (const locale of localePrefixes) {
      const dupLocale = findMatches(html, new RegExp(`/${locale}/${locale}(/|"|\\?|#)`, 'g'));
      if (dupLocale.length) fail(`${rel} duplicate locale`, dupLocale.slice(0, 3).join(', '));
      else ok(`${rel} no /${locale}/${locale}/`);

      const localeThenRepo = findMatches(html, new RegExp(`/${locale}/${REPO}(/|"|\\?|#)`, 'g'));
      if (localeThenRepo.length) fail(`${rel} locale+repo`, localeThenRepo.slice(0, 3).join(', '));
      else ok(`${rel} no /${locale}/${REPO}/`);
    }

    const bareAssets = findMatches(html, /\s(?:src|href)="assets\//g);
    if (bareAssets.length) fail(`${rel} bare assets/`, 'locale/nested pages must not use relative assets/');
    else ok(`${rel} no bare assets/`);

    const rootAbsoluteAssets = findMatches(html, /\s(?:src|href)="\/assets\//g);
    if (rootAbsoluteAssets.length) {
      fail(`${rel} unprefixed /assets/`, 'expected preview base on assets');
    } else {
      ok(`${rel} assets use preview base`);
    }
  }

  const total = passed + failed;
  console.log(`\n${passed}/${total} OK`);
  if (failed) {
    console.error(`\n${failed} failed:\n- ${failures.join('\n- ')}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
