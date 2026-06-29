import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { serifHeading } from '@/lib/styles';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/work-with-rasmus', label: 'Work with Rasmus', end: false },
  { to: '/walking-with-rasmus', label: 'Walking with Rasmus', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `group relative text-[13px] tracking-[0.08em] uppercase font-light transition-all duration-300 ${
    isActive ? 'text-[#3A3A36]' : 'text-[#5A5A56] hover:text-[#3A3A36]'
  }`;
}

export function SiteHeader() {
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? 'bg-[#F8F7F4] shadow-[0_1px_0_0_rgba(58,58,54,0.08)]'
          : 'bg-[#FAFAF8]/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 md:py-7 flex justify-between items-center">
        <Link
          to="/"
          className="font-serif text-[22px] md:text-[26px] text-[#3A3A36]"
          style={{ ...serifHeading, letterSpacing: '0.01em' }}
          onClick={() => setMobileOpen(false)}
        >
          Rasmus Nutzhorn
        </Link>

        <nav className="hidden lg:flex gap-8 xl:gap-12 font-sans">
          {navItems.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[0.5px] bg-[#3A3A36] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden font-sans text-[13px] tracking-[0.08em] uppercase text-[#5A5A56] hover:text-[#3A3A36] transition-colors"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-[#D8D4CE]/60 bg-[#F8F7F4] px-6 py-6 font-sans flex flex-col gap-5">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
