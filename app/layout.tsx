import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import { Great_Vibes } from 'next/font/google';
import Script from 'next/script';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import './globals.css';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const inter = localFont({
  src: [
    { path: '../public/fonts/inter-400-normal-latin.woff2',     weight: '400', style: 'normal' },
    { path: '../public/fonts/inter-500-normal-latin.woff2',     weight: '500', style: 'normal' },
    { path: '../public/fonts/inter-600-normal-latin.woff2',     weight: '600', style: 'normal' },
    { path: '../public/fonts/inter-700-normal-latin.woff2',     weight: '700', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'optional',
  preload: true,
});

const playfair = localFont({
  src: [
    { path: '../public/fonts/playfair-display-400-normal-latin.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/playfair-display-400-italic-latin.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/playfair-display-700-italic-latin.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-playfair',
  display: 'optional',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meupetpoint.com.br'),
  title: 'PetPoint | Hospital Veterinário & Estética em Morro da Fumaça/SC',
  description:
    'Clínica veterinária de excelência em Morro da Fumaça. Medicina de ponta, estética especializada e petshop premium. Corpo clínico qualificado, plantão 24h para emergências.',
  keywords: [
    'veterinário morro da fumaça',
    'clínica veterinária',
    'hospital veterinário',
    'estética pet',
    'petshop',
    'banho e tosa',
    'cirurgia veterinária',
    'emergência pet',
  ],
  authors: [{ name: 'PetPoint Hospital Veterinário' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.meupetpoint.com.br/',
  },
  openGraph: {
    title: 'PetPoint | Hospital Veterinário & Estética',
    description:
      'Medicina de ponta e cuidado real para seu pet. A melhor clínica veterinária de Morro da Fumaça/SC.',
    images: [{ url: '/images/meta/og-image.webp', width: 1200, height: 630, alt: 'PetPoint Hospital Veterinário e Estética' }],
    url: 'https://www.meupetpoint.com.br/',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'PetPoint',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PetPoint | Hospital Veterinário & Estética',
    description: 'Medicina de ponta e cuidado real para seu pet em Morro da Fumaça/SC',
    images: ['/images/meta/og-image.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'geo.region': 'BR-SC',
    'geo.placename': 'Morro da Fumaça',
    'geo.position': '-28.6489;-49.2069',
  },
};

// ─── Schema @graph unificado ────────────────────────────────────────────────
// Único <script type="application/ld+json"> com todos os schemas interligados.
// @id cross-links permitem que IAs e motores de busca entendam as relações.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [

    // WebSite — referenciado por isPartOf em páginas de artigo/especialidade
    {
      '@type': 'WebSite',
      '@id': 'https://www.meupetpoint.com.br/#website',
      url: 'https://www.meupetpoint.com.br',
      name: 'PetPoint Hospital Veterinário & Estética',
      inLanguage: 'pt-BR',
      publisher: { '@id': 'https://www.meupetpoint.com.br/#business' },
    },

    // LocalBusiness + VeterinaryCare
    {
      '@type': ['LocalBusiness', 'VeterinaryCare'],
      '@id': 'https://www.meupetpoint.com.br/#business',
      name: 'PetPoint Hospital Veterinário & Estética',
      alternateName: 'PetPoint',
      description:
        'Clínica veterinária de excelência em Morro da Fumaça/SC. Medicina de ponta, estética especializada e petshop premium com +14 anos de atuação.',
      image: 'https://www.meupetpoint.com.br/images/meta/og-image.webp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.meupetpoint.com.br/images/meta/logo.webp',
      },
      url: 'https://www.meupetpoint.com.br',
      telephone: '+55-48-99912-0084',
      priceRange: '$$',
      foundingDate: '2012',
      slogan: 'Amor com Precisão',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Teresa Mariana de Jesus, 135 - Centro',
        addressLocality: 'Morro da Fumaça',
        addressRegion: 'SC',
        postalCode: '88830-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-28.6489',
        longitude: '-49.2069',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:30',
          closes: '18:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '07:30',
          closes: '12:00',
        },
      ],
      employee: [
        { '@id': 'https://www.meupetpoint.com.br/#vinicius' },
        { '@id': 'https://www.meupetpoint.com.br/#nathalia' },
        { '@id': 'https://www.meupetpoint.com.br/#larissa' },
      ],
      sameAs: ['https://instagram.com/petpointanimal'],
      hasMap: 'https://maps.google.com/?q=-28.6489,-49.2069',
      dateModified: '2026-06-01',
    },

    // Organization (para E-E-A-T e Knowledge Panel)
    {
      '@type': 'Organization',
      '@id': 'https://www.meupetpoint.com.br/#organization',
      name: 'PetPoint Hospital Veterinário & Estética',
      url: 'https://www.meupetpoint.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.meupetpoint.com.br/images/meta/logo.webp',
      },
      sameAs: ['https://instagram.com/petpointanimal'],
      member: [
        { '@id': 'https://www.meupetpoint.com.br/#vinicius' },
        { '@id': 'https://www.meupetpoint.com.br/#nathalia' },
        { '@id': 'https://www.meupetpoint.com.br/#larissa' },
      ],
      dateModified: '2026-06-01',
    },

    // Person — Dr. Vinicius Wischneski (autor especialista para GEO/E-E-A-T)
    {
      '@type': 'Person',
      '@id': 'https://www.meupetpoint.com.br/#vinicius',
      name: 'Dr. Vinicius Wischneski',
      jobTitle: 'Diretor Clínico — Médico Veterinário',
      description:
        'Médico Veterinário especialista em Oncologia e Cirurgia de Pequenos Animais. Diretor Clínico da PetPoint com registro CRMV-SC 8434.',
      image: 'https://www.meupetpoint.com.br/images/team/vini.webp',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Registro Profissional',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Conselho Regional de Medicina Veterinária de Santa Catarina',
          alternateName: 'CRMV-SC',
        },
        identifier: 'CRMV-SC 8434',
      },
      knowsAbout: [
        'Oncologia Veterinária',
        'Cirurgia de Pequenos Animais',
        'Clínica Veterinária Geral',
        'Diagnóstico Clínico Veterinário',
        'Medicina Veterinária Preventiva',
        'Saúde Animal',
      ],
      worksFor: { '@id': 'https://www.meupetpoint.com.br/#business' },
      dateModified: '2026-06-01',
    },

    // Person — Dra. Nathalia
    {
      '@type': 'Person',
      '@id': 'https://www.meupetpoint.com.br/#nathalia',
      name: 'Dra. Nathalia',
      jobTitle: 'Médica Veterinária — Anestesia e Clínica Geral',
      image: 'https://www.meupetpoint.com.br/images/team/nat.webp',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Registro Profissional',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Conselho Regional de Medicina Veterinária de Santa Catarina',
          alternateName: 'CRMV-SC',
        },
        identifier: 'CRMV-SC 14519',
      },
      knowsAbout: [
        'Anestesiologia Veterinária',
        'Clínica Geral Veterinária',
        'Medicina Interna Veterinária',
      ],
      worksFor: { '@id': 'https://www.meupetpoint.com.br/#business' },
      dateModified: '2026-06-01',
    },

    // Person — Dra. Larissa Wischneski
    {
      '@type': 'Person',
      '@id': 'https://www.meupetpoint.com.br/#larissa',
      name: 'Dra. Larissa Wischneski',
      jobTitle: 'Médica Veterinária — Odontologia Veterinária',
      image: 'https://www.meupetpoint.com.br/images/team/larissa.png',
      knowsAbout: [
        'Odontologia Veterinária',
        'Clínica Geral Veterinária',
      ],
      worksFor: { '@id': 'https://www.meupetpoint.com.br/#business' },
      dateModified: '2026-06-01',
    },

    // FAQPage — sincronizado com o componente FAQ.tsx (6 perguntas)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.meupetpoint.com.br/#faq',
      dateModified: '2026-06-01',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'A PetPoint atende emergências sem agendamento prévio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A PetPoint possui atendimento de urgências e emergências sem necessidade de agendamento prévio. Entre em contato pelo WhatsApp (48) 99912-0084 para orientação imediata.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais animais são atendidos na clínica veterinária PetPoint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Atendemos cães, gatos e pequenos animais em todas as especialidades: clínica geral, cirurgia de pequenos animais, oncologia, odontologia veterinária e vacinação.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso acompanhar meu pet durante a consulta veterinária?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Tutores são bem-vindos durante a consulta clínica. Em procedimentos cirúrgicos, a equipe mantém o tutor informado em todos os momentos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a diferença entre a PetPoint e uma clínica veterinária comum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A PetPoint reúne em um único espaço: clínica veterinária com corpo clínico especializado em oncologia e cirurgia, centro de estética com trato humanizado e petshop premium — eliminando a necessidade de deslocamentos múltiplos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como funciona o serviço de banho e tosa na PetPoint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O banho e tosa é realizado com produtos Pelôncio, por profissionais treinados no manejo humanizado. Agendamento pelo WhatsApp da loja: (48) 99955-6555.',
          },
        },
        {
          '@type': 'Question',
          name: 'A PetPoint realiza cirurgias veterinárias de alta complexidade?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A PetPoint é a única clínica de Morro da Fumaça com capacidade cirúrgica para procedimentos de alta complexidade, incluindo oncologia e cirurgias gerais de pequenos animais.',
          },
        },
      ],
    },

  ],
};

const analyticsScript = `(function(){var loaded=false;function boot(){if(loaded)return;loaded=true;
  // Meta Pixel — descomentar após configurar o ID real
  // !function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  // fbq('init','SEU_PIXEL_ID'); fbq('track','PageView');

  // Google Analytics 4 — descomentar após configurar o ID real
  // var s=document.createElement('script');s.async=true;
  // s.src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  // document.head.appendChild(s);
  // window.dataLayer=window.dataLayer||[];
  // function gtag(){dataLayer.push(arguments);} gtag('js',new Date()); gtag('config','G-XXXXXXXXXX');
}
['scroll','click','touchstart','keydown'].forEach(function(e){document.addEventListener(e,boot,{once:true,passive:true});});
setTimeout(boot,5000);})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <head>
        <meta name="theme-color" content="#CF2E78" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: '{"prefetch":[{"source":"document","eagerness":"moderate"}]}',
          }}
        />
      </head>
      <body className="bg-brand-silver text-brand-gray selection:bg-accent-500 selection:text-white">
        <ErrorBoundary>{children}</ErrorBoundary>
        <Script id="analytics" strategy="afterInteractive">
          {analyticsScript}
        </Script>
      </body>
    </html>
  );
}
