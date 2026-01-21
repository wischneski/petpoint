import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy loading para componentes below-the-fold
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Team = lazy(() => import('./components/Team'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));

// Fallback de loading simples
const LoadingSection = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent-500/20 border-t-accent-500 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        {/* Hero sempre carregado (above-the-fold) */}
        <Hero />

        {/* Componentes lazy loaded com Suspense */}
        <Suspense fallback={<LoadingSection />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <Team />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <Testimonials />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;