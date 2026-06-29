import { Link } from 'react-router-dom';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading, serifHeadingMedium } from '@/lib/styles';

const workSections = [
  {
    title: 'Strategic conversations',
    paragraphs: [
      'Private, high-trust conversations for people facing difficult choices, transitions, or questions of leadership, direction, and responsibility.',
      'These engagements are unhurried and confidential. The aim is not to supply answers, but to help you see clearly, weigh what matters, and move with greater steadiness.',
    ],
  },
  {
    title: 'Advisory support',
    paragraphs: [
      'For principals, founders, and senior leaders navigating complexity — ownership, governance, succession, culture, or long-horizon responsibility.',
      'Support may be focused or ongoing, always shaped around the person and the situation rather than a fixed programme.',
    ],
  },
  {
    title: 'Speaking and hosted conversations',
    paragraphs: [
      'Selected talks, hosted conversations, and intimate gatherings that invite reflection, perspective, and a deeper quality of exchange.',
      'These formats are chosen carefully and are designed to create room for thought, not performance.',
    ],
  },
  {
    title: 'Bespoke engagements',
    paragraphs: [
      'Some situations call for a format that does not fit a standard category — a private walk, a series of conversations, a retreat, or a carefully designed encounter.',
      'If you are unsure how to begin, a first conversation is often enough to find the right shape.',
    ],
  },
];

export function WorkWithRasmusPage() {
  usePageTitle('Work with Rasmus');

  return (
    <div>
      <section className="py-24 px-6 lg:px-12 bg-[#F2EFE9] border-b border-[#D8D4CE]/40">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Work with Rasmus
          </h1>
          <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
            How to engage beyond the walk — with clarity, discretion, and the right pace.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto space-y-20">
          {workSections.map(({ title, paragraphs }) => (
            <div
              key={title}
              className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-[#D8D4CE]/50 pb-20 last:border-0 last:pb-0"
            >
              <h2
                className="md:col-span-4 font-serif text-2xl lg:text-3xl text-[#3A3A36]"
                style={serifHeadingMedium}
              >
                {title}
              </h2>
              <div className="md:col-span-8 space-y-4 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#E6E0D8]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-[#3A3A36]/75 font-sans text-lg leading-relaxed">
            For the signature walking experience, see{' '}
            <Link to="/walking-with-rasmus" className="text-[#4F5D4C] hover:text-[#3E4A3C] transition-colors">
              Walking with Rasmus
            </Link>
            .
          </p>
          <PrimaryButton to="/contact">Contact Rasmus</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
