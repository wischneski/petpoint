'use client';

import { Suspense, lazy } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import ServiceBar from '@/components/ServiceBar';
import About from '@/components/About';
import type { BlogPostMeta } from '@/features/blog/types';

const Services     = lazy(() => import('@/components/Services'));
const Estetica     = lazy(() => import('@/components/Estetica'));
const PetShop      = lazy(() => import('@/components/PetShop'));
const Clinica      = lazy(() => import('@/components/Clinica'));
const Team         = lazy(() => import('@/components/Team'));
const Blog         = lazy(() => import('@/components/Blog'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ          = lazy(() => import('@/components/FAQ'));
const Insta        = lazy(() => import('@/components/Insta'));
const Contato      = lazy(() => import('@/components/Contato'));
const Footer       = lazy(() => import('@/components/Footer'));

interface HomePageProps {
  posts: BlogPostMeta[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceBar />
        <About />
        <Suspense fallback={<div className="min-h-100 bg-white" />}>
          <Services />
          <Estetica />
          <PetShop />
          <Clinica />
          <Team />
          <Blog posts={posts} />
          <Testimonials />
          <FAQ />
          <Insta />
          <Contato />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
