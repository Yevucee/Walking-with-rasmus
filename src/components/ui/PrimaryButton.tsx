import { Link } from 'react-router-dom';

type PrimaryButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function PrimaryButton({ to, children, className = '', external }: PrimaryButtonProps) {
  const classes = `inline-block px-8 py-4 bg-[#4F5D4C] text-white font-sans text-[15px] tracking-wide hover:bg-[#3E4A3C] transition-all duration-300 text-center ${className}`;

  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
