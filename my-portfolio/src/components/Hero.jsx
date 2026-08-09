import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const DiscordIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.127c-.598.35-1.22.649-1.873.893a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const Hero = () => {
  const adjectives = ["A Dedicated", "An Amazing", "A Passionate", "A Creative"];
  const [adjIndex, setAdjIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdjIndex((prev) => (prev + 1) % adjectives.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center text-center relative px-4 py-20 overflow-hidden">
      <div className="h-[4.5rem] sm:h-[6rem] lg:h-[7rem] flex items-center justify-center overflow-hidden mb-2">
        <AnimatePresence mode="wait">
          <motion.h2
            key={adjIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-display tracking-tight"
          >
            {adjectives[adjIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 font-display"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
          Front-End Developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-10 px-4"
      >
        Hi <span className="inline-block animate-bounce">👋</span>, My name is{' '}
        <span className="text-white font-medium">Muhammad Shehroz</span>, and I specialize in building high-performance web applications and software solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-6 mb-16"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-300"
        >
          View Projects
        </motion.a>

        <div className="hidden sm:block w-[1px] h-8 bg-zinc-800" />

        <div className="flex items-center gap-5 text-zinc-400">
          <motion.a whileHover={{ y: -3, color: '#ffffff' }} href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </motion.a>
          <motion.a whileHover={{ y: -3, color: '#0077b5' }} href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </motion.a>
          <motion.a whileHover={{ y: -3, color: '#e1306c' }} href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </motion.a>
          <motion.a whileHover={{ y: -3, color: '#5865f2' }} href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord">
            <DiscordIcon />
          </motion.a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center gap-2 group cursor-pointer"
      >
        <div className="w-7 h-12 border-2 border-blue-500/60 rounded-full flex justify-center items-end pb-2 group-hover:border-blue-400 transition-colors">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="text-pink-500 text-xs font-bold"
          >
            ↓
          </motion.span>
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;