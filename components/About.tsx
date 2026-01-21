import React from 'react';
import { ShieldCheck, Heart, Stethoscope } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="authority" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/50 skew-x-12 translate-x-32" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-8 leading-tight">
                Por que confiar a vida de quem você ama à <span className="text-brand-600">Pet</span><span className="text-accent-500">Point</span>?
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-brand-gray leading-relaxed mb-8">
                Seu animal não é apenas um pet; ele é parte da sua história. Na PetPoint, entendemos que saúde veterinária vai além de tratar doenças — trata-se de promover longevidade.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed mb-10">
                Combinamos protocolos clínicos modernos, uma equipe apaixonada e uma estrutura completa para garantir que vocês tenham mais tempo e qualidade de vida juntos.
              </p>
            </Reveal>

            <div className="space-y-6">
              {[
                {
                  icon: Stethoscope,
                  title: "Diagnóstico Preciso",
                  desc: "Tecnologia a favor da saúde.",
                  color: "text-brand-600",
                  bg: "bg-brand-100"
                },
                {
                  icon: Heart,
                  title: "Estética Humanizada",
                  desc: "Respeito ao temperamento de cada animal.",
                  color: "text-accent-500",
                  bg: "bg-pink-50"
                },
                {
                  icon: ShieldCheck,
                  title: "PetShop Curado",
                  desc: "Apenas produtos que nós usaríamos nos nossos próprios pets.",
                  color: "text-brand-600",
                  bg: "bg-brand-100"
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={300 + (idx * 100)}>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default group">
                    <div className={`${item.bg} ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black text-lg">{item.title}</h3>
                      <p className="text-brand-gray/80">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image - Apple Style: Clean, High Res, Floating */}
          <div className="order-1 lg:order-2 relative">
            <Reveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                  alt="Veterinary surgery team focusing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-900/80 to-transparent p-8">
                  <p className="text-white font-serif text-xl italic">"Amor com Precisão."</p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-4xl font-bold text-brand-600 mb-1">+5k</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Vidas Transformadas</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;