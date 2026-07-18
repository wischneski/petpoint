'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Medicina Veterinária', href: '/#authority' },
  { label: 'Estética', href: '/#services' },
  { label: 'PetShop', href: '/#services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Localização', href: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 group">
          <div className="relative flex items-center">
            {/* Logo Construction based on image provided */}
            <span className="font-logo-script text-4xl md:text-5xl transition-colors text-accent-500 leading-none">
              Pet
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 mx-1 text-accent-500 shrink-0"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
            <span className={`font-sans font-bold text-2xl md:text-3xl tracking-tight uppercase transition-colors ${isScrolled ? 'text-brand-600' : 'text-white md:text-brand-600 lg:text-white'}`}>
              Point
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-brand-gray hover:text-accent-500' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 ${isScrolled
              ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20'
              : 'bg-white text-brand-900 hover:bg-brand-50'
              }`}
          >
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu de navegacao"
          aria-expanded={isMobileMenuOpen}
          aria-haspopup="menu"
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-black' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '0', height: '100vh' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-brand-gray"
          >
            <X className="w-8 h-8" />
          </button>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif font-medium text-brand-black hover:text-accent-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-brand-600 text-white rounded-full text-lg font-semibold shadow-xl"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};