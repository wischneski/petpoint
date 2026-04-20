import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    image: '/images/estetica/banho.webp',
    alt: 'Produtos premium para banho',
    title: 'Banho que dura mais.',
    desc: 'Utilizamos produtos Pelôncio, uma linha dermatologicamente e oftalmologicamente testados e reconhecidos pela qualidade superior. Cada ingrediente é escolhido para mimar a pele e os pelos do seu pet, deixando-os brilhantes, saudáveis e com maior durabilidade.',
  },
  {
    image: '/images/estetica/spa.webp',
    alt: 'Spa relaxante para pets',
    title: 'Spa Relaxante.',
    desc: 'Nossos banhos são especiais, com controle eletrônico da temperatura da água, garantindo que seu pet desfrute de uma experiência tranquila e confortável — um mimo que ele vai adorar.',
  },
  {
    image: '/images/estetica/seguranca.webp',
    alt: 'Ambiente seguro e monitorado',
    title: 'Ambiente Seguro.',
    desc: 'Monitoramento por câmeras e supervisão constante de nossa equipe. A segurança e o bem-estar do seu pet são nossa prioridade em cada etapa do atendimento.',
  },
];

const Estetica: React.FC = () => {
  return (
    <section id="estetica" className="py-32 bg-white relative overflow-hidden below-fold">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-50/60 -skew-x-6 -translate-x-24 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <Reveal delay={0} width="100%">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-900/10">
                <picture>
                  <source
                    srcSet="/images/services/estetica-400.webp 400w, /images/services/estetica-800.webp 800w"
                    type="image/webp"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <img
                    src="/images/services/estetica.webp"
                    alt="Centro de Estética PetPoint"
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <p className="text-white font-serif text-lg italic leading-snug">
                  "Mais que um banho — uma experiência de renovação."
                </p>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent-500/10 blur-2xl pointer-events-none" />
            </div>
          </Reveal>

          {/* Right — Content */}
          <div className="flex flex-col gap-10">
            <div>
              <Reveal>
                <span className="text-accent-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                  Centro de Estética
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight mb-6">
                  Um tratamento especial <br />
                  <span className="text-brand-600">para seu amigo peludo.</span>
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-brand-gray text-lg leading-relaxed">
                  Entendemos que cada animal é único e merece o melhor. Na PetPoint,
                  cada sessão de estética é cuidadosamente personalizada para o
                  temperamento e as necessidades do seu pet.
                </p>
              </Reveal>
            </div>

            {/* Features com imagens */}
            <div className="flex flex-col gap-4">
              {features.map((item, idx) => (
                <Reveal key={idx} delay={200 + idx * 100}>
                  <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-brand-50 transition-colors duration-300 cursor-default">
                    {/* Thumbnail */}
                    <div className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden shadow-md ring-2 ring-transparent group-hover:ring-accent-500/30 transition-all duration-300">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width={160}
                        height={160}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-brand-black text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-brand-gray/80 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal delay={550}>
              <a
                href="https://wa.me/554899120084"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/30 self-start"
              >
                Agendar Estética
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estetica;
