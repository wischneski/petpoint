import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import './globals.css';

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
    images: [{ url: 'https://www.meupetpoint.com.br/images/meta/og-image.webp' }],
    url: 'https://www.meupetpoint.com.br/',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'PetPoint',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PetPoint | Hospital Veterinário & Estética',
    description: 'Medicina de ponta e cuidado real para seu pet em Morro da Fumaça/SC',
    images: ['https://www.meupetpoint.com.br/images/meta/og-image.webp'],
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'VeterinaryCare'],
  '@id': 'https://www.meupetpoint.com.br/#business',
  name: 'PetPoint Hospital Veterinário & Estética',
  image: 'https://www.meupetpoint.com.br/images/meta/logo.webp',
  description:
    'Clínica veterinária de excelência em Morro da Fumaça/SC. Medicina de ponta, estética especializada e petshop premium.',
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
  url: 'https://www.meupetpoint.com.br',
  telephone: '+55-48-99912-0084',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Dr. Vinicius Wischneski',
      jobTitle: 'Diretor Clínico — Oncologia e Cirurgia de Pequenos Animais',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'CRMV-SC 8434',
      },
    },
    {
      '@type': 'Person',
      name: 'Dra. Nathalia',
      jobTitle: 'Anestesia e Clínica Geral',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'CRMV-SC 14519',
      },
    },
  ],
  sameAs: ['https://instagram.com/petpointanimal'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
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
      name: 'Quais animais são atendidos na clínica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos cães, gatos e pequenos animais em todas as especialidades: clínica geral, cirurgia de pequenos animais, oncologia, odontologia veterinária e vacinação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso acompanhar meu pet durante a consulta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Tutores são bem-vindos durante a consulta clínica. Em procedimentos cirúrgicos, a equipe mantém o tutor informado em todos os momentos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre a PetPoint e uma clínica comum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PetPoint reúne em um único espaço: clínica veterinária com corpo clínico especializado em oncologia e cirurgia, centro de estética com trato humanizado e petshop premium.',
      },
    },
    {
      '@type': 'Question',
      name: 'A clínica realiza cirurgias de alta complexidade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A PetPoint é a única clínica de Morro da Fumaça com capacidade cirúrgica para procedimentos de alta complexidade, incluindo oncologia e cirurgias gerais de pequenos animais.',
      },
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#CF2E78" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
