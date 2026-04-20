import React from 'react';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-900 text-white pt-24 pb-12 z-10 below-fold overflow-hidden">
      {/* Pink glow — bottom to top */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(207,46,120,0.45) 0%, rgba(207,46,120,0.20) 35%, rgba(207,46,120,0.06) 60%, transparent 80%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/[0.07] pb-16 mb-16 gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              O cuidado que seu melhor amigo merece está a um clique de distância.
            </h2>
            <p className="text-white/50 text-lg">
              Não espere uma emergência para conhecer a melhor estrutura da região.
            </p>
          </div>
          <a
            href="https://wa.me/554899120084"
            className="whitespace-nowrap bg-brand-600 hover:bg-brand-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand-900/50"
          >
            AGENDAR CHECK-UP
          </a>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <span className="font-serif italic text-2xl text-accent-500">Pet</span>
              <MapPin className="w-5 h-5 text-accent-500 fill-current mb-1" />
              <span className="font-sans font-black text-2xl tracking-tighter uppercase text-brand-500">Point</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Clínica Veterinária & Estética.
              Amor com Precisão. A referência em saúde animal de Morro da Fumaça.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0" />
                <span>R. Teresa Mariana de Jesus, 135<br />Centro, Morro da Fumaça - SC, 88830-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="tel:+554899120084" className="hover:text-white/80 transition-colors">(48) 99912-0084</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Horários</h3>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-500 shrink-0" />
                <div>
                  <p>Segunda a Sexta: 08h - 18h</p>
                  <p>Sábado: 08h - 12h</p>
                  <p className="text-brand-400 font-medium mt-1"></p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Social</h3>
            <a
              href="https://instagram.com/petpointanimal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-accent-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@petpointanimal</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/30 text-sm pt-8 border-t border-white/[0.06]">
          <p>&copy; {new Date().getFullYear()} PetPoint Clínica Veterinária & Estética. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;