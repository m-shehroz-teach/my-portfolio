import React, { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiquidEther from './components/LiquidEther';

// Code split sections below the fold to improve LCP and overall bundle size
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate Lenis raf with GSAP ticker
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Custom interception for smooth scrolling navbar links using Lenis
    const handleAnchorClick = (e) => {
      const clickTarget = e.target.closest('a');
      if (clickTarget) {
        const href = clickTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          if (targetEl) {
            lenis.scrollTo(targetEl);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // GSAP ScrollTrigger Animations for Portfolio Sections
    const sections = gsap.utils.toArray('section:not(#home)');
    sections.forEach((sec) => {
      gsap.fromTo(sec, 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
      );
    });

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  return (
    <div className="bg-[#0b0e11] text-white font-sans antialiased selection:bg-blue-500 selection:text-white relative min-h-screen">
      {/* Interactive LiquidEther Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.45 }}>
        <LiquidEther
          colors={[ '#1e3a8a', '#3b82f6', '#d946ef', '#0b0f19' ]}
          mouseForce={18}
          cursorSize={90}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={24}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.0}
          takeoverDuration={0.25}
          autoResumeDelay={2500}
          autoRampDuration={0.6}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={
          <div className="min-h-[400px] w-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        }>
          <About />
          <Projects />
          <TechStack />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;