import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

// Helper para cada card de categoria
interface CardProps {
  image: string;
  alt: string;
  sub: string;
  title: string;
  large?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ image, alt, sub, title, large, delay = 0 }) => (
  <a
    href="https://wa.me/554899556555"
    target="_blank"
    rel="noreferrer"
    className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col w-full h-full"
    style={{
      minHeight: large ? 340 : 180,
      animation: `fadeSlideUp 0.6s ease-out ${delay}ms both`,
    }}
  >
    <img
      src={image}
      alt={alt}
      width={900}
      height={600}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/25 to-transparent group-hover:from-brand-900/70 transition-opacity duration-500" />
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-accent-500/35 transition-all duration-500" />
    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white/45 text-[10px] font-medium uppercase tracking-widest mb-1">{sub}</p>
      <h3 className={`font-serif text-white leading-tight ${large ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'}`}>
        {title}
      </h3>
      <div className="flex items-center gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-accent-400 text-[10px] font-bold uppercase tracking-widest">Ver produtos</span>
        <ArrowRight className="w-3 h-3 text-accent-400" />
      </div>
    </div>
  </a>
);

const PetShop: React.FC = () => {
  return (
    <section id="petshop" className="py-32 bg-brand-900 relative overflow-hidden below-fold">
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(32,58,143,0.15) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal width="100%">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              PetShop Premium
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Tudo que seu pet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">
                precisa aqui.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="https://wa.me/554899556555"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors border-b border-white/20 pb-1 whitespace-nowrap"
            >
              Ver todos os produtos <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        {/* Bento Grid — wrapper divs são os filhos diretos do grid */}
        <Reveal delay={100} width="100%">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridTemplateRows: '260px 260px' }}>

            {/* Grande: col 1-2, row 1-2 */}
            <div className="col-span-2 row-span-2">
              <Card image="/images/petshop/nutricao.webp" alt="Nutrição Premium"
                sub="Rações & Suplementos" title="Nutrição Premium" large delay={0} />
            </div>

            {/* Cães — col 3, row 1 */}
            <div>
              <Card image="/images/petshop/caes.webp" alt="Cães"
                sub="Linha completa" title="Cães" delay={80} />
            </div>

            {/* Gatos — col 4, row 1 */}
            <div>
              <Card image="/images/petshop/gatos.webp" alt="Gatos"
                sub="Linha completa" title="Gatos" delay={160} />
            </div>

            {/* Acessórios — col 3, row 2 */}
            <div>
              <Card image="/images/petshop/acessorios.webp" alt="Acessórios"
                sub="Brinquedos & Conforto" title="Acessórios" delay={240} />
            </div>

            {/* Conforto — col 4, row 2 */}
            <div>
              <Card image="/images/petshop/conforto.webp" alt="Conforto"
                sub="Bem Estar Animal" title="Conforto" delay={320} />
            </div>

          </div>
        </Reveal>

        {/* Segunda linha: 3 categorias adicionais */}
        <Reveal delay={350} width="100%">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4" style={{ gridTemplateRows: '200px' }}>

            <div>
              <Card image="/images/petshop/higiene.webp" alt="Higiene"
                sub="Banho & Cuidados" title="Higiene" delay={400} />
            </div>

            <div>
              <Card image="/images/petshop/pequenos.webp" alt="Exóticos"
                sub="Coelhos, hamsters e mais" title="Exóticos" delay={480} />
            </div>

            <div>
              <Card image="/images/petshop/farmacia.webp" alt="Farmácia"
                sub="Medicamentos & Vitaminas" title="Farmácia" delay={560} />
            </div>

          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={600} width="100%">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
            <p className="text-white/40 text-sm text-center sm:text-left">
              Mais de <span className="text-white/70 font-semibold">500 produtos</span> disponíveis.
              Atendemos pets de todas as espécies.
            </p>
            <a
              href="https://wa.me/554899556555"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/30 self-start"
            >
              Falar com a Loja
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default PetShop;
