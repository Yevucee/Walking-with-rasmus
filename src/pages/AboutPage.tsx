import { Link } from 'react-router-dom';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading } from '@/lib/styles';

const EMAIL = 'mailto:rasmus@alicethetimebender.com';

const careerThread = [
  'Technology',
  'Innovation',
  'Transformation',
  'Sustainability',
  'Stewardship',
  'Walking',
] as const;

export function AboutPage() {
  usePageTitle('About');

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-[760px] mx-auto space-y-6">
          <h1
            className="font-serif text-3xl sm:text-4xl lg:text-[52px] text-[#3A3A36] leading-tight"
            style={serifHeading}
          >
            The Journey.
          </h1>
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed">
            <p>
              I did not set out to build a career around advice. I set out to build companies, teams, and ideas,
              and to understand how organisations respond when the world around them shifts.
            </p>
            <p>
              Over time, the work changed shape. What stayed with me was change itself: how leaders see it, how
              families carry it, and how institutions adapt or gradually fall out of step with reality.
            </p>
          </div>
        </div>
      </section>

      {/* It began with technology */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight mb-2"
              style={serifHeading}
            >
              It began with technology
            </h2>
            <p>
              My early years were spent inside technology businesses, building, leading, and learning what it
              takes to move fast without losing coherence. Innovation labs, new ventures, and the practical work
              of making ideas real.
            </p>
            <p>
              Technology was never an end in itself. It was a way of seeing how quickly assumptions become
              obsolete, and how rarely organisations notice until something breaks.
            </p>
          </div>
          <div className="relative h-[280px] sm:h-[360px] md:h-[480px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Workspace suggesting technology and strategy"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.5) brightness(0.88) grayscale(0.35)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Change became the real subject */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-[660px] mx-auto space-y-5 text-center">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
            style={serifHeading}
          >
            Change became the real subject
          </h2>
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed text-left sm:text-center">
            <p>
              The more I worked across sectors, the clearer it became that the hardest problems were rarely
              technical. They were human: leadership under pressure, culture resisting what strategy demands,
              families trying to prepare for a future they cannot fully control.
            </p>
            <p>
              I found myself drawn to those moments: when an organisation, a leader, or a family needs to
              adapt, and the cost of getting it wrong is measured in years, not quarters.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial quote 1 */}
      <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 lg:px-14 bg-[#3A3A36] text-center">
        <p
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#F8F7F4] leading-snug max-w-4xl mx-auto"
          style={serifHeading}
        >
          Technology taught me about change. People taught me how difficult change really is.
        </p>
      </section>

      {/* Building organisations that last */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="relative h-[280px] sm:h-[360px] md:h-[480px] overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1653522446325-715a30a8750e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Old-growth forest in muted light"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.55) brightness(0.85)' }}
              loading="lazy"
            />
          </div>
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed order-1 md:order-2">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight mb-2"
              style={serifHeading}
            >
              Building organisations that last
            </h2>
            <p>
              Sustainability, compliance, governance, stewardship. These words can sound administrative until you
              sit with a family enterprise facing succession, or an institution whose legitimacy depends on
              getting the next decade right.
            </p>
            <p>
              Much of my work in these years was about putting long-term thinking into structures that prefer
              short-term certainty: reporting systems, board conversations, capability, and the quiet work of
              preparing the next generation to carry responsibility well.
            </p>
          </div>
        </div>
      </section>

      {/* Why walking? */}
      <section className="relative min-h-[72svh] md:min-h-[82vh] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/rasmus-hero.png`}
            alt="Mountain landscape under overcast sky"
            className="w-full h-full object-cover object-[center_35%] sm:object-center"
            style={{ filter: 'saturate(0.65) brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-14 w-full pb-14 sm:pb-16 md:pb-20 pt-24">
          <div className="max-w-[620px] space-y-5">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight"
              style={serifHeading}
            >
              Why walking?
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed">
              At a certain point I noticed that the conversations that mattered most rarely happened in the
              settings designed for them. They happened while moving, when the body was engaged, the agenda had
              dropped away, and there was space to think.
            </p>
            <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed">
              That observation became{' '}
              <Link
                to="/walking-with-rasmus"
                className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white/70 transition-colors"
              >
                Walking with Rasmus
              </Link>
              , a way to make room for reflection and dialogue that does not fit inside a meeting room.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial quote 2 */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#E0DCD5] text-center">
        <p
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3A3A36] leading-snug max-w-3xl mx-auto"
          style={{ ...serifHeading, fontStyle: 'italic' }}
        >
          The best conversations rarely happened because of the room. They happened because people finally
          had space to think.
        </p>
      </section>

      {/* One thread running through it all */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          <div className="max-w-[660px] mx-auto space-y-5 text-center">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight"
              style={serifHeading}
            >
              One thread running through it all
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed text-left sm:text-center">
              There is no single job title that captures this path. What connects the work is a recurring
              question: how do people and institutions prepare for what comes next, and who helps them see
              clearly enough to act with judgement?
            </p>
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4 font-serif text-lg sm:text-xl md:text-2xl text-[#3A3A36]"
            style={serifHeading}
            aria-label="Career progression: Technology, Innovation, Transformation, Sustainability, Stewardship, Walking"
          >
            {careerThread.map((label, index) => (
              <span key={label} className="inline-flex items-center gap-x-3 sm:gap-x-4">
                {index > 0 && (
                  <span className="text-[#8A9583] font-sans text-base sm:text-lg" aria-hidden="true">
                    →
                  </span>
                )}
                <span
                  className={
                    label === 'Walking'
                      ? 'italic text-[#4F5D4C]'
                      : undefined
                  }
                >
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Looking ahead */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#F2EFE9]">
        <div className="max-w-[660px] mx-auto space-y-8 text-center">
          <div className="space-y-5 font-sans text-base sm:text-lg text-[#3A3A36]/80 leading-relaxed text-left sm:text-center">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#3A3A36] leading-tight text-center"
              style={serifHeading}
            >
              Looking ahead
            </h2>
            <p>
              The contexts change. Technology, geopolitics, climate, generational transition. The need for
              clear thinking does not. I continue to work with leaders, families, and institutions where the
              stakes are real and the answers are rarely obvious.
            </p>
            <p>
              Some of that work happens through advisory relationships, speaking, and engagements via Alice.
              Some of it happens on a path, in silence, or over a table where there is time to listen properly.
            </p>
          </div>
          <p
            className="font-serif text-xl sm:text-2xl md:text-[28px] text-[#3A3A36]/90 leading-snug pt-2"
            style={{ ...serifHeading, fontStyle: 'italic' }}
          >
            The format has never mattered very much. The relationship always has.
          </p>
        </div>
      </section>

      {/* Begin a Conversation */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 lg:px-14 bg-[#E6E0D8] text-center">
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <PrimaryButton to={EMAIL} external>
            Begin a Conversation
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}
