import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { WalkingWithRasmusPage } from '@/pages/WalkingWithRasmusPage';
import { WorkWithRasmusPage } from '@/pages/WorkWithRasmusPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/walking-with-rasmus" element={<WalkingWithRasmusPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work-with-rasmus" element={<WorkWithRasmusPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
