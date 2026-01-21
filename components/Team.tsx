import React from 'react';
import { Reveal } from './ui/Reveal';
import { Linkedin, Instagram, Plus } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: "Dra. Ana Silva",
      role: "Diretora Clínica & Cirurgia",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
      specialty: "Neurocirurgia"
    },
    {
      name: "Dr. Roberto Mendes",
      role: "Diagnóstico por Imagem",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      specialty: "Ultrassonografia"
    },
    {
      name: "Dra. Carolina Wu",
      role: "Dermatologia & Alergia",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop",
      specialty: "Imunoterapia"
    },
    {
      name: "Dr. Ricardo Viana",
      role: "Cardiologia Intervencionista",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
      specialty: "Cardiologia"
    },
    {
      name: "Dra. Sofia Martinez",
      role: "Oncologia & Terapia Celular",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop",
      specialty: "Oncologia"
    }
  ];

  return (
    <section className="py-32 bg-brand-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <Reveal width="100%">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">Corpo Clínico</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Mentes Brilhantes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Corações Apaixonados.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="hidden md:block pb-2">
              <a href="#" className="text-white/70 hover:text-white flex items-center gap-2 transition-colors border-b border-white/20 pb-1">
                Ver equipe completa <Plus className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]">
              <Reveal delay={idx * 100} width="100%">
                <div className="group relative h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer">
                  {/* Glass Container */}
                  <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-sm z-20 transition-all duration-500 group-hover:bg-white/0 group-hover:border-transparent" />

                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 z-10"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent z-30 opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-40 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-accent-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {member.specialty}
                    </span>
                    <h3 className="text-2xl text-white font-serif mb-1">{member.name}</h3>
                    <p className="text-gray-300 text-sm mb-6">{member.role}</p>

                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md">
                        <Instagram className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200 z-0" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;