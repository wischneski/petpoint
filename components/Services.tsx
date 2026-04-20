import React from 'react';
import { Reveal } from './ui/Reveal';
import { Activity, Scissors, ShoppingBag, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Activity,
      title: "Clínica Médica & Cirúrgica",
      description: "Da prevenção a tratamentos complexos. Uma equipe preparada para diagnósticos rápidos e assertivos.",
      image: "/images/services/clinica.webp"
    },
    {
      id: 2,
      icon: Scissors,
      title: "Centro de Estética",
      description: "Mais que um banho, uma renovação. Utilizamos produtos premium e técnicas que reduzem o estresse.",
      image: "/images/services/estetica.webp"
    },
    {
      id: 3,
      icon: ShoppingBag,
      title: "PetShop Premium",
      description: "Nutrição de alta performance, farmácia completa e acessórios selecionados para segurança e conforto.",
      image: "/images/services/petshop.webp"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-brand-silver z-10 below-fold">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-900 leading-tight">
              Soluções Completas <br />
              <span className="text-brand-600">para o Bem-Estar</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-brand-gray text-lg max-w-sm leading-relaxed">
              Cuidamos de cada detalhe, do exame clínico ao acessório perfeito para o seu pet.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 150}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px] flex flex-col hover:-translate-y-2">
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <picture>
                    <source
                      srcSet={`${service.image.replace('.webp', '-400.webp')} 400w, ${service.image.replace('.webp', '-800.webp')} 800w`}
                      type="image/webp"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={533}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 flex flex-col h-full text-white">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-auto border border-white/20">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-serif font-medium mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                      {service.description}
                    </p>

                    <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent-400 group-hover:text-white transition-colors">
                      Explorar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;