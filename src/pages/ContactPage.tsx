import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading } from '@/lib/styles';

const enquiryTypes = [
  'A private walk or multi-day walking format',
  'A strategic or leadership conversation',
  'A speaking engagement or hosted gathering',
  'A bespoke engagement not yet defined',
];

export function ContactPage() {
  usePageTitle('Contact');

  return (
    <div>
      <section className="py-24 px-6 lg:px-12 bg-[#F2EFE9] border-b border-[#D8D4CE]/40">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Get in touch
          </h1>
          <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
            If you are considering a walk, a conversation, a gathering, or another form of engagement, you are welcome to reach out. Some engagements are straightforward. Others begin with a conversation.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-2xl mx-auto space-y-12 text-center">
          <div className="space-y-4">
            <p className="font-sans text-[#3A3A36]/70 text-sm tracking-[0.08em] uppercase">
              Email
            </p>
            <a
              href="mailto:rasmus@alicethetimebender.com"
              className="font-serif text-2xl md:text-3xl text-[#3A3A36] hover:text-[#4F5D4C] transition-colors duration-300"
              style={serifHeading}
            >
              rasmus@alicethetimebender.com
            </a>
          </div>

          <PrimaryButton to="mailto:rasmus@alicethetimebender.com" external>
            Send an email
          </PrimaryButton>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#E6E0D8]">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl text-[#3A3A36] text-center" style={serifHeading}>
            Enquiries welcomed
          </h2>
          <ul className="space-y-4 font-sans text-[#3A3A36]/80 leading-relaxed">
            {enquiryTypes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#8A9583] shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-[#3A3A36]/60 font-sans text-sm italic pt-4">
            All initial exchanges are treated with discretion.
          </p>
        </div>
      </section>
    </div>
  );
}
