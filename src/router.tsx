import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { detectSiteBase } from '@/lib/siteBase';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { WalkingWithRasmusPage } from '@/pages/WalkingWithRasmusPage';
import { WorkWithRasmusPage } from '@/pages/WorkWithRasmusPage';

function getBasename() {
  const base = detectSiteBase();
  return base || undefined;
}

export const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'walking-with-rasmus', element: <WalkingWithRasmusPage /> },
        { path: 'walking-with-rasmus.html', element: <WalkingWithRasmusPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'about.html', element: <AboutPage /> },
        { path: 'work-with-rasmus', element: <WorkWithRasmusPage /> },
        { path: 'work-with-rasmus.html', element: <WorkWithRasmusPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'contact.html', element: <ContactPage /> },
      ],
    },
  ],
  getBasename() ? { basename: getBasename() } : undefined,
);
