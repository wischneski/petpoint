import React from 'react';
import { Stethoscope, Scissors, ShoppingBag, MessageCircle, ArrowUpRight } from 'lucide-react';

const items = [
  {
    icon: Stethoscope,
    label: 'Clínica Veterinária',
    desc: 'Consultas, vacinas e exames',
    href: '#clinica',
    accent: '#CF2E78',
    bg: 'rgba(207,46,120,0.12)',
  },
  {
    icon: Scissors,
    label: 'Centro de Estética',
    desc: 'Banho, tosa e bem-estar',
    href: '#estetica',
    accent: '#4A6CF7',
    bg: 'rgba(74,108,247,0.12)',
  },
  {
    icon: ShoppingBag,
    label: 'PetShop Premium',
    desc: 'Rações, acessórios e mais',
    href: '#petshop',
    accent: '#CF2E78',
    bg: 'rgba(207,46,120,0.12)',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Atendimento imediato',
    href: 'https://wa.me/554899120084',
    accent: '#22c55e',
    bg: 'rgba(34,197,94,0.12)',
    external: true,
  },
];

const ServiceBar: React.FC = () => {
  return (
    <div className="relative z-20 -mt-1 bg-brand-900">
      <div className="container mx-auto px-6">
        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === items.length - 1;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className={`group relative flex items-center gap-4 px-6 py-7 transition-all duration-300
                  ${!isLast ? 'border-r border-white/[0.06]' : ''}
                  hover:bg-white/[0.03]`}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.bg }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: item.accent }}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white leading-tight truncate">
                    {item.label}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5 leading-tight truncate">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="absolute right-4 top-4 w-3.5 h-3.5 text-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: item.accent }}
                />

                {/* Bottom accent line on hover */}
                <span
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${item.accent}60, transparent)` }}
                />
              </a>
            );
          })}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default ServiceBar;
