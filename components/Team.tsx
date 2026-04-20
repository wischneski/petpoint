import React, { useRef, useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Globe, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const team = [
  {
    name: "Dra. Nathalia",
    role: "Anestesia e Clínica Geral",
    image: "/images/team/nat.webp",
    specialty: "Anestesia e Clínica Geral",
    crmv: "CRMV-SC 14519",
  },
  {
    name: "Dr. Vinicius Wischneski",
    role: "Diretor Clínico",
    image: "/images/team/vini.webp",
    specialty: "Oncologia e Cirurgia de pequenos animais",
    crmv: "CRMV-SC 8434",
  },
  {
    name: "Dra. Larissa Wischneski",
    role: "Odontologia Veterinária",
    image: "/images/team/larissa.webp",
    specialty: "Odontologia e Clínica Geral",
    crmv: undefined,
  },
  {
    name: "Maria Eduarda Tuon",
    role: "Recepção",
    image: "/images/team/duda.webp",
    specialty: "Atendimento ao cliente",
    crmv: undefined,
  },
  {
    name: "Valéria",
    role: "Loja e Pet Shop",
    image: "/images/team/val.webp",
    specialty: "Atendimento e vendas",
    crmv: undefined,
  },
  {
    name: "Gustavo",
    role: "Loja e Pet Shop",
    image: "/images/team/gustavo.webp",
    specialty: "Atendimento e vendas",
    crmv: undefined,
  },
  {
    name: "Ana Carolina",
    role: "Loja e Pet Shop",
    image: "/images/team/ana-carolina.webp",
    specialty: "Atendimento e vendas",
    crmv: undefined,
  },
];

const CARD_WIDTH = 320;
const GAP = 16;

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? CARD_WIDTH + GAP : -(CARD_WIDTH + GAP), behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-brand-900 relative overflow-hidden below-fold">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(32,58,143,0.20) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(207,46,120,0.10) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <Reveal>
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">Nossa Equipe</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Mãos que cuidam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">com amor e técnica.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col items-end gap-6">
              <p className="text-white/50 text-lg max-w-sm leading-relaxed">
                Profissionais apaixonados por animais, com formação especializada e dedicação total ao bem-estar dos seus pets.
              </p>
              {/* Navigation arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all duration-200 hover:border-white/40"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all duration-200 hover:border-white/40"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={150} width="100%">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="region"
            aria-label="Carrossel da Equipe"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') scroll('right');
              if (e.key === 'ArrowLeft') scroll('left');
            }}
          >
            {team.map((member, idx) => {
              const isRevealed = activeIdx === idx || hoverIdx === idx;
              return (
                <div
                  key={idx}
                  className="shrink-0"
                  style={{ width: CARD_WIDTH, scrollSnapAlign: 'start' }}
                >
                  <div
                    className="relative h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                    onMouseEnter={() => setHoverIdx(idx)}
                    onMouseLeave={() => setHoverIdx(null)}
                  >
                    {/* Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={800}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      style={{
                        filter: isRevealed ? 'brightness(1)' : 'blur(4px) brightness(0.6)',
                        transform: isRevealed ? 'scale(1.08)' : 'scale(1)',
                        transition: 'filter 0.6s ease, transform 0.7s ease',
                      }}
                    />

                    {/* Overlay Gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent z-30"
                      style={{ opacity: isRevealed ? 0.6 : 0.8, transition: 'opacity 0.5s ease' }}
                    />

                    {/* Content */}
                    <div
                      className="absolute bottom-0 left-0 w-full p-8 z-40"
                      style={{ transform: isRevealed ? 'translateY(0)' : 'translateY(8px)', transition: 'transform 0.5s ease' }}
                    >
                      {member.specialty && (
                        <span
                          className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-accent-500 text-white rounded"
                          style={{ opacity: isRevealed ? 1 : 0, transition: 'opacity 0.3s ease 0.1s' }}
                        >
                          {member.specialty}
                        </span>
                      )}
                      <h3 className="text-2xl text-white font-serif mb-1">{member.name}</h3>
                      <p className="text-gray-300 text-sm mb-2">{member.role}</p>
                      {member.crmv && (
                        <p className="text-white/40 text-xs mb-6 font-mono">{member.crmv}</p>
                      )}

                      <div
                        className="flex gap-4"
                        style={{ opacity: isRevealed ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}
                      >
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md">
                          <Globe className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Glow */}
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur z-0"
                      style={{ opacity: isRevealed ? 0.3 : 0, transition: 'opacity 0.5s ease' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Team;
