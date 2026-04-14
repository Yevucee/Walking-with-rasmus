import { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'bg-[#F8F7F4] shadow-[0_1px_0_0_rgba(58,58,54,0.08)]'
            : 'bg-[#FAFAF8]/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-7 flex justify-between items-center">
          <div
            className="font-serif text-[26px] text-[#3A3A36] cursor-pointer"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              letterSpacing: '0.01em'
            }}
          >
            High Ground
          </div>
          <nav className="hidden md:flex gap-12 font-sans text-[13px] tracking-[0.08em] uppercase">
            <button
              onClick={() => scrollToSection('concept')}
              className="text-[#5A5A56] hover:text-[#3A3A36] transition-all duration-300 relative group font-light"
            >
              The Idea
              <span className="absolute bottom-[-4px] left-0 w-0 h-[0.5px] bg-[#3A3A36] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('landscapes')}
              className="text-[#5A5A56] hover:text-[#3A3A36] transition-all duration-300 relative group font-light"
            >
              Landscapes
              <span className="absolute bottom-[-4px] left-0 w-0 h-[0.5px] bg-[#3A3A36] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#5A5A56] hover:text-[#3A3A36] transition-all duration-300 relative group font-light"
            >
              Rasmus
              <span className="absolute bottom-[-4px] left-0 w-0 h-[0.5px] bg-[#3A3A36] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#5A5A56] hover:text-[#3A3A36] transition-all duration-300 relative group font-light"
            >
              Begin
              <span className="absolute bottom-[-4px] left-0 w-0 h-[0.5px] bg-[#3A3A36] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595842427698-2183e9f769d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Two people walking under overcast sky"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.7) brightness(0.95)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl space-y-8">
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                letterSpacing: '-0.02em'
              }}
            >
              Some clarity arrives before conversation does.
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed">
              Private walking time in extraordinary landscapes for reflection, perspective, and where needed, serious conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-[#4F5D4C] text-white font-sans text-[15px] tracking-wide hover:bg-[#3E4A3C] transition-all duration-300"
              >
                Begin a private conversation
              </button>
              <button
                onClick={() => scrollToSection('landscapes')}
                className="px-8 py-4 bg-transparent border border-white text-white font-sans text-[15px] tracking-wide hover:bg-white/10 transition-all duration-300"
              >
                Explore locations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Idea Section */}
      <section id="concept" className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2
                className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
              >
                Walking changes what becomes possible to think
              </h2>
              <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                <p>
                  Not every meeting needs continuous dialogue.
                </p>
                <p>
                  Sometimes the value lies in movement, quiet attention, shared landscape, and distance from ordinary surroundings.
                </p>
                <p>
                  Some walks are reflective and largely silent. Some become deeply conversational. Some shift naturally between both.
                </p>
                <p>
                  The format allows thought to settle before words are required.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1653522446325-715a30a8750e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
                alt="Foggy forest trail"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.6) brightness(0.9)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Landscapes Section */}
      <section id="landscapes" className="py-32 px-6 lg:px-12 bg-[#E6E0D8]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Switzerland */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1551524164-6cf77f5a8cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
                alt="Alpine ridge and path under soft cloud cover"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.55) brightness(0.86)' }}
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3
                className="font-serif text-3xl lg:text-4xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Switzerland
              </h3>
              <div className="space-y-4 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                <p>
                  High alpine routes, quiet valleys, and strong natural elevation create space for distance, perspective, and calm thought.
                </p>
                <p>
                  The Swiss format is particularly suited to slow progression, reflective walking, and conversations that do not need urgency.
                </p>
              </div>
            </div>
          </div>

          {/* Scottish Highlands */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3
                className="font-serif text-3xl lg:text-4xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Scottish Highlands
              </h3>
              <div className="space-y-4 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                <p>
                  A slower, quieter terrain shaped by weather, rhythm, and solitude.
                </p>
                <p>
                  Particularly suited to reflective walking and conversations that do not need urgency.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1635738361668-556748ba02ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
                alt="Scottish Highlands under cloudy sky"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.55) brightness(0.88)' }}
              />
            </div>
          </div>

          {/* Canadian Rockies */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1686871793395-d5b06486c8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
                alt="Mountain path under overcast sky"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.6) brightness(0.85)' }}
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3
                className="font-serif text-3xl lg:text-4xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Canadian Rockies
              </h3>
              <div className="space-y-4 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                <p>
                  Long-form walking in open mountain space. Distance, altitude, and scale create unusual clarity.
                </p>
                <p>
                  Best suited for full-day or multi-day formats where decisions benefit from perspective and uninterrupted time.
                </p>
              </div>
            </div>
          </div>

          {/* South African Wilderness */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3
                className="font-serif text-3xl lg:text-4xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                South African Wilderness
              </h3>
              <div className="space-y-4 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                <p>
                  A carefully guided multi-day format in protected bush environments, accompanied by professional ranger support.
                </p>
                <p>
                  Walking between camps or lodges creates long stretches of grounded thought, heightened awareness, and rare distance from normal life.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595652973888-c5677816f6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
                alt="African savanna at dusk"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.5) brightness(0.82)' }}
              />
            </div>
          </div>

          <p className="text-center text-[#3A3A36]/60 font-sans text-sm mt-12 italic">
            Always professionally guided and privately structured.
          </p>
        </div>
      </section>

      {/* Different Rhythms Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight text-center mb-16"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
          >
            Each format follows a different rhythm
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <h4
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Quiet
              </h4>
              <p className="text-[#3A3A36]/80 font-sans leading-relaxed">
                Walking without pressure to speak.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h4
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Reflection
              </h4>
              <p className="text-[#3A3A36]/80 font-sans leading-relaxed">
                Time for thought, pause, observation.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h4
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Conversation
              </h4>
              <p className="text-[#3A3A36]/80 font-sans leading-relaxed">
                When useful, serious discussion emerges naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Practically Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#E0DCD5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 p-8 border-l-2 border-[#4F5D4C]">
              <h4
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Before
              </h4>
              <p className="text-[#3A3A36]/80 font-sans leading-relaxed">
                A private preparation exchange defines intention.
              </p>
            </div>

            <div className="space-y-4 p-8 border-l-2 border-[#4F5D4C]">
              <h4
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                During
              </h4>
              <p className="text-[#3A3A36]/80 font-sans leading-relaxed">
                Walking, silence, conversation, pauses, meals.
              </p>
            </div>

            <div className="space-y-4 p-8 border-l-2 border-[#4F5D4C]">
              <h4
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                After
              </h4>
              <p className="text-[#3A3A36]/80 font-sans leading-relaxed">
                A clearer sense of next steps, often without forcing conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Suits Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
          >
            For people carrying decisions, transitions, or questions that do not fit ordinary rooms
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-[#3A3A36]/80 font-sans text-lg">
            <span>founders</span>
            <span className="text-[#8A9583]">•</span>
            <span>family owners</span>
            <span className="text-[#8A9583]">•</span>
            <span>investors</span>
            <span className="text-[#8A9583]">•</span>
            <span>senior executives</span>
            <span className="text-[#8A9583]">•</span>
            <span>individuals in transition</span>
          </div>
        </div>
      </section>

      {/* Silence Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#D8D1C7]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p
            className="font-serif text-3xl md:text-4xl text-[#3A3A36] leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic' }}
          >
            Silence is not absence in this format.
          </p>
          <p
            className="font-serif text-3xl md:text-4xl text-[#3A3A36] leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic' }}
          >
            It is often where the useful part begins.
          </p>
        </div>
      </section>

      {/* About Rasmus Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative h-[600px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581614271049-8658315a15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
                alt="Rasmus in natural setting"
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: 'saturate(0.4) brightness(0.9) grayscale(0.8)' }}
              />
            </div>
            <div className="space-y-8">
              <h2
                className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
              >
                About Rasmus
              </h2>
              <div className="space-y-6 text-[#3A3A36]/80 font-sans text-lg leading-relaxed">
                <p>
                  Rasmus works with people and organisations where judgement, trust, and perspective matter.
                </p>
                <p>
                  This format creates a different setting for time that should not feel transactional.
                </p>
                <p>
                  The emphasis is not performance, but quality of thought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Formats Section */}
      <section id="formats" className="py-32 px-6 lg:px-12 bg-[#E0DCD5] relative">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #3A3A36 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto relative">
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight text-center mb-16"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
          >
            Different formats, different depth
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-white/55 backdrop-blur-sm p-10 space-y-5 border border-[#C9BCB0]/50">
              <h3
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Half day
              </h3>
              <div className="space-y-4 text-[#3A3A36]/75 font-sans leading-relaxed">
                <p>
                  A shorter format designed for focused time away from ordinary surroundings.
                </p>
                <p>
                  Usually local terrain, selected for ease, rhythm, and enough distance for thought to settle naturally.
                </p>
              </div>
            </div>

            <div className="bg-white/55 backdrop-blur-sm p-10 space-y-5 border border-[#C9BCB0]/50">
              <h3
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Full day
              </h3>
              <div className="space-y-4 text-[#3A3A36]/75 font-sans leading-relaxed">
                <p>
                  A slower progression where movement, pauses, and conversation develop without pressure.
                </p>
                <p>
                  Often the most balanced format for reflection and useful perspective.
                </p>
              </div>
            </div>

            <div className="bg-white/55 backdrop-blur-sm p-10 space-y-5 border border-[#C9BCB0]/50">
              <h3
                className="font-serif text-2xl text-[#3A3A36]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                Multi-day immersion
              </h3>
              <div className="space-y-4 text-[#3A3A36]/75 font-sans leading-relaxed">
                <p>
                  For situations where distance itself matters.
                </p>
                <p>
                  This may involve mountain terrain, remote walking routes, or carefully guided wilderness movement over several days.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-[#3A3A36]/60 font-sans text-sm mt-16 italic">
            Format, location, and pace are always discussed privately.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-[#F2EFE9]">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2
                className="font-serif text-4xl lg:text-5xl text-[#3A3A36] leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
              >
                Begin privately
              </h2>
              <p className="text-[#3A3A36]/70 font-sans text-lg">
                The first exchange remains exploratory and confidential.
              </p>
            </div>

            <form
              className="space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[#3A3A36] font-sans text-sm tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-[#D8D4CE] bg-white text-[#3A3A36] font-sans focus:outline-none focus:border-[#4F5D4C] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[#3A3A36] font-sans text-sm tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#D8D4CE] bg-white text-[#3A3A36] font-sans focus:outline-none focus:border-[#4F5D4C] transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="context"
                  className="block text-[#3A3A36] font-sans text-sm tracking-wide"
                >
                  Short context
                </label>
                <textarea
                  id="context"
                  rows={6}
                  className="w-full px-4 py-3 border border-[#D8D4CE] bg-white text-[#3A3A36] font-sans focus:outline-none focus:border-[#4F5D4C] transition-colors duration-300 resize-none"
                  placeholder="Please share a brief context for your enquiry"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#4F5D4C] text-white font-sans text-[15px] tracking-wide hover:bg-[#3E4A3C] transition-all duration-300"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-[#E6E0D8] border-t border-[#D8D4CE]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#3A3A36]/50 font-sans text-sm">
            © 2026 High Ground. Private advisory conversations.
          </p>
        </div>
      </footer>
    </div>
  );
}