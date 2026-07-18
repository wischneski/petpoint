/**
 * lib/authors.ts — Author Profile Lookup
 *
 * Mapeia o campo `author` do frontmatter (texto livre) para o avatar e
 * cargo exibidos na bio ao final do artigo. Reflete os mesmos membros
 * e imagens já usados em components/Team.tsx.
 */

export interface AuthorProfile {
  image: string;
  role: string;
}

const AUTHOR_PROFILES: Record<string, AuthorProfile> = {
  'Dra. Nathalia': { image: '/images/team/nat.webp', role: 'Anestesia e Clínica Geral' },
  'Dr. Vinicius Wischneski': { image: '/images/team/vini.webp', role: 'Diretor Clínico' },
  'Dra. Larissa Wischneski': { image: '/images/team/larissa.png', role: 'Odontologia Veterinária' },
};

export function getAuthorProfile(author: string): AuthorProfile | null {
  return AUTHOR_PROFILES[author] ?? null;
}
