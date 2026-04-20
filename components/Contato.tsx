import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contato: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="py-32 bg-brand-900 text-white relative overflow-hidden below-fold">
      {/* Ambient background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(207,46,120,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Localização & Contato
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Entre em contato{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                conosco
              </span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              Estamos em Morro da Fumaça e prontos para cuidar do seu pet com toda atenção que ele merece.
            </p>
          </div>
        </Reveal>

        {/* Map */}
        <Reveal delay={150} width="100%">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 mb-12 border border-white/[0.06]"
            onClick={() => setMapLoaded(true)}
            style={{ cursor: mapLoaded ? 'default' : 'pointer', minHeight: 380 }}
          >
            {mapLoaded ? (
              <>
                <iframe
                  title="Localização PetPoint"
                  src="https://maps.google.com/maps?q=-28.6489,-49.2069&hl=pt&z=15&output=embed"
                  width="100%"
                  height="380"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full grayscale-[30%] contrast-[1.05]"
                  style={{ border: 0 }}
                />
                <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
              </>
            ) : (
              <div className="flex items-center justify-center w-full h-[380px] bg-brand-800/60 rounded-3xl">
                <div className="text-center text-white/70">
                  <MapPin className="w-10 h-10 mx-auto mb-3 text-accent-400" />
                  <p className="font-medium">Clique para ver no mapa</p>
                  <p className="text-sm opacity-60">R. Teresa Mariana de Jesus, 135</p>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card — Telefônico */}
          <Reveal delay={200} width="100%">
            <a
              href="https://wa.me/554899120084"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent-500/30 transition-all duration-500 overflow-hidden h-full cursor-pointer"
            >
              {/* Top accent bar */}
              <span className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

              <div className="flex flex-col gap-4">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                    <Phone className="w-4 h-4 text-accent-400" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>

                {/* Title */}
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Contato</p>
                  <h3 className="font-serif text-xl text-white leading-tight">Telefônico</h3>
                </div>

                {/* Numbers */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Clínica</span>
                    <span className="text-white font-semibold text-sm tracking-tight">(48) 99912-0084</span>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Loja / Estética</span>
                    <span className="text-white font-semibold text-sm tracking-tight">(48) 99955-6555</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-accent-400 group-hover:text-accent-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">Ligar agora</span>
                <span className="text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </div>

              {/* Hover glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(207,46,120,0.12) 0%, transparent 70%)' }} />
            </a>
          </Reveal>

          {/* Card — Endereço */}
          <Reveal delay={300} width="100%">
            <a
              href="https://maps.google.com/?q=-28.6489,-49.2069"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent-500/30 transition-all duration-500 overflow-hidden h-full cursor-pointer"
            >
              <span className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-accent-400" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>

                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Onde estamos</p>
                  <h3 className="font-serif text-xl text-white leading-tight">Endereço</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Endereço</span>
                    <span className="text-white font-semibold text-sm tracking-tight">R. Teresa Mariana de Jesus, 135</span>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Cidade</span>
                    <span className="text-white font-semibold text-sm tracking-tight">Morro da Fumaça — SC</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-accent-400 group-hover:text-accent-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">Ver no mapa</span>
                <span className="text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(207,46,120,0.12) 0%, transparent 70%)' }} />
            </a>
          </Reveal>

          {/* Card — Atendimento */}
          <Reveal delay={400} width="100%">
            <a
              href="https://wa.me/554899120084"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent-500/30 transition-all duration-500 overflow-hidden h-full cursor-pointer"
            >
              <span className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                    <Clock className="w-4 h-4 text-accent-400" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>

                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Horários</p>
                  <h3 className="font-serif text-xl text-white leading-tight">Atendimento</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Seg — Sex</span>
                    <span className="text-white font-semibold text-sm">08h às 18h</span>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div className="flex items-center justify-between">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Sábado</span>
                    <span className="text-white font-semibold text-sm">08h às 12h</span>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div className="flex items-center justify-between">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest">Domingo</span>
                    <span className="text-white/40 font-medium text-base italic">Fechado</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-accent-400 group-hover:text-accent-300 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">Agendar consulta</span>
                <span className="text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(207,46,120,0.12) 0%, transparent 70%)' }} />
            </a>
          </Reveal>

        </div>

        {/* WhatsApp CTA */}
        <Reveal delay={500} width="100%">
          <div className="text-center mt-14">
            <a
              href="https://wa.me/554899120084"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-accent-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contato;
