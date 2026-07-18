/**
 * app/blog/petshop/page.tsx — PetShop Premium (artigo institucional)
 *
 * Destino do card "PetShop Premium" em Soluções Completas para o
 * Bem-Estar (components/Services.tsx). Mesma profundidade editorial das
 * páginas de app/blog/especialidades/[slug] — intro, o que é, o que você
 * encontra, como fazemos, FAQ com schema.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const CANONICAL_URL = 'https://www.meupetpoint.com.br/blog/petshop';

const faqs = [
  {
    question: 'O PetShop vende ração para pets com necessidades especiais, como alergias ou doenças renais?',
    answer:
      'Sim. Trabalhamos com rações terapêuticas indicadas pela equipe clínica para condições como alergias alimentares, doença renal e sensibilidade digestiva.',
  },
  {
    question: 'Preciso ser cliente da clínica para comprar no PetShop?',
    answer: 'Não. Qualquer tutor pode comprar na loja, com ou sem consulta agendada na clínica.',
  },
  {
    question: 'Vocês atendem outros animais além de cães e gatos?',
    answer: 'Sim. Temos uma linha para pequenos exóticos, como coelhos e hamsters, além dos produtos para cães e gatos.',
  },
  {
    question: 'Como faço um pedido ou tiro dúvida sobre um produto?',
    answer:
      'Pelo WhatsApp da loja, (48) 99955-6555. A equipe informa disponibilidade e orienta sobre qual produto atende melhor o seu pet.',
  },
];

const categories = [
  'Nutrição premium: rações e suplementos para todas as fases de vida e necessidades específicas',
  'Farmácia veterinária: medicamentos e vitaminas com orientação da equipe clínica',
  'Linha para cães e gatos: produtos específicos para cada espécie, do filhote ao idoso',
  'Acessórios e conforto: brinquedos, camas e itens de bem-estar',
  'Higiene: produtos para banho e cuidados do dia a dia',
  'Pequenos exóticos: itens para coelhos, hamsters e outras espécies',
];

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meupetpoint.com.br'),
  title: 'PetShop Premium PetPoint | Nutrição, Farmácia e Acessórios em Morro da Fumaça',
  description:
    'Mais de 500 produtos: nutrição premium, farmácia veterinária, acessórios e linha completa para cães, gatos e exóticos. PetShop da PetPoint em Morro da Fumaça/SC.',
  keywords: [
    'petshop morro da fumaça',
    'ração premium morro da fumaça',
    'farmácia veterinária sc',
    'loja de produtos para pets',
    'acessórios para cães e gatos',
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'PetShop Premium PetPoint',
    description: 'Nutrição, farmácia e acessórios num único espaço, junto com a clínica.',
    url: CANONICAL_URL,
    images: [{ url: '/images/services/petshop.webp', width: 1200, height: 630, alt: 'PetShop Premium PetPoint' }],
    type: 'article',
    locale: 'pt_BR',
    siteName: 'PetPoint',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PetShop Premium PetPoint',
    description: 'Mais de 500 produtos para cães, gatos e exóticos em Morro da Fumaça/SC.',
    images: ['/images/services/petshop.webp'],
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
        { '@type': 'ListItem', position: 2, name: 'PetShop Premium', item: CANONICAL_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL_URL}#service`,
      name: 'PetShop Premium PetPoint',
      description: 'Nutrição premium, farmácia veterinária e acessórios para cães, gatos e pequenos exóticos.',
      serviceType: 'Loja de produtos para animais',
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

export default function PetShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="relative h-[55vh] min-h-[420px] overflow-hidden bg-brand-900">
        <img
          src="/images/services/petshop.webp"
          alt="PetShop Premium PetPoint"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent" />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-14 z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">PetShop Premium</span>
          </nav>

          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent-500 text-white rounded-full w-fit">
            Loja & Nutrição
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            PetShop Premium
          </h1>
          <p className="text-white/60 text-base mt-3">Tudo que seu pet precisa, num único lugar</p>
        </div>
      </header>

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <p id="artigo-intro" className="text-xl text-brand-gray leading-relaxed mb-12 font-medium">
          Ração, remédio, brinquedo e acessório em lugares diferentes significa mais deslocamento
          e menos tempo com o pet. O PetShop da PetPoint reúne tudo isso num único espaço dentro
          da própria clínica, com mais de 500 produtos para cães, gatos e outras espécies.
        </p>

        <section id="artigo-o-que-e" className="mb-12">
          <h2 className="font-serif text-3xl text-brand-black mb-4">O que é o PetShop Premium</h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            É a farmácia veterinária e a loja de produtos da PetPoint funcionando lado a lado com
            o atendimento clínico. Isso significa que uma recomendação do veterinário pode virar
            produto na mesma visita, sem precisar de outra parada. A curadoria cobre nutrição de
            alta performance, medicamentos, vitaminas, acessórios e itens de higiene, com linhas
            específicas para cães, gatos e pets exóticos como coelhos e hamsters.
          </p>
        </section>

        <section id="artigo-o-que-encontra" className="mb-12 bg-brand-50 rounded-2xl p-8">
          <h2 className="font-serif text-2xl text-brand-black mb-6">O que você encontra</h2>
          <ul className="space-y-3">
            {categories.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-brand-gray leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-3xl text-brand-black mb-4">Como funciona na PetPoint</h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            A equipe da loja trabalha em conjunto com o time clínico. Quando um veterinário
            recomenda uma ração terapêutica ou um suplemento específico, o produto já está
            disponível na loja, sem precisar de indicação para comprar em outro lugar depois. Para
            dúvidas sobre qual produto escolher, a equipe orienta com base no porte, na idade e
            nas necessidades de saúde do pet.
          </p>
        </section>

        <div className="border border-brand-100 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
            <span className="text-accent-600 font-bold text-sm">EP</span>
          </div>
          <div>
            <p className="font-semibold text-brand-black text-sm">Equipe PetPoint</p>
            <p className="text-brand-gray text-xs">PetShop Premium</p>
          </div>
        </div>

        <div className="bg-brand-900 rounded-2xl p-8 text-center mb-16">
          <h2 className="font-serif text-2xl text-white mb-3">Precisa de um produto específico?</h2>
          <p className="text-white/60 text-sm mb-6">
            Fale com a equipe da loja pelo WhatsApp e confirme disponibilidade antes de vir até a PetPoint.
          </p>
          <a
            href="https://wa.me/554899556555"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a Loja
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
          <Link href="/blog/estetica" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Conheça a Estética
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors">
            Voltar para a página principal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
