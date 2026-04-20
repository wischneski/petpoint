import React from 'react';
import { Reveal } from './ui/Reveal';
import { Instagram, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section className="relative py-32 bg-white z-10 below-fold">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal width="100%">
            <h2 className="font-serif text-5xl md:text-6xl text-brand-black mb-6">
              PetPoint <span className="italic text-accent-500">no Instagram</span>
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Acompanhe dicas, novidades e os bastidores do PetPoint. São novos posts toda semana — direto para quem ama pets.
            </p>
            <a
              href="https://instagram.com/petpointanimal"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Seguir @petpointanimal
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Blog;
