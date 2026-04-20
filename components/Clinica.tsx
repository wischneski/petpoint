import React, { useRef, useState } from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const specialties = [
  {
    image: '/images/clinica/clinica-geral.webp',
    title: 'Clínica Geral',
    sub: 'Prevenção & Diagnóstico',
    desc: 'Consultas de rotina, check-ups preventivos e diagnóstico clínico completo para todas as espécies.',
  },
  {
    image: '/images/clinica/oncologia.webp',
    title: 'Oncologia & Cirurgia',
    sub: 'Alta Complexidade',
    desc: 'Procedimentos cirúrgicos de alta complexidade e tratamento oncológico especializado em pequenos animais.',
  },
  {
    image: '/images/clinica/odontologia.webp',
    title: 'Odontologia Veterinária',
    sub: 'Saúde Bucal',
    desc: 'Profilaxia, extração, restaurações e cirurgias orais com equipamentos odontológicos específicos para pets.',
  },
  {
    image: '/images/clinica/vacinacao.webp',
    title: 'Vacinação',
    sub: 'Prevenção & Proteção',
    desc: 'Calendário vacinal completo para cães e gatos, com vacinas importadas e nacionais, garantindo a proteção do seu pet em todas as fases da vida.',
  },
  {
    image: '/images/clinica/raio-x.webp',
    title: 'RAIO-X Digital',
    sub: 'Diagnóstico por Imagem',
    desc: 'Radiografias digitais de alta resolução com resultados imediatos, permitindo diagnósticos precisos e rápidos para o seu pet.',
  },
  {
    image: '/images/clinica/ultrassonografia.webp',
    title: 'Ultrassonografia',
    sub: 'Diagnóstico por Imagem',
    desc: 'Exames ultrassonográficos com equipamento de última geração para avaliação de órgãos internos com segurança e precisão.',
  },
  {
    image: '/images/clinica/urgencia.webp',
    title: 'Urgências & Emergências',
    sub: 'Atendimento 24h',
    desc: 'Atendimento ágil para situações críticas. Nossa equipe está preparada para agir quando mais importa.',
  },
];


const CARD_W = 280;
const GAP = 16;

const Clinica: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const scroll = (dir: 'left' | 'right') =>
    scrollRef.current?.scrollBy({ left: dir === 'right' ? CARD_W + GAP : -(CARD_W + GAP), behavior: 'smooth' });

  return (
    <section id="clinica" className="py-32 bg-white relative overflow-hidden below-fold">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-50/50 skew-x-12 translate-x-32 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Top: Header + imagem principal ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Texto */}
          <div>
            <Reveal>
              <span className="text-accent-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                Medicina Veterinária
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-black leading-tight mb-6">
                Clínica Veterinária <br />
                <span className="text-brand-600">
                  Completa.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-brand-gray text-lg leading-relaxed">
                Da consulta preventiva aos procedimentos mais complexos — nossa estrutura
                e equipe multidisciplinar estão prontas para oferecer o mais alto padrão
                de medicina veterinária para o seu pet.
              </p>
            </Reveal>
          </div>

          {/* Imagem principal */}
          <Reveal delay={100} width="100%">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-brand-900/10">
              <picture>
                <source
                  srcSet="/images/clinica/interior-400.webp 400w, /images/clinica/interior-800.webp 800w"
                  type="image/webp"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <img
                  src="/images/clinica/interior.webp"
                  alt="Clínica Veterinária PetPoint"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />

              {/* Badge flutuante */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <ShieldCheck className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="text-white text-xs font-semibold">Equipe especializada</span>
              </div>

              {/* Imagem secundária — sobreposição cantoneira */}
              <div className="absolute -bottom-4 -right-4 w-40 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-xl hidden md:block">
                <img
                  src="/images/clinica/consulta.webp"
                  alt="Consulta veterinária"
                  width={360}
                  height={240}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Especialidades ── */}
        <Reveal delay={200} width="100%">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4 flex-1">
              <span className="h-px flex-1 bg-brand-200" />
              <span className="text-brand-gray/60 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                Nossas especialidades
              </span>
              <span className="h-px flex-1 bg-brand-200" />
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full border border-brand-200 bg-brand-50 hover:bg-brand-100 flex items-center justify-center text-brand-gray transition-all duration-200"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full border border-brand-200 bg-brand-50 hover:bg-brand-100 flex items-center justify-center text-brand-gray transition-all duration-200"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth mb-14 pb-2"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {specialties.map((item, idx) => {
            const isRevealed = activeIdx === idx || hoverIdx === idx;
            return (
              <div
                key={idx}
                className="shrink-0"
                style={{ width: CARD_W, scrollSnapAlign: 'start' }}
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '1 / 1' }}
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  onMouseEnter={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    width={560}
                    height={720}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    style={{
                      filter: isRevealed ? 'none' : 'blur(10px) grayscale(1)',
                      transform: isRevealed ? 'scale(1.08)' : 'scale(1)',
                      transition: 'filter 0.6s ease, transform 0.7s ease',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent z-30"
                    style={{ opacity: isRevealed ? 0.6 : 0.8, transition: 'opacity 0.5s ease' }}
                  />

                  {/* Content */}
                  <div
                    className="absolute bottom-0 left-0 w-full p-6 z-40"
                    style={{ transform: isRevealed ? 'translateY(0)' : 'translateY(6px)', transition: 'transform 0.5s ease' }}
                  >
                    <span
                      className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-accent-500 text-white rounded"
                      style={{ opacity: isRevealed ? 1 : 0, transition: 'opacity 0.3s ease 0.07s' }}
                    >
                      {item.sub}
                    </span>
                    <h3 className="text-xl text-white font-serif mb-1.5 leading-tight">{item.title}</h3>
                    <p
                      className="text-white/60 text-xs leading-relaxed"
                      style={{ opacity: isRevealed ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur z-0"
                    style={{ opacity: isRevealed ? 0.2 : 0, transition: 'opacity 0.5s ease' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <Reveal delay={600} width="100%">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-brand-200">
            <p className="text-brand-gray text-sm text-center sm:text-left max-w-md">
              Agende uma consulta e descubra por que somos referência em saúde animal em Morro da Fumaça.
            </p>
            <a
              href="https://wa.me/554899120084"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-accent-500/20 whitespace-nowrap"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Clinica;
