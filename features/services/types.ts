/**
 * features/services/types.ts — Service Pillars Domain Types
 *
 * Os 3 pilares exibidos nos cards "Soluções Completas para o Bem-Estar"
 * (components/Services.tsx). Clínica já tem conteúdo rico e um hub próprio
 * em /blog/especialidades — aqui ela só aponta pra lá via `href`. Estética
 * e PetShop ganham artigos próprios em /blog/estetica e /blog/petshop.
 */

import type { LucideIcon } from 'lucide-react';

export interface ServicePillar {
  slug: string;
  title: string;
  description: string; // usado no card da home
  href: string;         // destino do botão "Explorar"
  image: string;
  icon: LucideIcon;
}
