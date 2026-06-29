import { Link } from 'react-router-dom';

type SecondaryButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
};

export function SecondaryButton({
  to,
  children,
  className = '',
  variant = 'dark',
}: SecondaryButtonProps) {
  const variantClasses =
    variant === 'light'
      ? 'bg-transparent border border-white text-white hover:bg-white/10'
      : 'bg-transparent border border-[#4F5D4C] text-[#4F5D4C] hover:bg-[#4F5D4C]/5';

  return (
    <Link
      to={to}
      className={`inline-block px-8 py-4 font-sans text-[15px] tracking-wide transition-all duration-300 text-center ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
