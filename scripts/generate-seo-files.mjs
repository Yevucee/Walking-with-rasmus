import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_BASE,
  DEFAULT_LOCALE,
  LOCALES,
  PAGES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_SUMMARY,
  allPageTargets,
  canonicalUrl,
} from './seo-config.mjs';

const distDir = path.resolve(fileURLToPath(new URL('../dist', import.meta.url)));

function sitemapXml() {
  const urls = allPageTargets().map(({ locale, page }) => {
    const loc = canonicalUrl(locale, page);
    const alternates = [
      ...LOCALES.map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt}" href="${canonicalUrl(alt, page)}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${canonicalUrl(DEFAULT_LOCALE, page)}" />`,
    ].join('\n');
    return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

function robotsTxt() {
  return `User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: *
Allow: /

Sitemap: ${CANONICAL_BASE}/sitemap.xml
`;
}

function llmsTxt() {
  const pageLines = PAGES.map((page) => {
    const label = page.id === 'home' ? 'Home' : page.title.replace(` · ${SITE_NAME}`, '');
    return `- ${label}: ${canonicalUrl(DEFAULT_LOCALE, page)}`;
  }).join('\n');

  return `# ${SITE_NAME}

> ${SITE_SUMMARY}

## English pages

${pageLines}

## Contact

${SITE_EMAIL}
`;
}

async function main() {
  await writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml(), 'utf8');
  await writeFile(path.join(distDir, 'robots.txt'), robotsTxt(), 'utf8');
  await writeFile(path.join(distDir, 'llms.txt'), llmsTxt(), 'utf8');
  await writeFile(path.join(distDir, '.nojekyll'), '', 'utf8');
  console.log('Wrote sitemap.xml, robots.txt, llms.txt, .nojekyll');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
