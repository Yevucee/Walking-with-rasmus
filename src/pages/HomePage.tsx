import { Link } from 'react-router-dom';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading, serifHeadingMedium } from '@/lib/styles';

const engageCards = [
  {
    title: 'Walking with Rasmus',
    text: 'A distinctive experience of nature, movement, silence, and conversation. For those who want to step out of the usual setting and think more clearly in the presence of the natural world.',
    to: '/walking-with-rasmus',
  },
  {
    title: 'Strategic Conversations',
    text: 'Private, high-trust conversations for people facing difficult choices, transitions, or questions of leadership, direction, and responsibility.',
    to: '/work-with-rasmus',
  },
  {
    title: 'Speaking and Gatherings',
    text: 'Selected talks, hosted conversations, and intimate gatherings that invite reflection, perspective, and a deeper quality of exchange.',
    to: '/work-with-rasmus',
  },
];

const credibilityBlocks = [
  {
    title: 'Families and legacy',
    text: 'Work with family enterprises, legacy-minded principals, and multigenerational contexts where continuity, governance, succession, and stewardship are central.',
  },
  {
    title: 'Global companies',
    text: 'Experience with major international businesses on questions touching strategy, leadership, culture, governance, and long-horizon responsibility.',
  },
  {
    title: 'Institutions and advisory environments',
    text: 'Trusted work within financial, advisory, and international institutional settings where judgement, discretion, and clarity are essential.',
  },
  {
    title: 'Long-trust engagements',
    text: 'From focused assignments to relationships lasting several years, with work ranging across ownership, board, leadership, and operating environments.',
  },
];

export function HomePage() {
  usePageTitle();

  return (
    <div>
      <section className="relative min-h-[calc(100svh-72px)] md:min-h-[calc(100svh-88px)] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595842427698-2183e9f769d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Two people walking under overcast sky"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.65) brightness(0.92)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
          <div className="max-w-3xl space-y-8">
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
              style={{ ...serifHeading, letterSpacing: '-0.02em' }}
            >
              Rasmus Nutzhorn
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-white/95 leading-snug" style={serifHeading}>
              A trusted companion for leaders, founders, stewards, and people carrying weight.
            </p>
            <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Rasmus creates the conditions for clearer thinking, deeper conversation, and better judgement. His work brings together presence, perspective, challenge, and calm. Sometimes across a table. Sometimes in a room. Sometimes while walking through nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton to="/walking-with-rasmus">Explore Walking with Rasmus</PrimaryButton>
              <SecondaryButton to="/work-with-rasmus" variant="light">
                Work with Rasmus
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-3xl mx-auto space-y-8 text-center md:text-left">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Some conversations need more than advice.
          </h2>
          <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
            <p>They need space, attention, honesty, and the right pace.</p>
            <p>
              Rasmus works with individuals and decision-makers who are navigating complexity, responsibility, transition, and consequence. His approach is thoughtful, human, and deliberately unhurried. He helps people think clearly, see what matters, and move with greater steadiness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[420px] md:h-[520px] overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1581614271049-8658315a15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Portrait in natural light"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.45) brightness(0.9) grayscale(0.7)' }}
            />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
              About Rasmus
            </h2>
            <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
              <p>
                Rasmus Nutzhorn brings a rare combination of reflection, warmth, discernment, and real-world perspective. He is drawn to the questions that do not yield to quick answers: leadership, stewardship, direction, responsibility, legacy, and the deeper patterns shaping people and institutions.
              </p>
              <p>
                His work is not built on noise or performance. It is built on trust, presence, and the belief that good judgement grows through attention, context, and the courage to face things as they are.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block font-sans text-[13px] tracking-[0.08em] uppercase text-[#4F5D4C] hover:text-[#3E4A3C] transition-colors"
            >
              Read more about Rasmus →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#E6E0D8]">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight text-center"
            style={serifHeading}
          >
            Ways to engage
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {engageCards.map(({ title, text, to }) => (
              <Link
                key={title}
                to={to}
                className="bg-white/55 backdrop-blur-sm p-10 space-y-5 border border-[#C9BCB0]/50 hover:border-[#4F5D4C]/40 transition-colors duration-300 block"
              >
                <h3 className="font-serif text-2xl text-[#3A3A36]" style={serifHeadingMedium}>
                  {title}
                </h3>
                <p className="text-[#3A3A36]/75 font-sans leading-relaxed">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
              Walking with Rasmus
            </h2>
            <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
              <p>Not every important conversation should happen in a meeting room.</p>
              <p>
                Walking with Rasmus is a chance to step away from routine and enter a different quality of attention. In nature, conversation changes. Silence becomes useful. Thoughts settle. What matters often becomes easier to see.
              </p>
              <p>
                A walk may include conversation, long stretches of quiet, shared reflection, or all three. It is not a performance and not a formula. It is a space in which presence, place, and pace allow something more honest to emerge.
              </p>
              <p>
                For some, it is a personal experience. For others, it is a strategic one. It can be a private engagement, a hosted encounter, or part of a wider relationship.
              </p>
            </div>
            <PrimaryButton to="/walking-with-rasmus">Enter Walking with Rasmus</PrimaryButton>
          </div>
          <div className="relative h-[480px] md:h-[560px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1653522446325-715a30a8750e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Foggy forest trail"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.55) brightness(0.88)' }}
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Why this way of working
          </h2>
          <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
            <p>Rasmus believes that environment shapes thought.</p>
            <p>
              When people leave the usual setting behind, something changes. The body moves. Attention widens. Defences soften. The mind often becomes both clearer and less hurried. Nature helps restore proportion. Silence creates room. Conversation becomes less performative and more real.
            </p>
            <p>
              This is why his work is designed not only around ideas, but around the conditions in which insight can genuinely arise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#E0DCD5]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
              Selected Experience
            </h2>
            <p className="text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
              Rasmus has worked alongside prominent families, family-owned enterprises, global companies, and leading institutions, often in settings where discretion matters as much as capability.
            </p>
            <p className="text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
              His experience spans questions of continuity, governance, stewardship, reputation, organisational judgement, and the careful handling of change.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {credibilityBlocks.map(({ title, text }) => (
              <div
                key={title}
                className="bg-white/55 backdrop-blur-sm p-10 space-y-4 border border-[#C9BCB0]/50"
              >
                <h3 className="font-serif text-xl text-[#3A3A36]" style={serifHeadingMedium}>
                  {title}
                </h3>
                <p className="text-[#3A3A36]/75 font-sans leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#3A3A36]/60 font-sans text-sm italic">
            Further detail is shared privately where relevant.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F8F7F4] border-y border-[#D8D4CE]/40">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Broader engagements
          </h2>
          <p className="text-[#3A3A36]/75 font-sans text-lg leading-relaxed">
            For broader strategic, research, and organisational work, Rasmus also works through Alice.
          </p>
          <p className="text-[#3A3A36]/70 font-sans leading-relaxed">
            Where this site is centred on Rasmus himself and selected ways of engaging with him, Alice is the wider platform for structured services, deeper project work, and broader client engagements.
          </p>
          <PrimaryButton to="https://www.alicethetimebender.com" external className="mt-2">
            Visit Alice
          </PrimaryButton>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Get in touch
          </h2>
          <div className="space-y-4 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
            <p>
              If you are considering a walk, a conversation, a gathering, or another form of engagement, you are welcome to reach out.
            </p>
            <p>Some engagements are straightforward. Others begin with a conversation.</p>
          </div>
          <PrimaryButton to="/contact">Contact Rasmus</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
