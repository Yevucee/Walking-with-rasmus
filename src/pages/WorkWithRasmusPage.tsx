import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading } from '@/lib/styles';

const EMAIL = 'mailto:rasmus@alicethetimebender.com';

export function WorkWithRasmusPage() {
  usePageTitle('Working Together');

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <div className="max-w-[900px] space-y-5">
            <h1
              className="font-serif text-3xl sm:text-4xl lg:text-[52px] text-[#3A3A36] leading-tight"
              style={serifHeading}
            >
              Working Together.
            </h1>
            <p
              className="font-serif text-xl sm:text-2xl md:text-[28px] text-[#3A3A36]/85 leading-snug"
              style={{ ...serifHeading, fontStyle: 'italic' }}
            >
              Most enquiries begin by asking what I offer. The more useful question is whether we are facing
              something that deserves real attention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 max-w-5xl">
            <div className="space-y-4">
              <p className="font-sans text-[13px] tracking-[0.1em] uppercase text-[#3A3A36]/55 font-semibold">
                The wrong question
              </p>
              <p className="font-sans text-base sm:text-lg text-[#3A3A36]/75 leading-relaxed">
                What service do you provide? Which format should we choose? Can you deliver a programme, a
                framework, or a defined outcome on a fixed timeline?
              </p>
            </div>
            <div className="space-y-4 md:border-l md:border-[#C9BCB0]/60 md:pl-16 lg:pl-20">
              <p className="font-sans text-[13px] tracking-[0.1em] uppercase text-[#4F5D4C] font-semibold">
                The right question
              </p>
              <p className="font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed">
                What is actually at stake? What kind of thinking is missing? And is this the right moment for a
                relationship built on trust, discretion, and clarity rather than a transaction?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Every relationship begins differently */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-[700px] mx-auto space-y-6 text-center">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
            style={serifHeading}
          >
            Every relationship begins differently
          </h2>
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed text-left sm:text-center">
            <p>
              Some begin with a speaking invitation. Others with a quiet request for counsel. Some arrive through
              a walk. Others through a long-standing introduction where trust already exists.
            </p>
            <p>
              There is no standard entry point and no single path. What matters is whether the situation calls for
              perspective, judgement, and time to think — and whether we are the right people to do that work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Guiding-principle quote */}
      <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-14 bg-[#3A3A36] text-center">
        <p
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#F8F7F4] leading-snug max-w-4xl mx-auto"
          style={serifHeading}
        >
          People don&apos;t engage Rasmus because he offers a particular service. They engage him because they
          value the way he helps them think.
        </p>
      </section>

      {/* Advisory */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
              style={serifHeading}
            >
              Advisory
            </h2>
            <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed">
              <p>
                For deeper strategic, governance, and organisational work, many of my advisory engagements are
                delivered through Alice the Time Bender — working quietly with family enterprises, founders, and
                institutions on stewardship, succession, and long-horizon transformation.
              </p>
              <p>
                This work is unhurried, confidential, and shaped around the person and the situation — not a fixed
                programme or a catalogue of deliverables.
              </p>
            </div>
            <SecondaryButton to="https://www.alicethetimebender.com" external>
              Visit Alice →
            </SecondaryButton>
          </div>
          <div className="relative h-[280px] sm:h-[360px] md:h-[480px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581614271049-8658315a15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Portrait in natural light"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.45) brightness(0.92) grayscale(0.6)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="relative h-[280px] sm:h-[360px] md:h-[480px] overflow-hidden order-2 md:order-1">
            <img
              src={`${import.meta.env.BASE_URL}images/speaking-tedx.jpg`}
              alt="Rasmus speaking on stage at TEDx"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%', filter: 'saturate(0.9) brightness(1.02)' }}
              loading="lazy"
            />
          </div>
          <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
              style={serifHeading}
            >
              Speaking
            </h2>
            <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed">
              <p>
                Every audience already has enough information. What they often need is perspective — on technology,
                leadership, sustainability, organisational change, and the deeper shifts reshaping business and
                society.
              </p>
              <p>
                Talks and hosted conversations are chosen carefully. The aim is not performance, but room for
                thought.
              </p>
            </div>
            <SecondaryButton to={EMAIL} external>
              Invite Rasmus to Speak
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Walking with Rasmus */}
      <section className="relative min-h-[72svh] md:min-h-[78vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1653522446325-715a30a8750e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Foggy forest trail"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.55) brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-14 w-full py-16 sm:py-20">
          <div className="max-w-[620px] space-y-6">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight"
              style={serifHeading}
            >
              Walking with Rasmus
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed">
              Not every important conversation belongs inside a meeting room. Walking with Rasmus is an invitation
              to leave routine behind and spend time together in nature — where movement, silence, and landscape
              create the conditions for clearer thought.
            </p>
            <SecondaryButton to="/walking-with-rasmus" variant="light">
              Enter Walking with Rasmus
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Closing pull-quote */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#E0DCD5] text-center">
        <p
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3A3A36] leading-snug max-w-3xl mx-auto"
          style={{ ...serifHeading, fontStyle: 'italic' }}
        >
          The format is rarely the important part. The conversation usually is.
        </p>
      </section>

      {/* Long-term relationships */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-[700px] mx-auto space-y-6 text-center">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
            style={serifHeading}
          >
            Long-term relationships
          </h2>
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed text-left sm:text-center">
            <p>
              Some engagements are a single conversation at a decisive moment. Others unfold over years — as
              circumstances change, responsibility deepens, and trust is tested in quieter ways.
            </p>
            <p>
              I work with a limited number of people and organisations at any time. The relationships that last
              are built on discretion, honest attention, and the willingness to return to what matters before the
              next decision is made.
            </p>
          </div>
        </div>
      </section>

      {/* Stream image break */}
      <section className="relative min-h-[50svh] md:min-h-[65vh] overflow-hidden" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}images/rasmus-stream.png`}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.75) brightness(0.88)' }}
          loading="lazy"
        />
      </section>

      {/* The First Conversation */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#E6E0D8] text-center">
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
            style={serifHeading}
          >
            The First Conversation
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed">
            If you are considering an advisory relationship, a speaking invitation, or a Walking with Rasmus
            experience, the best place to begin is usually a conversation. All initial exchanges are treated with
            discretion.
          </p>
          <PrimaryButton to={EMAIL} external>
            Begin a Conversation
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}
