/**
 * Dual URL config for GitHub Pages preview vs production canonicals.
 *
 * Canonical / sitemap / hreflang / og:url / llms.txt → CANONICAL_BASE
 * Preview internal links & assets → SITE_BASE_PATH
 *
 * Until a custom domain exists, CANONICAL_BASE is the GitHub Pages origin
 * (https://user.github.io/repo). SITE_BASE_PATH is still the preview subpath
 * so the same helpers work when CANONICAL_BASE later becomes https://domain.
 */

export const SITE_NAME = 'Rasmus Nutzhorn';
export const SITE_EMAIL = 'rasmus@alicethetimebender.com';
export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en'];

export const REPO_NAME = 'Walking-with-rasmus';
export const GITHUB_PAGES_ORIGIN = `https://yevucee.github.io/${REPO_NAME}`;

export const CANONICAL_BASE = stripTrailingSlash(
  process.env.CANONICAL_BASE || GITHUB_PAGES_ORIGIN,
);

export const SITE_BASE_PATH = normalizeBasePath(
  process.env.SITE_BASE_PATH ?? `/${REPO_NAME}`,
);

export const OG_IMAGE_PATH = '/images/rasmus-hero.png';

export const PAGES = [
  {
    id: 'home',
    path: '/',
    file: 'index.html',
    title: SITE_NAME,
    h1: 'Rasmus Nutzhorn',
    description:
      'Most of my work begins with a conversation. Sometimes around a board table. Sometimes over dinner. Sometimes while walking through the mountains.',
  },
  {
    id: 'about',
    path: '/about',
    file: 'about.html',
    title: `About · ${SITE_NAME}`,
    h1: 'The Journey.',
    description:
      'I did not set out to build a career around advice. I set out to build companies, teams, and ideas, and to understand how organisations respond when the world around them shifts.',
  },
  {
    id: 'work-with-rasmus',
    path: '/work-with-rasmus',
    file: 'work-with-rasmus.html',
    title: `Working Together · ${SITE_NAME}`,
    h1: 'Working Together.',
    description:
      'Most enquiries begin by asking what I offer. The more useful question is whether we are facing something that needs real attention.',
  },
  {
    id: 'walking-with-rasmus',
    path: '/walking-with-rasmus',
    file: 'walking-with-rasmus.html',
    title: `Walking with Rasmus · ${SITE_NAME}`,
    h1: 'Walking with Rasmus',
    description:
      'Private walking time in extraordinary landscapes for reflection, perspective, and where needed, serious conversation.',
  },
  {
    id: 'contact',
    path: '/contact',
    file: 'contact.html',
    title: `Contact · ${SITE_NAME}`,
    h1: 'Get in touch',
    description:
      'If you are considering a walk, a conversation, a gathering, or another form of engagement, you are welcome to reach out.',
  },
];

export const SITE_SUMMARY =
  'Personal site for Rasmus Nutzhorn, founder of Alice the Time Bender, senior executive advisor, and global speaker. Work spans technology, organisational transformation, stewardship, and Walking with Rasmus: private walking time in nature for conversations that do not belong in a meeting room.';

function stripTrailingSlash(value) {
  return String(value).replace(/\/+$/, '');
}

function normalizeBasePath(value) {
  if (!value || value === '/') return '';
  const withSlash = value.startsWith('/') ? value : `/${value}`;
  return stripTrailingSlash(withSlash);
}

export function localePrefix(locale) {
  if (!locale || locale === DEFAULT_LOCALE) return '';
  return `/${locale}`;
}

export function pagePath(locale, page) {
  const prefix = localePrefix(locale);
  if (!prefix) return page.path;
  return page.path === '/' ? `${prefix}/` : `${prefix}${page.path}`;
}

/** Production URL for canonical, sitemap, hreflang, og:url, llms.txt. */
export function canonicalUrl(locale, page, extraPath = '') {
  const path = extraPath || pagePath(locale, page);
  if (!path || path === '/') return `${CANONICAL_BASE}/`;
  return `${CANONICAL_BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Preview/internal path including SITE_BASE_PATH (no origin). */
export function pageUrl(locale, page) {
  const path = pagePath(locale, page);
  if (!SITE_BASE_PATH) return path === '/' ? '/' : path;
  if (path === '/') return `${SITE_BASE_PATH}/`;
  return `${SITE_BASE_PATH}${path}`;
}

export function assetCanonicalUrl(assetPath) {
  const path = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${CANONICAL_BASE}${path}`;
}

export function previewAssetUrl(assetPath) {
  const path = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return SITE_BASE_PATH ? `${SITE_BASE_PATH}${path}` : path;
}

export function allPageTargets() {
  const targets = [];
  for (const locale of LOCALES) {
    for (const page of PAGES) {
      targets.push({ locale, page });
    }
  }
  return targets;
}
