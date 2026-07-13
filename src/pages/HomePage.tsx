import { Link } from 'react-router-dom';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading, serifHeadingMedium } from '@/lib/styles';

const EMAIL = 'mailto:rasmus@alicethetimebender.com';

const careerPillars = [
  {
    title: 'Technology & Innovation',
    text: 'Led technology businesses and helped organisations build innovation labs.',
  },
  {
    title: 'Sustainability & Compliance',
    text: 'Helped organisations embed sustainability into governance, reporting and capability.',
  },
  {
    title: 'Transformation & Leadership',
    text: 'Supported strategic, cultural and operational change.',
  },
  {
    title: 'Stewardship, Succession & Legacy',
    text: 'Helped families prepare future owners and strengthen governance.',
  },
  {
    title: 'Future Thinking & Societal Change',
    text: 'Helping leaders understand deeper technological, social and geopolitical shifts.',
  },
];

const engageCards = [
  {
    title: 'Executive Advisory',
    text: 'Private, high-trust counsel for leaders and family enterprises navigating consequential decisions.',
    to: '/work-with-rasmus',
    external: false,
  },
  {
    title: 'Speaking',
    text: 'Talks and hosted conversations on technology, leadership, sustainability and organisational change.',
    to: EMAIL,
    external: true,
  },
  {
    title: 'Walking with Rasmus',
    text: "Time in nature for the conversations that don't belong inside a meeting room.",
    to: '/walking-with-rasmus',
    external: false,
  },
];

const featuredClients = [
  'Liechtenstein Royal Family',
  'Danish Royal Family',
  'Standard Bank',
  'Blue Water Shipping',
];

const experienceCategories = [
  {
    title: 'Family & Legacy',
    items: ['Ricola', 'Swarovski', 'Kennedy Family', 'Weisse Arena Group', 'Claus Sørensen Foundation'],
  },
  {
    title: 'Global Companies',
    items: ['Unilever', 'Toyota', 'Bayer', 'Novartis', 'Allianz', 'Google'],
  },
  {
    title: 'Institutions & Advisory',
    items: ['UBS', 'ICRC', 'United Nations', 'McKinsey', 'Boston Consulting Group', 'Stockholm Resilience Centre'],
  },
];

function EngageCard({
  title,
  text,
  to,
  external,
}: {
  title: string;
  text: string;
  to: string;
  external: boolean;
}) {
  const cardClass =
    'bg-white/55 backdrop-blur-sm p-10 space-y-4 border border-[#C9BCB0]/50 hover:border-[#4F5D4C]/40 transition-colors duration-300 block h-full';

  if (external) {
    return (
      <a href={to} className={cardClass}>
        <h3 className="font-serif text-2xl text-[#3A3A36]" style={serifHeadingMedium}>
          {title}
        </h3>
        <p className="text-[#3A3A36]/75 font-sans leading-relaxed">{text}</p>
      </a>
    );
  }

  return (
    <Link to={to} className={cardClass}>
      <h3 className="font-serif text-2xl text-[#3A3A36]" style={serifHeadingMedium}>
        {title}
      </h3>
      <p className="text-[#3A3A36]/75 font-sans leading-relaxed">{text}</p>
    </Link>
  );
}

