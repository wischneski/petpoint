/**
 * app/sitemap.ts — Dynamic Sitemap
 *
 * Gera o sitemap.xml em build time (compatível com output: 'export').
 * Substitui o antigo public/sitemap.xml, que só listava a homepage —
 * as rotas do blog e das especialidades não eram descobertas pelo
 * Google/crawlers de IA por não estarem no sitemap.
 *
 * Puxa slugs dinamicamente de getAllPostSlugs()/getAllSpecialtySlugs(),
 * então novos artigos/especialidades entram automaticamente no próximo build.
 */

import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/features/blog/lib/mdx';
import { getAllSpecialtySlugs } from '@/features/especialidades/data';

const BASE_URL = 'https://www.meupetpoint.com.br';
type SitemapEntry = MetadataRoute.Sitemap[number];

// Necessário com output: 'export' — sem isso o Next.js recusa gerar a rota
// em build estático (exige declarar explicitamente que não é dinâmica).
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const specialtySlugs = getAllSpecialtySlugs();

  const staticRoutes: SitemapEntry[] = [
    {
      url: BASE_URL,
      lastModified: '2026-06-01',
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${BASE_URL}/images/fachada.webp`,
        `${BASE_URL}/images/services/clinica.webp`,
        `${BASE_URL}/images/services/estetica.webp`,
        `${BASE_URL}/images/services/petshop.webp`,
        `${BASE_URL}/images/clinica/interior.webp`,
        `${BASE_URL}/images/team/vini.webp`,
        `${BASE_URL}/images/team/nat.webp`,
        `${BASE_URL}/images/meta/logo.webp`,
      ],
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/caes`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/gatos`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/especialidades`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/estetica`,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${BASE_URL}/images/services/estetica.webp`],
    },
    {
      url: `${BASE_URL}/blog/petshop`,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${BASE_URL}/images/services/petshop.webp`],
    },
  ];

  const specialtyRoutes: SitemapEntry[] = specialtySlugs.map(({ slug }) => ({
    url: `${BASE_URL}/blog/especialidades/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const postRoutes: SitemapEntry[] = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.6,
    ...(post.coverImage.includes('placeholder') ? {} : { images: [`${BASE_URL}${post.coverImage}`] }),
  }));

  return [...staticRoutes, ...specialtyRoutes, ...postRoutes];
}
