import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work-with-rasmus', label: 'Work with Rasmus' },
  { to: '/walking-with-rasmus', label: 'Walking with Rasmus' },
  { to: '/contact', label: 'Contact' },
];

export function SiteFooter() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-[#E6E0D8] border-t border-[#D8D4CE]">
      <div className="max-w-7xl mx-auto space-y-8">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-[13px] tracking-[0.06em] uppercase">
          {footerLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-[#3A3A36]/60 hover:text-[#3A3A36] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-[#3A3A36]/50 font-sans text-sm">
          © {new Date().getFullYear()} Rasmus Nutzhorn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