export function HomePage() {
  usePageTitle();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595842427698-2183e9f769d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Two people walking under overcast sky"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.7) brightness(0.72)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 w-full py-20">
          <div className="max-w-[720px] space-y-6">
            <p className="font-sans text-[15px] tracking-[0.03em] text-white/90">
              Founder of Alice the Time Bender. Senior Executive Advisor. Global Speaker.
            </p>
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-[68px] leading-[1.05] text-white"
              style={{ ...serifHeading, letterSpacing: '-0.02em' }}
            >
              Rasmus Nutzhorn
            </h1>
            <p className="font-sans text-lg md:text-[19px] text-white/92 leading-relaxed">
              Most of my work begins with a conversation. Sometimes around a board table. Sometimes over dinner. Sometimes while walking through the mountains.
            </p>
            <p className="font-sans text-base md:text-[17px] text-white/85 leading-relaxed">
              For more than two decades I have worked with leaders, family enterprises and organisations facing significant change, combining technology, organisational transformation, stewardship and long-term thinking with something increasingly rare: time to think clearly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <PrimaryButton to={EMAIL} external>
                Invite Rasmus to Speak
              </PrimaryButton>
              <SecondaryButton to="/walking-with-rasmus" variant="light">
                Walking with Rasmus
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Some Decisions Need More Than Advice */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-[660px] mx-auto space-y-6">
          <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight" style={serifHeading}>
            Some Decisions Need More Than Advice
          </h2>
          <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
            Some problems cannot be solved by another presentation or framework. They need perspective: the kind that comes from experience, honest conversation, and paying attention to what is really happening.
          </p>
          <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
            I work with people carrying responsibility. Together we slow things down enough to understand what matters, what is changing, and what deserves attention before the next decision is made.
          </p>
        </div>
      </section>

      {/* About Rasmus preview */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[400px] md:h-[480px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581614271049-8658315a15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Portrait in natural light"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.45) brightness(0.92) grayscale(0.6)' }}
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight" style={serifHeading}>
              About Rasmus
            </h2>
            <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
              I began my career as a technology entrepreneur and business leader. Over the years my work has expanded across technology, sustainability, organisational transformation, leadership and governance, with family businesses, global organisations, institutions and entrepreneurs, often where complexity is high.
            </p>
            <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
              My perspective has been shaped just as much by time spent inside organisations and listening to people as it has by boardrooms and strategy sessions. Good judgement comes from getting closer to reality.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-[13px] tracking-[0.08em] uppercase text-[#4F5D4C] hover:text-[#3E4A3C] transition-colors"
            >
              Read more about Rasmus →
            </Link>
          </div>
        </div>
      </section>

      {/* Career pillars */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#E6E0D8]">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          <div className="max-w-[900px] space-y-5">
            <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight" style={serifHeading}>
              A Career Spent Preparing Systems for Change
            </h2>
            <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
              Throughout my career I've been drawn to moments when organisations, leaders and families need to adapt to a changing world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[#3A3A36]/10">
            {careerPillars.map(({ title, text }) => (
              <div key={title} className="bg-[#E6E0D8] px-8 py-8 md:px-9 md:py-8">
                <h3 className="font-serif text-xl text-[#3A3A36] mb-2.5" style={serifHeadingMedium}>
                  {title}
                </h3>
                <p className="font-sans text-base text-[#3A3A36]/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Engage */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          <h2
            className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight text-center"
            style={serifHeading}
          >
            Ways to Engage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {engageCards.map((card) => (
              <EngageCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Walking with Rasmus feature */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight" style={serifHeading}>
              Walking with Rasmus
            </h2>
            <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
              Not every important conversation belongs inside a meeting room.
            </p>
            <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
              Walking with Rasmus is an invitation to leave routine behind and spend time together in nature. Every walk is different because every person is different.
            </p>
            <PrimaryButton to="/walking-with-rasmus">Enter Walking with Rasmus</PrimaryButton>
          </div>
          <div className="relative h-[400px] md:h-[480px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1653522446325-715a30a8750e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Foggy forest trail"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.55) brightness(0.85)' }}
            />
          </div>
        </div>
      </section>

      {/* Grounded in Reality */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#D8D1C7] text-center">
        <p
          className="font-serif text-3xl md:text-4xl text-[#3A3A36] leading-snug max-w-3xl mx-auto"
          style={{ ...serifHeading, fontStyle: 'italic' }}
        >
          &ldquo;Ideas matter. Reality matters more. Some of my most valuable work has happened standing in
          factories, travelling supply chains, and sitting quietly with families facing difficult decisions.&rdquo;
        </p>
      </section>

      {/* Selected Experience */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F8F7F4] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight" style={serifHeading}>
              Selected Experience
            </h2>
            <p className="text-[#3A3A36]/60 font-sans text-base italic">
              Names are shared here to help the introduction travel with credibility. We still lead with discretion.
            </p>
          </div>

          <div
            className="border-y border-[#3A3A36]/15 py-7"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
          >
            <div
              className="flex gap-20 w-max"
              style={{ animation: 'rn-marquee 32s linear infinite' }}
            >
              {[...featuredClients, ...featuredClients].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-serif text-2xl text-[#3A3A36]/70 whitespace-nowrap"
                  style={serifHeading}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-14 text-left">
            {experienceCategories.map(({ title, items }) => (
              <div key={title}>
                <h3 className="font-sans text-[13px] tracking-[0.1em] uppercase text-[#3A3A36]/60 font-semibold mb-5">
                  {title}
                </h3>
                <ul className="space-y-0 font-sans text-[17px] leading-[2] text-[#3A3A36]/85 list-none p-0 m-0">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-[#3A3A36]/60 font-sans text-sm italic">
            A track record built across global companies, leading financial institutions, family-owned enterprises and royal families.
          </p>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight" style={serifHeading}>
              Speaking
            </h2>
            <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
              Every audience already has enough information. What they often need is perspective. I speak internationally about technology, leadership, sustainability, organisational transformation and the societal shifts changing business and society.
            </p>
            <SecondaryButton to={EMAIL} external>
              Invite Rasmus to Speak
            </SecondaryButton>
          </div>
          <div className="relative h-[400px] md:h-[480px] overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/speaking-tedx.jpg`}
              alt="Rasmus speaking on stage at TEDx"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%', filter: 'saturate(0.9) brightness(1.02)' }}
            />
          </div>
        </div>
      </section>

      {/* Alice */}
      <section className="py-32 px-6 lg:px-12 bg-[#3A3A36] text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#F8F7F4] leading-tight" style={serifHeading}>
            Alice
          </h2>
          <p className="text-[#F8F7F4]/75 font-sans text-lg leading-relaxed">
            Many of my advisory engagements are delivered through Alice the Time Bender, working quietly with
            family enterprises, founders and organisations on governance, stewardship, succession and
            organisational transformation.
          </p>
          <SecondaryButton to="https://www.alicethetimebender.com" variant="light" external className="mt-2">
            Visit Alice →
          </SecondaryButton>
        </div>
      </section>

      {/* Begin a Conversation */}
      <section className="py-24 md:py-32 px-6 lg:px-14 bg-[#F2EFE9] text-center">
        <h2 className="font-serif text-3xl lg:text-[40px] text-[#3A3A36] leading-tight mb-6" style={serifHeading}>
          Begin a Conversation
        </h2>
        <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed max-w-[620px] mx-auto mb-9">
          I accept a limited number of advisory engagements, speaking invitations and Walking with Rasmus experiences each year. The best relationships usually begin with a conversation.
        </p>
        <PrimaryButton to="/contact">Begin a Conversation</PrimaryButton>
      </section>
    </div>
  );
}
