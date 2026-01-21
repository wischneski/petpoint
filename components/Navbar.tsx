import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Medicina Veterinária', href: '#authority' },
  { label: 'Estética', href: '#services' },
  { label: 'PetShop', href: '#services' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <div className="relative flex items-center">
             {/* Logo Construction based on image provided */}
             <span className={`font-serif italic text-3xl md:text-4xl pr-1 transition-colors ${isScrolled ? 'text-accent-500' : 'text-accent-500'}`}>
               Pet
             </span>
             <MapPin className={`w-5 h-5 md:w-6 md:h-6 mb-2 -ml-1 ${isScrolled ? 'text-accent-500' : 'text-accent-500'} fill-current`} />
             <span className={`font-sans font-black text-2xl md:text-3xl tracking-tighter uppercase transition-colors ${isScrolled ? 'text-brand-600' : 'text-white md:text-brand-600 lg:text-white'}`}>
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
              className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                isScrolled ? 'text-brand-gray' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 ${
              isScrolled
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
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-black' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
            href="#contact"
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