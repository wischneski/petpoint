import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { getAllSpecialtySlugs, getSpecialtyBySlug } from '@/features/especialidades/data';

interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Static generation ──────────────────────────────────────────────────── */

export function generateStaticParams() {
  return getAllSpecialtySlugs();
}

/* ── Per-page metadata ──────────────────────────────────────────────────── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) return {};

  return {
    metadataBase: new URL('https://www.meupetpoint.com.br'),
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    keywords: specialty.keywords,
    authors: [{ name: 'PetPoint Hospital Veterinário' }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://www.meupetpoint.com.br/blog/especialidades/${specialty.slug}`,
    },
    openGraph: {
      title: specialty.metaTitle,
      description: specialty.metaDescription,
      url: `https://www.meupetpoint.com.br/blog/especialidades/${specialty.slug}`,
      images: [
        {
          url: specialty.ogImage,
          width: 1200,
          height: 630,
          alt: specialty.heroAlt,
        },
      ],
      type: 'article',
      locale: 'pt_BR',
      siteName: 'PetPoint',
    },
    twitter: {
      card: 'summary_large_image',
      title: specialty.metaTitle,
      description: specialty.metaDescription,
      images: [specialty.ogImage],
    },
    other: {
      'geo.region': 'BR-SC',
      'geo.placename': 'Morro da Fumaça',
      'geo.position': '-28.6489;-49.2069',
    },
  };
}

/* ── Author helpers ─────────────────────────────────────────────────────── */

const authorMap = {
  vinicius: {
    name: 'Dr. Vinicius Wischneski',
    role: 'Médico Veterinário — Oncologia e Cirurgia',
    crmv: 'CRMV-SC 8434',
    id: 'https://www.meupetpoint.com.br/#vinicius',
  },
  nathalia: {
    name: 'Dra. Nathalia',
    role: 'Médica Veterinária — Clínica Geral e Anestesia',
    crmv: 'CRMV-SC 14519',
    id: 'https://www.meupetpoint.com.br/#nathalia',
  },
  larissa: {
    name: 'Dra. Larissa Wischneski',
    role: 'Médica Veterinária — Odontologia Veterinária',
    crmv: '',
    id: 'https://www.meupetpoint.com.br/#larissa',
  },
  equipe: {
    name: 'Equipe PetPoint',
    role: 'Hospital Veterinário',
    crmv: '',
    id: 'https://www.meupetpoint.com.br/#business',
  },
};

/* ── Page Component ─────────────────────────────────────────────────────── */

export default async function EspecialidadePage({ params }: Props) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) notFound();

  const author = authorMap[specialty.author];
  const publishedDate = '2026-07-14';
  const canonicalUrl = `https://www.meupetpoint.com.br/blog/especialidades/${specialty.slug}`;

  /* ── Structured Data ──────────────────────────────────────────────────── */

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meupetpoint.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Especialidades', item: 'https://www.meupetpoint.com.br/blog/especialidades' },
          { '@type': 'ListItem', position: 3, name: specialty.title, item: canonicalUrl },
        ],
      },
      // MedicalWebPage (AEO: speakable para AI search)
      {
        '@type': 'MedicalWebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: specialty.metaTitle,
        description: specialty.metaDescription,
        datePublished: publishedDate,
        dateModified: publishedDate,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': 'https://www.meupetpoint.com.br/#website' },
        about: { '@id': 'https://www.meupetpoint.com.br/#business' },
        author: { '@id': author.id },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#artigo-intro', '#artigo-o-que-e', '#artigo-quando'],
        },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Caregiver' },
      },
      // Service (LocalBusiness cross-reference)
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: specialty.title,
        description: specialty.metaDescription,
        serviceType: specialty.category,
        provider: { '@id': 'https://www.meupetpoint.com.br/#business' },
        areaServed: {
          '@type': 'City',
          name: 'Morro da Fumaça',
          addressCountry: 'BR',
        },
        url: canonicalUrl,
      },
      // FAQPage (AEO: aparece em featured snippets e AI answers)
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: specialty.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="relative h-[55vh] min-h-[420px] overflow-hidden bg-brand-900">
        <img
          src={specialty.image}
          alt={specialty.heroAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent" />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-14 z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/especialidades" className="hover:text-white transition-colors">Especialidades</Link>
            <span>/</span>
            <span className="text-white/70">{specialty.title}</span>
          </nav>

          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent-500 text-white rounded-full w-fit">
            {specialty.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            {specialty.title}
          </h1>
          <p className="text-white/60 text-base mt-3">{specialty.subtitle}</p>
        </div>
      </header>

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <article className="container mx-auto px-6 py-16 max-w-3xl">

        {/* Intro */}
        <p
          id="artigo-intro"
          className="text-xl text-brand-gray leading-relaxed mb-12 font-medium"
        >
          {specialty.intro}
        </p>

        {/* O que é */}
        <section id="artigo-o-que-e" className="mb-12">
          <h2 className="font-serif text-3xl text-brand-black mb-4">
            O que é {specialty.title.toLowerCase()}
          </h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            {specialty.whatIs}
          </p>
        </section>

        {/* Quando buscar */}
        <section id="artigo-quando" className="mb-12 bg-brand-50 rounded-2xl p-8">
          <h2 className="font-serif text-2xl text-brand-black mb-6">
            Quando o seu pet precisa desse atendimento
          </h2>
          <ul className="space-y-3">
            {specialty.whenToSeek.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-brand-gray leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Como fazemos */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl text-brand-black mb-4">
            Como é feito na PetPoint
          </h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            {specialty.howWeDoIt}
          </p>
        </section>

        {/* Author card */}
        <div className="border border-brand-100 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
            <span className="text-accent-600 font-bold text-sm">
              {author.name.split(' ')[0][0]}{author.name.split(' ').slice(-1)[0][0]}
            </span>
          </div>
          <div>
            <p className="font-semibold text-brand-black text-sm">{author.name}</p>
            <p className="text-brand-gray text-xs">{author.role}</p>
            {author.crmv && (
              <p className="text-brand-gray/50 text-xs mt-0.5">{author.crmv}</p>
            )}
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="bg-brand-900 rounded-2xl p-8 text-center mb-16">
          <h2 className="font-serif text-2xl text-white mb-3">
            Quer saber mais sobre {specialty.title.toLowerCase()}?
          </h2>
          <p className="text-white/60 text-sm mb-6">
            A equipe da PetPoint está disponível para tirar dúvidas e agendar o atendimento do seu pet.
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

        {/* FAQ */}
        <section aria-labelledby="faq-titulo" className="mb-12">
          <h2
            id="faq-titulo"
            className="font-serif text-3xl text-brand-black mb-8"
          >
            Perguntas frequentes
          </h2>
          <div className="space-y-6">
            {specialty.faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-100 pb-6 last:border-0">
                <h3 className="font-semibold text-brand-black mb-2 text-lg leading-snug">
                  {faq.question}
                </h3>
                <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-brand-100">
          <Link
            href="/blog/especialidades"
            className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas as especialidades
          </Link>
          <Link
            href="/#clinica"
            className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors"
          >
            Voltar para a clínica
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
