import { useEffect } from 'react';

const SITE_NAME = 'Rasmus Nutzhorn';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : SITE_NAME;
  }, [title]);
}
