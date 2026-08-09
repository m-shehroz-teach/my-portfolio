import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      {/* Global Background Grid and Glow Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;