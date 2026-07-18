/**
 * features/services/data.ts
 *
 * Fonte única de verdade para os 3 cards de "Soluções Completas para o
 * Bem-Estar" (components/Services.tsx) e seus redirecionamentos.
 */

import { Activity, Scissors, ShoppingBag } from 'lucide-react';
import type { ServicePillar } from './types';

export const servicePillars: ServicePillar[] = [
  {
    slug: 'clinica-medica-cirurgica',
    title: 'Clínica Médica & Cirúrgica',
    description: 'Da prevenção a tratamentos complexos. Uma equipe preparada para diagnósticos rápidos e assertivos.',
    href: '/blog/especialidades',
    image: '/images/services/clinica.webp',
    icon: Activity,
  },
  {
    slug: 'centro-de-estetica',
    title: 'Centro de Estética',
    description: 'Mais que um banho, uma renovação. Utilizamos produtos premium e técnicas que reduzem o estresse.',
    href: '/blog/estetica',
    image: '/images/services/estetica.webp',
    icon: Scissors,
  },
  {
    slug: 'petshop-premium',
    title: 'PetShop Premium',
    description: 'Nutrição de alta performance, farmácia completa e acessórios selecionados para segurança e conforto.',
    href: '/blog/petshop',
    image: '/images/services/petshop.webp',
    icon: ShoppingBag,
  },
];
