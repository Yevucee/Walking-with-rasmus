import { Link } from 'react-router-dom';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serifHeading } from '@/lib/styles';

export function AboutPage() {
  usePageTitle('About');

  return (
    <div>
      <section className="py-24 px-6 lg:px-12 bg-[#F2EFE9] border-b border-[#D8D4CE]/40">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight" style={serifHeading}>
            About Rasmus
          </h1>
          <p className="font-sans text-lg text-[#3A3A36]/80 leading-relaxed">
            A fuller introduction to how Rasmus works, and why.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative h-[480px] md:h-[560px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581614271049-8658315a15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Rasmus in natural setting"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.4) brightness(0.9) grayscale(0.75)' }}
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
              <p>
                Rasmus Nutzhorn brings a rare combination of reflection, warmth, discernment, and real-world perspective. He is drawn to the questions that do not yield to quick answers: leadership, stewardship, direction, responsibility, legacy, and the deeper patterns shaping people and institutions.
              </p>
              <p>
                His work is not built on noise or performance. It is built on trust, presence, and the belief that good judgement grows through attention, context, and the courage to face things as they are.
              </p>
              <p>
                Rasmus works with individuals and decision-makers who are navigating complexity, responsibility, transition, and consequence. His approach is thoughtful, human, and deliberately unhurried.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#3A3A36] leading-tight" style={serifHeading}>
            How he works
          </h2>
          <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
            <p>
              Rasmus creates the conditions for clearer thinking, deeper conversation, and better judgement. His work brings together presence, perspective, challenge, and calm — sometimes across a table, sometimes in a room, sometimes while walking through nature.
            </p>
            <p>
              He is attentive to pace. Some conversations need directness. Others need silence first. He does not impose a method so much as hold a setting in which what matters can be seen more honestly.
            </p>
            <p>
              Discretion is central. Much of his work takes place in contexts where trust, judgement, and restraint matter as much as insight.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#E0DCD5]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#3A3A36] leading-tight" style={serifHeading}>
            Why this way of working
          </h2>
          <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
            <p>Rasmus believes that environment shapes thought.</p>
            <p>
              When people leave the usual setting behind, something changes. The body moves. Attention widens. Defences soften. The mind often becomes both clearer and less hurried. Nature helps restore proportion. Silence creates room. Conversation becomes less performative and more real.
            </p>
            <p>
              This is why his work is designed not only around ideas, but around the conditions in which insight can genuinely arise — including{' '}
              <Link to="/walking-with-rasmus" className="text-[#4F5D4C] hover:text-[#3E4A3C] transition-colors">
                Walking with Rasmus
              </Link>
              , his signature experience in extraordinary landscapes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <PrimaryButton to="/contact">Contact Rasmus</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
