import React, { Suspense, lazy } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import ServiceBar from '../components/ServiceBar';
import About from '../components/About';

const Services     = lazy(() => import('../components/Services'));
const Estetica     = lazy(() => import('../components/Estetica'));
const PetShop      = lazy(() => import('../components/PetShop'));
const Clinica      = lazy(() => import('../components/Clinica'));
const Team         = lazy(() => import('../components/Team'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ          = lazy(() => import('../components/FAQ'));
const Blog         = lazy(() => import('../components/Blog'));
const Contato      = lazy(() => import('../components/Contato'));
const Footer       = lazy(() => import('../components/Footer'));

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceBar />
        <About />
        <Suspense fallback={<div className="min-h-[400px] bg-white" />}>
          <Services />
          <Estetica />
          <PetShop />
          <Clinica />
          <Team />
          <Testimonials />
          <FAQ />
          <Blog />
          <Contato />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
