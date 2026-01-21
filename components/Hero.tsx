import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { VitalityField } from './ui/VitalityField';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-900">
      
      {/* 3D Background Layer */}
      <VitalityField />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-brand-900/50 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-transparent to-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <Reveal delay={200}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-accent-500"></span>
              <span className="text-xs font-bold tracking-[0.3em] text-accent-400 uppercase"></span>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white leading-[0.9] mb-8 tracking-tight">
              Medicina <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">de Ponta.</span> <br />
              <span className="text-accent-500 italic font-serif">Cuidado Real.</span>
            </h1>
          </Reveal>

          <Reveal delay={600}>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl leading-relaxed font-light border-l-2 border-brand-600 pl-6">
              A união perfeita entre a precisão da ciência e o calor do acolhimento. 
              Em Morro da Fumaça, elevamos o padrão da saúde animal.
            </p>
          </Reveal>

          <Reveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-accent-600 rounded-full text-white font-semibold overflow-hidden shadow-[0_0_20px_rgba(207,46,120,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(207,46,120,0.7)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold border border-white/10 glass-card hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-accent-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stylized Scroll Indicator */}
      <div className="absolute bottom-10 left-6 flex items-center gap-4 text-white/30 hidden md:flex">
         <span className="text-xs uppercase tracking-widest rotate-[-90deg]">Scroll</span>
         <div className="h-16 w-px bg-gradient-to-b from-accent-500 to-transparent"></div>
      </div>
    </section>
  );
};