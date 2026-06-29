import { createBrowserRouter } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { WalkingWithRasmusPage } from '@/pages/WalkingWithRasmusPage';
import { WorkWithRasmusPage } from '@/pages/WorkWithRasmusPage';

function getBasename() {
  const base = import.meta.env.BASE_URL;
  if (base === '/') return undefined;
  return base.replace(/\/$/, '');
}

export const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'walking-with-rasmus', element: <WalkingWithRasmusPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'work-with-rasmus', element: <WorkWithRasmusPage /> },
        { path: 'contact', element: <ContactPage /> },
      ],
    },
  ],
  getBasename() ? { basename: getBasename() } : undefined,
);
