const REPO_SEGMENT = 'Walking-with-rasmus';

function envBase(): string {
  const raw = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  return raw === '/' ? '' : raw;
}

/**
 * Preview subpath on GitHub Pages (`/Walking-with-rasmus`); empty on a
 * production root domain. Used by the router basename and static asset URLs.
 */
export function detectSiteBase(): string {
  if (typeof window === 'undefined') return envBase();

  const host = window.location.hostname;
  if (host.endsWith('.github.io')) {
    const first = window.location.pathname.split('/').filter(Boolean)[0];
    if (first && first.toLowerCase() === REPO_SEGMENT.toLowerCase()) return `/${first}`;
    return first ? `/${first}` : '';
  }

  if (host === 'localhost' || host === '127.0.0.1') return envBase();

  return '';
}

export function assetUrl(path: string): string {
  const base = detectSiteBase();
  const clean = path.replace(/^\//, '');
  if (!base) return `/${clean}`;
  return `${base}/${clean}`;
}
