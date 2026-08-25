import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  DEFAULT_LOCALE,
  LOCALES,
  SITE_BASE_PATH,
  SITE_NAME,
  allPageTargets,
  canonicalUrl,
} from './seo-config.mjs';

const distDir = path.resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const PLACEHOLDERS = [
  '[SITE NAME]',
  '[PRODUCTION-DOMAIN]',
  '[REPO-NAME]',
  'TODO',
  'TBD',
  'lorem ipsum',
  'example.com',
  'REPLACE_ME',
  'your-domain',
  'placeholder',
];

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

function distFileFor(page, locale) {
  if (locale === DEFAULT_LOCALE) return path.join(distDir, page.file);
  const nested = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  return path.join(distDir, locale, nested);
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function attrMatches(html, regex) {
  return [...html.matchAll(regex)].map((m) => m[1]);
}

function hasPlaceholder(text) {
  const lower = text.toLowerCase();
  return PLACEHOLDERS.some((token) => lower.includes(token.toLowerCase()));
}

async function fileExists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function auditPage(locale, page) {
  const file = distFileFor(page, locale);
  const rel = path.relative(path.join(distDir, '..'), file);
  const html = await readFile(file, 'utf8');
  const prefix = `${locale}${page.path}`;

  const titles = attrMatches(html, /<title>([^<]*)<\/title>/gi);
  if (titles.length === 1 && titles[0].trim()) ok(`${prefix} title`);
  else fail(`${prefix} title`, `expected 1, got ${titles.length}`);

  const descriptions = attrMatches(
    html,
    /<meta\s+name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/gi,
  );
  if (descriptions.length === 1 && descriptions[0].trim()) ok(`${prefix} description`);
  else fail(`${prefix} description`, `expected 1, got ${descriptions.length}`);

  const canonicals = attrMatches(html, /<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/gi);
  const expectedCanonical = canonicalUrl(locale, page);
  if (canonicals.length === 1 && canonicals[0] === expectedCanonical) {
    ok(`${prefix} canonical`);
  } else {
    fail(`${prefix} canonical`, `expected ${expectedCanonical}, got ${JSON.stringify(canonicals)}`);
  }

  if (SITE_BASE_PATH && !CANONICAL_BASE.endsWith(SITE_BASE_PATH)) {
    if (canonicals.some((href) => href.includes(`${new URL(CANONICAL_BASE).origin}${SITE_BASE_PATH}/`))) {
      fail(`${prefix} canonical preview leak`, canonicals.join(', '));
    } else {
      ok(`${prefix} canonical has no preview base`);
    }
  }

  for (const alt of [...LOCALES, 'x-default']) {
    const hrefs = attrMatches(
      html,
      new RegExp(
        `<link\\s+rel=["']alternate["'][^>]*hreflang=["']${alt}["'][^>]*href=["']([^"']+)["'][^>]*>`,
        'gi',
      ),
    );
    const expected = canonicalUrl(alt === 'x-default' ? DEFAULT_LOCALE : alt, page);
    if (hrefs.length >= 1 && hrefs.includes(expected)) ok(`${prefix} hreflang ${alt}`);
    else fail(`${prefix} hreflang ${alt}`, `expected ${expected}, got ${JSON.stringify(hrefs)}`);
  }

  const lang = html.match(/<html\b[^>]*\blang=["']([^"']+)["']/i);
  if (lang && lang[1] === locale) ok(`${prefix} html lang`);
  else fail(`${prefix} html lang`, lang ? lang[1] : 'missing');

  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length === 1) {
    const h1Text = stripTags(h1s[0][1]).trim();
    if (h1Text === page.h1) ok(`${prefix} h1`);
    else fail(`${prefix} h1`, `expected "${page.h1}", got "${h1Text}"`);
  } else {
    fail(`${prefix} h1`, `expected 1, got ${h1s.length}`);
  }

  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const mainText = mainMatch ? stripTags(mainMatch[1]) : '';
  if (mainText.length >= 200) ok(`${prefix} main text (${mainText.length} chars)`);
  else fail(`${prefix} main text`, `expected ≥200 chars, got ${mainText.length}`);

  if (/noindex/i.test(html)) fail(`${prefix} noindex`, 'found noindex');
  else ok(`${prefix} not noindex`);

  if (/\?lang=/i.test(html)) fail(`${prefix} lang query`, 'found ?lang=');
  else ok(`${prefix} no ?lang=`);

  const ogUrl = attrMatches(html, /<meta\s+property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/gi);
  if (ogUrl.length === 1 && ogUrl[0] === expectedCanonical) ok(`${prefix} og:url`);
  else fail(`${prefix} og:url`, JSON.stringify(ogUrl));

  const ogImage = attrMatches(html, /<meta\s+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/gi);
  if (ogImage.length === 1 && ogImage[0].startsWith(CANONICAL_BASE)) ok(`${prefix} og:image`);
  else fail(`${prefix} og:image`, JSON.stringify(ogImage));

  if (/<header\b/i.test(html) && /<nav\b/i.test(html) && html.includes(SITE_NAME)) {
    ok(`${prefix} header nav`);
  } else {
    fail(`${prefix} header nav`, 'missing header, nav, or site name');
  }

  if (/<footer\b/i.test(html)) ok(`${prefix} footer`);
  else fail(`${prefix} footer`, 'missing footer');

  const ldBlocks = [...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  if (page.id === 'home') {
    if (ldBlocks.length !== 1) {
      fail(`${prefix} json-ld`, `expected 1 block, got ${ldBlocks.length}`);
    } else {
      try {
        const data = JSON.parse(ldBlocks[0][1]);
        const blob = JSON.stringify(data);
        if (hasPlaceholder(blob)) fail(`${prefix} json-ld placeholders`, blob.slice(0, 180));
        else if (!blob.includes('schema.org')) fail(`${prefix} json-ld context`, 'missing schema.org');
        else if (!blob.includes('WebSite') || !blob.includes('Organization')) {
          fail(`${prefix} json-ld types`, blob.slice(0, 180));
        } else {
          ok(`${prefix} json-ld`);
        }
      } catch (error) {
        fail(`${prefix} json-ld`, error.message);
      }
    }
  } else if (ldBlocks.length > 0) {
    try {
      for (const block of ldBlocks) JSON.parse(block[1]);
      ok(`${prefix} json-ld parse`);
    } catch (error) {
      fail(`${prefix} json-ld parse`, error.message);
    }
  }

  if (hasPlaceholder(html)) fail(`${prefix} placeholders`, 'placeholder token in HTML');
  else ok(`${prefix} no placeholders`);
}

async function auditCrawlFiles() {
  for (const name of ['sitemap.xml', 'robots.txt', 'llms.txt', '.nojekyll']) {
    if (await fileExists(path.join(distDir, name))) ok(`dist/${name} exists`);
    else fail(`dist/${name} exists`, 'missing');
  }

  const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
  for (const { locale, page } of allPageTargets()) {
    const loc = canonicalUrl(locale, page);
    if (sitemap.includes(`<loc>${loc}</loc>`)) ok(`sitemap ${loc}`);
    else fail(`sitemap ${loc}`, 'missing loc');
  }
  if (sitemap.includes('index.html')) fail('sitemap index.html', 'homepages should be / not index.html');
  else ok('sitemap has no index.html locs');

  const robots = await readFile(path.join(distDir, 'robots.txt'), 'utf8');
  if (robots.includes(`Sitemap: ${CANONICAL_BASE}/sitemap.xml`)) ok('robots sitemap');
  else fail('robots sitemap', robots);
  if (/User-agent:\s*Googlebot/i.test(robots) && /Allow:\s*\//.test(robots)) ok('robots google');
  else fail('robots google', 'Googlebot not allowed');

  const llms = await readFile(path.join(distDir, 'llms.txt'), 'utf8');
  if (llms.includes(CANONICAL_BASE) && llms.includes('rasmus@alicethetimebender.com')) ok('llms.txt content');
  else fail('llms.txt content', 'missing canonical URLs or contact');
}

async function main() {
  for (const { locale, page } of allPageTargets()) {
    await auditPage(locale, page);
  }
  await auditCrawlFiles();

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
