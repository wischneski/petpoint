import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      category: "Saúde Canina",
      title: "Longevidade: O segredo está na prevenção precoce.",
      date: "12 Out, 2023",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2074&auto=format&fit=crop",
      highlight: true
    },
    {
      category: "Comportamento",
      title: "Entendendo a linguagem corporal dos felinos.",
      date: "08 Set, 2023",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
      highlight: false
    },
    {
      category: "Nutrição",
      title: "Alimentação natural vs. Ração Premium: O veredito.",
      date: "24 Ago, 2023",
      image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=2070&auto=format&fit=crop",
      highlight: false
    }
  ];

  return (
    <section className="relative py-32 bg-white z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Reveal width="100%">
            <h2 className="font-serif text-5xl md:text-6xl text-brand-black mb-6">
              PetPoint <span className="italic text-accent-500">Journal</span>
            </h2>
            <p className="text-brand-gray text-lg">
              Ciência, cuidado e novidades. Um espaço dedicado ao conhecimento que transforma a vida do seu pet.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Highlight Article (Left) */}
          <Reveal>
            <div className="group cursor-pointer h-full flex flex-col">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 shadow-xl">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-brand-900 shadow-sm">
                  {articles[0].category}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 ml-1">
                  <Calendar className="w-4 h-4 text-accent-500" />
                  {articles[0].date}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-brand-black leading-tight group-hover:text-brand-600 transition-colors mb-4">
                  {articles[0].title}
                </h3>
                <a href="#" className="inline-flex items-center gap-2 text-brand-900 font-bold border-b-2 border-brand-200 pb-1 group-hover:border-accent-500 transition-colors">
                  Ler Matéria Completa <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Side Articles (Right) */}
          <div className="flex flex-col gap-10">
            {articles.slice(1).map((article, idx) => (
              <Reveal key={idx} delay={200 + (idx * 150)}>
                <div className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative overflow-hidden rounded-xl w-full md:w-48 aspect-[4/3] shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-accent-500 uppercase tracking-wider">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-xs text-gray-400">{article.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-brand-black leading-tight mb-3 group-hover:text-brand-600 transition-colors">
                      {article.title}
                    </h3>
                    <a href="#" className="text-sm font-semibold text-gray-500 group-hover:text-brand-900 transition-colors flex items-center gap-1">
                      Ler Artigo <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="bg-brand-50 rounded-2xl p-8 text-center border border-brand-100 hover:border-brand-200 transition-colors">
                <h4 className="font-serif text-xl text-brand-900 mb-2">Quer receber dicas exclusivas?</h4>
                <p className="text-gray-600 text-sm mb-4">Junte-se a +5.000 tutores na nossa newsletter.</p>
                <div className="flex gap-2 max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-500"
                  />
                  <button className="bg-brand-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-brand-700 transition-colors">
                    Assinar
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;