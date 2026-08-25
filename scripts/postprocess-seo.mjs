import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  DEFAULT_LOCALE,
  LOCALES,
  OG_IMAGE_PATH,
  SITE_BASE_PATH,
  SITE_EMAIL,
  SITE_NAME,
  SITE_SUMMARY,
  allPageTargets,
  assetCanonicalUrl,
  canonicalUrl,
  localePrefix,
} from './seo-config.mjs';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const distDir = path.join(root, 'dist');
const SEO_START = '<!--seo-head-->';
const SEO_END = '<!--/seo-head-->';
const REPO = SITE_BASE_PATH.replace(/^\//, '');

function distFileFor(page, locale) {
  if (locale === DEFAULT_LOCALE) return path.join(distDir, page.file);
  const nested = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  return path.join(distDir, locale, nested);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function hreflangLinks(locale, page) {
  const links = LOCALES.map((alt) => {
    const href = canonicalUrl(alt, page);
    return `    <link rel="alternate" hreflang="${alt}" href="${escapeHtml(href)}" />`;
  });
  links.push(
    `    <link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl(DEFAULT_LOCALE, page))}" />`,
  );
  return links.join('\n');
}

function jsonLdFor(locale, page) {
  if (page.id !== 'home') return '';
  const home = canonicalUrl(locale, page);
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${home}#website`,
        url: home,
        name: SITE_NAME,
        description: SITE_SUMMARY,
        inLanguage: 'en',
        publisher: { '@id': `${home}#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${home}#organization`,
        name: SITE_NAME,
        url: home,
        email: SITE_EMAIL,
        logo: assetCanonicalUrl('/favicon.svg'),
      },
    ],
  };
  return `    <script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function seoHead(locale, page) {
  const url = canonicalUrl(locale, page);
  const ogImage = assetCanonicalUrl(OG_IMAGE_PATH);
  const parts = [
    `    <title>${escapeHtml(page.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(page.description)}" />`,
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    hreflangLinks(locale, page),
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `    <meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(url)}" />`,
    `    <meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `    <meta property="og:locale" content="en_US" />`,
    jsonLdFor(locale, page),
  ].filter(Boolean);

  return `${SEO_START}\n${parts.join('\n')}\n    ${SEO_END}`;
}

function stripExistingSeo(html) {
  let next = html.replace(new RegExp(`${SEO_START}[\\s\\S]*?${SEO_END}\\n?`, 'g'), '');
  next = next.replace(/<title>[^<]*<\/title>\s*/i, '');
  next = next.replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, '');
  next = next.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  next = next.replace(/<link\s+rel=["']alternate["'][^>]*hreflang[^>]*>\s*/gi, '');
  next = next.replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, '');
  next = next.replace(/<script type=["']application\/ld\+json["']>[\s\S]*?<\/script>\s*/gi, '');
  return next;
}

function setHtmlLang(html, locale) {
  if (/<html\b[^>]*\blang=/i.test(html)) {
    return html.replace(/<html\b([^>]*)\blang=(["']).*?\2/i, `<html$1lang="${locale}"`);
  }
  return html.replace(/<html\b/i, `<html lang="${locale}"`);
}

function collapseDuplicateSegments(pathname) {
  let next = pathname;
  if (REPO) {
    const dupRepo = new RegExp(`/${REPO}/${REPO}(?=/|"|$|\\?)`, 'g');
    next = next.replace(dupRepo, `/${REPO}`);
  }
  for (const locale of LOCALES) {
    const prefix = localePrefix(locale).replace(/^\//, '');
    if (!prefix) continue;
    const dupLocale = new RegExp(`/${prefix}/${prefix}(?=/|"|$|\\?)`, 'g');
    next = next.replace(dupLocale, `/${prefix}`);
  }
  return next;
}

function withPreviewBase(pathname) {
  const collapsed = collapseDuplicateSegments(pathname);
  if (!SITE_BASE_PATH) return collapsed;
  if (collapsed === SITE_BASE_PATH || collapsed.startsWith(`${SITE_BASE_PATH}/`)) {
    return collapsed;
  }
  if (collapsed === '/') return `${SITE_BASE_PATH}/`;
  return `${SITE_BASE_PATH}${collapsed}`;
}

const PREVIEW_ORIGINS = ['http://127.0.0.1:4173', 'http://localhost:4173'];

function toPathname(value) {
  for (const origin of PREVIEW_ORIGINS) {
    if (value === origin) return '/';
    if (value.startsWith(`${origin}/`)) return value.slice(origin.length);
  }
  return value;
}

function rewritePreviewPaths(html) {
  return html.replace(/\s(href|src)="([^"]+)"/gi, (full, attr, value) => {
    const pathname = toPathname(value);
    const isLocalPreview = pathname !== value;

    if (
      !isLocalPreview &&
      (value.startsWith('mailto:') ||
        value.startsWith('tel:') ||
        value.startsWith('http://') ||
        value.startsWith('https://') ||
        value.startsWith('//') ||
        value.startsWith('#') ||
        value.startsWith('data:') ||
        value.startsWith('{'))
    ) {
      return full;
    }

    let rewritten = pathname;

    if (REPO) {
      const otherLocales = LOCALES.filter((l) => l !== DEFAULT_LOCALE).join('|');
      if (otherLocales) {
        const localeThenRepo = new RegExp(`^/(${otherLocales})/${REPO}(/|$)`);
        if (localeThenRepo.test(rewritten)) {
          rewritten = rewritten.replace(localeThenRepo, `/${REPO}/$1$2`);
        }
      }
    }

    if (rewritten.startsWith('/')) {
      rewritten = withPreviewBase(rewritten);
    } else if (/^(assets|images|favicon)/.test(rewritten)) {
      rewritten = withPreviewBase(`/${rewritten}`);
    }

    rewritten = collapseDuplicateSegments(rewritten);
    return ` ${attr}="${rewritten}"`;
  });
}

async function processFile(locale, page) {
  const file = distFileFor(page, locale);
  const original = await readFile(file, 'utf8');
  let html = stripExistingSeo(original);
  html = setHtmlLang(html, locale);
  if (!html.includes('</head>')) {
    throw new Error(`No </head> in ${file}`);
  }
  html = html.replace('</head>', `    ${seoHead(locale, page)}\n  </head>`);
  html = rewritePreviewPaths(html);

  if (html.includes(`${CANONICAL_BASE}${SITE_BASE_PATH}/`) && !CANONICAL_BASE.endsWith(SITE_BASE_PATH)) {
    throw new Error(`Canonical mixed with preview base in ${file}`);
  }

  await writeFile(file, html, 'utf8');
  console.log(`SEO ${path.relative(root, file)}`);
}

async function main() {
  for (const { locale, page } of allPageTargets()) {
    await processFile(locale, page);
  }

  try {
    const fallback = path.join(distDir, '404.html');
    const home = await readFile(path.join(distDir, 'index.html'), 'utf8');
    await writeFile(fallback, home, 'utf8');
  } catch {
    // optional
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
