/**
 * app/blog/estetica/page.tsx — Centro de Estética (artigo institucional)
 *
 * Destino do card "Centro de Estética" em Soluções Completas para o
 * Bem-Estar (components/Services.tsx). Mesma profundidade editorial das
 * páginas de app/blog/especialidades/[slug] — intro, o que é, quando
 * buscar, como fazemos, FAQ com schema.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from 'lucide-react';

const CANONICAL_URL = 'https://www.meupetpoint.com.br/blog/estetica';

const faqs = [
  {
    question: 'Que produtos vocês usam no banho e tosa?',
    answer:
      'Trabalhamos com a linha Pelôncio, testada dermatologicamente e oftalmologicamente. É formulada para preservar o pH da pele de cães e gatos, diferente de produtos genéricos que podem ressecar ou irritar.',
  },
  {
    question: 'Meu pet é ansioso durante o banho. Vocês conseguem lidar com isso?',
    answer:
      'Sim. A sessão é ajustada ao temperamento do animal, com um ritmo mais calmo quando necessário. O ambiente é monitorado por câmeras e acompanhado de perto pela equipe, para manter o pet seguro e confortável do início ao fim.',
  },
  {
    question: 'Com que frequência devo levar meu pet para banho e tosa?',
    answer:
      'Depende do porte e do tipo de pelo, mas o intervalo mais comum é entre 30 e 45 dias. Pets de pelo longo ou que vivem em ambientes externos podem precisar de banhos mais frequentes.',
  },
  {
    question: 'Como agendar um horário no Centro de Estética?',
    answer:
      'Pelo WhatsApp (48) 99912-0084. Informe o porte e a raça do pet para que a equipe já prepare o atendimento adequado.',
  },
];

const whenToSeek = [
  'O pelo está embolado ou com nós, especialmente atrás das orelhas e nas patas',
  'Já se passaram mais de 30 dias desde o último banho',
  'Você notou cheiro forte mesmo pouco tempo depois do banho em casa',
  'As unhas estão compridas o suficiente para tocar o chão ao caminhar',
  'O pet está mais sensível ao calor e precisa de uma tosa higiênica',
  'Você quer um ambiente seguro para pets mais ansiosos, com supervisão constante',
];

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meupetpoint.com.br'),
  title: 'Centro de Estética PetPoint | Banho e Tosa em Morro da Fumaça',
  description:
    'Banho e tosa com produtos Pelôncio, controle eletrônico de temperatura e ambiente monitorado por câmeras. Centro de Estética da PetPoint em Morro da Fumaça/SC.',
  keywords: [
    'banho e tosa morro da fumaça',
    'estética pet morro da fumaça',
    'pet shop banho e tosa sc',
    'tosa higiênica cão gato',
    'produtos pelôncio',
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Centro de Estética PetPoint',
    description: 'Mais que um banho, uma experiência de renovação para o seu pet.',
    url: CANONICAL_URL,
    images: [{ url: '/images/services/estetica.webp', width: 1200, height: 630, alt: 'Centro de Estética PetPoint' }],
    type: 'article',
    locale: 'pt_BR',
    siteName: 'PetPoint',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Estética PetPoint',
    description: 'Banho e tosa com produtos premium e ambiente seguro em Morro da Fumaça/SC.',
    images: ['/images/services/estetica.webp'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meupetpoint.com.br/' },
        { '@type': 'ListItem', position: 2, name: 'Centro de Estética', item: CANONICAL_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL_URL}#service`,
      name: 'Centro de Estética PetPoint',
      description: 'Banho e tosa com produtos Pelôncio, controle eletrônico de temperatura e ambiente monitorado por câmeras.',
      serviceType: 'Estética animal',
      provider: { '@id': 'https://www.meupetpoint.com.br/#business' },
      areaServed: { '@type': 'City', name: 'Morro da Fumaça', addressCountry: 'BR' },
      url: CANONICAL_URL,
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export default function EsteticaPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="relative h-[55vh] min-h-[420px] overflow-hidden bg-brand-900">
        <img
          src="/images/services/estetica.webp"
          alt="Centro de Estética PetPoint"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent" />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-14 z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Centro de Estética</span>
          </nav>

          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent-500 text-white rounded-full w-fit">
            Estética & Bem-Estar
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            Centro de Estética
          </h1>
          <p className="text-white/60 text-base mt-3">Mais que um banho, uma experiência de renovação</p>
        </div>
      </header>

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <p id="artigo-intro" className="text-xl text-brand-gray leading-relaxed mb-12 font-medium">
          Muitos tutores adiam a tosa não por esquecimento, mas por receio da experiência do pet:
          um ambiente barulhento, produtos que irritam a pele, uma correria que estressa o animal.
          Faz sentido pensar duas vezes antes de deixar alguém que você ama nas mãos de estranhos.
        </p>

        <section id="artigo-o-que-e" className="mb-12">
          <h2 className="font-serif text-3xl text-brand-black mb-4">O que é o Centro de Estética PetPoint</h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            É uma estrutura própria dentro da clínica, pensada para banho e tosa com controle real
            sobre cada etapa. Usamos a linha Pelôncio, testada dermatologicamente e
            oftalmologicamente, porque a pele de cães e gatos reage diferente da pele humana e
            produtos genéricos podem irritar. A água do banho passa por controle eletrônico de
            temperatura, e o ambiente inteiro é monitorado por câmeras, com supervisão constante
            da equipe.
          </p>
        </section>

        <section id="artigo-quando" className="mb-12 bg-brand-50 rounded-2xl p-8">
          <h2 className="font-serif text-2xl text-brand-black mb-6">Sinais de que é hora de agendar</h2>
          <ul className="space-y-3">
            {whenToSeek.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-brand-gray leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-3xl text-brand-black mb-4">Como fazemos na PetPoint</h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            Cada sessão começa com uma conversa rápida sobre o temperamento do pet. Alguns animais
            preferem um ritmo mais devagar, outros já chegam tranquilos. A equipe ajusta a
            abordagem antes de qualquer produto tocar o pelo. O banho usa a linha Pelôncio com água
            em temperatura controlada eletronicamente, para evitar desconforto. Durante todo o
            processo, câmeras e a supervisão da equipe garantem que nada saia do combinado com o
            tutor.
          </p>
        </section>

        <div className="border border-brand-100 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
            <span className="text-accent-600 font-bold text-sm">EP</span>
          </div>
          <div>
            <p className="font-semibold text-brand-black text-sm">Equipe PetPoint</p>
            <p className="text-brand-gray text-xs">Centro de Estética</p>
          </div>
        </div>

        <div className="bg-brand-900 rounded-2xl p-8 text-center mb-16">
          <h2 className="font-serif text-2xl text-white mb-3">Quer agendar um horário?</h2>
          <p className="text-white/60 text-sm mb-6">
            Conte o porte e a raça do seu pet e a equipe já prepara o atendimento.
          </p>
          <a
            href="https://wa.me/554899120084"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/20"
          >
            <Phone className="w-5 h-5" />
            Falar pelo WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <section aria-labelledby="faq-titulo" className="mb-12">
          <h2 id="faq-titulo" className="font-serif text-3xl text-brand-black mb-8">Perguntas frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-100 pb-6 last:border-0">
                <h3 className="font-semibold text-brand-black mb-2 text-lg leading-snug">{faq.question}</h3>
                <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex items-center justify-between pt-8 border-t border-brand-100">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página principal
          </Link>
          <Link href="/blog/petshop" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors">
            Conheça o PetShop
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
