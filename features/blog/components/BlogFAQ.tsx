/**
 * components/BlogFAQ.tsx — Article FAQ Section
 *
 * Seção de perguntas frequentes ao final do artigo. Mesma estrutura visual
 * usada em app/blog/especialidades/[slug]/page.tsx, para manter consistência.
 * O schema FAQPage correspondente é gerado em app/blog/[slug]/page.tsx a
 * partir dos mesmos dados (post.faqs).
 */

import type { BlogFAQ as BlogFAQItem } from '../types';

interface BlogFAQProps {
  faqs: BlogFAQItem[];
}

export function BlogFAQ({ faqs }: BlogFAQProps) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq-titulo" className="mt-14 pt-10 border-t border-brand-100">
      <h2 id="faq-titulo" className="font-serif text-3xl text-brand-black mb-8">
        Perguntas frequentes
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-brand-100 pb-6 last:border-0">
            <h3 className="font-semibold text-brand-black mb-2 text-lg leading-snug">{faq.question}</h3>
            <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
