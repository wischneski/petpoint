import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden below-fold">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{background:"radial-gradient(circle, rgba(207,46,120,0.10) 0%, transparent 70%)"}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full" style={{background:"radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)"}} />

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">
              Histórias de quem faz parte da nossa família
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={200}>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Quote className="w-8 h-8 text-accent-500 mb-6 opacity-80" />
              <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed text-gray-100">
                "A PetPoint salvou meu cachorro quando eu não tinha mais esperanças. O atendimento é de outro mundo."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">Maria S.</p>
                  <p className="text-brand-200 text-sm">Tutora de Golden Retriever</p>
                </div>
                <div role="img" aria-label="Avalia\u00e7\u00e3o: 5 de 5 estrelas" className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />)}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Quote className="w-8 h-8 text-accent-500 mb-6 opacity-80" />
              <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed text-gray-100">
                "A tosa ficou impecável e meu gato voltou super calmo. Confio de olhos fechados."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">Marcos P.</p>
                  <p className="text-brand-200 text-sm">Tutor de Persa</p>
                </div>
                <div role="img" aria-label="Avalia\u00e7\u00e3o: 5 de 5 estrelas" className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;