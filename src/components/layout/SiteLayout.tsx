import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <SiteHeader />
      <main className="pt-[72px] md:pt-[88px]">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  );
}
