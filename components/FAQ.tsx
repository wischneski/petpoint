import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'A PetPoint atende emergências sem agendamento prévio?',
    answer: 'Sim. A PetPoint possui atendimento de urgências e emergências sem necessidade de agendamento prévio. Entre em contato pelo WhatsApp (48) 99912-0084 para orientação imediata.',
  },
  {
    question: 'Quais animais são atendidos na clínica?',
    answer: 'Atendemos cães, gatos e pequenos animais em todas as especialidades: clínica geral, cirurgia de pequenos animais, oncologia, odontologia veterinária e vacinação.',
  },
  {
    question: 'Posso acompanhar meu pet durante a consulta?',
    answer: 'Sim. Tutores são bem-vindos durante a consulta clínica. Em procedimentos cirúrgicos, a equipe mantém o tutor informado em todos os momentos.',
  },
  {
    question: 'Qual a diferença entre a PetPoint e uma clínica comum?',
    answer: 'A PetPoint reúne em um único espaço: clínica veterinária com corpo clínico especializado em oncologia e cirurgia, centro de estética com touca humanizada e petshop premium — eliminando a necessidade de deslocamentos múltiplos.',
  },
  {
    question: 'Como funciona o serviço de banho e tosa?',
    answer: 'O banho e tosa é realizado com produtos Pelôncio, por profissionais treinados no manejo humanizado. Agendamento pelo WhatsApp da loja: (48) 99955-6555.',
  },
  {
    question: 'A clínica realiza cirurgias de alta complexidade?',
    answer: 'Sim. A PetPoint é a única clínica de Morro da Fumaça com capacidade cirúrgica para procedimentos de alta complexidade, incluindo oncologia e cirurgias gerais de pequenos animais.',
  },
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="py-24 bg-white below-fold">
      <div className="container mx-auto px-6 max-w-3xl">
        <Reveal width="100%">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs mb-4 block">Dúvidas Frequentes</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight">
              Perguntas <span className="italic text-brand-600">frequentes</span>
            </h2>
          </div>
        </Reveal>

        <dl className="space-y-3">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <dt>
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={openIdx === idx}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-brand-black hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="w-5 h-5 text-accent-500 shrink-0 transition-transform duration-300"
                      style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openIdx === idx ? '300px' : '0px' }}
                >
                  <p className="px-6 pb-6 text-brand-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
