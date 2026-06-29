type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = 'bg-[#F8F7F4]', id }: SectionProps) {
  return (
    <section id={id} className={`py-32 px-6 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
