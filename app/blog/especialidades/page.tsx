import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { specialties } from '@/features/especialidades/data';
import { BlogSectionTabs } from '@/features/blog/components/BlogSectionTabs';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meupetpoint.com.br'),
  title: 'Nossas Especialidades | PetPoint Hospital Veterinário Morro da Fumaça',
  description:
    'Conheça todas as especialidades médicas da PetPoint em Morro da Fumaça/SC: clínica geral, oncologia, odontologia, vacinação, diagnóstico por imagem, endoscopia, eletroquimioterapia e urgências.',
  keywords: [
    'especialidades veterinárias',
    'clínica veterinária morro da fumaça',
    'serviços veterinários sc',
    'oncologia veterinária',
    'odontologia veterinária',
    'diagnóstico por imagem pet',
  ],
  alternates: { canonical: 'https://www.meupetpoint.com.br/blog/especialidades' },
  openGraph: {
    title: 'Especialidades | PetPoint Hospital Veterinário',
    description: 'Medicina veterinária especializada em Morro da Fumaça/SC.',
    url: 'https://www.meupetpoint.com.br/blog/especialidades',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'PetPoint',
  },
  other: {
    'geo.region': 'BR-SC',
    'geo.placename': 'Morro da Fumaça',
    'geo.position': '-28.6489;-49.2069',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meupetpoint.com.br/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.meupetpoint.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Especialidades', item: 'https://www.meupetpoint.com.br/blog/especialidades' },
  ],
};

export default function EspecialidadesHubPage() {
  return (
    <main className="min-h-screen bg-brand-silver">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-900/30 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/70">Especialidades</span>
          </nav>
          <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Medicina Veterinária
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-4">
            Nossas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              Especialidades
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Da consulta preventiva ao procedimento mais complexo. Uma equipe médica preparada para cuidar do seu pet em todas as fases da vida.
          </p>
        </div>
      </header>

      <BlogSectionTabs active="especialidades" />

      {/* Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              href={`/blog/especialidades/${specialty.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.heroAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold tracking-widest uppercase bg-accent-500 text-white rounded">
                  {specialty.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-serif text-xl text-brand-black mb-2 group-hover:text-accent-500 transition-colors">
                  {specialty.title}
                </h2>
                <p className="text-brand-gray text-sm leading-relaxed line-clamp-2">
                  {specialty.intro.slice(0, 110)}...
                </p>
                <div className="flex items-center gap-2 mt-4 text-accent-500 text-xs font-bold uppercase tracking-widest">
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-16 text-center">
          <Link
            href="/#clinica"
            className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página principal
          </Link>
        </div>
      </section>
    </main>
  );
}
