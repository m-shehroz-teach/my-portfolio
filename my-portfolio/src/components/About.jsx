import React from 'react';
import { motion } from 'framer-motion';
import shehrozImg from '../assets/Shehroz.png';

const FileTextIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const AcademicCapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          About Me
        </h2>
        <div className="h-1 w-12 bg-blue-500 rounded mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content (Bio, Education, Experience) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Bio */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                <FileTextIcon />
              </div>
              <h3 className="text-lg font-bold text-blue-400">Bio</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed pl-11">
              Computer Science graduate with experience building responsive and scalable web applications using React, Node.js, and modern tech stacks. Skilled in turning complex UI/UX designs into pixel-perfect, high-performing code with a strong focus on clean architecture and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                  <AcademicCapIcon />
                </div>
                <h3 className="text-lg font-bold text-blue-400">Education</h3>
              </div>
              <div className="space-y-4 pl-11">
                <div>
                  <h4 className="text-sm font-semibold text-white">BS in Computer Science</h4>
                  <p className="text-xs text-zinc-400">MNS University of Agriculture</p>
                  <p className="text-[11px] font-mono text-zinc-500">2022 - 2026</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                  <BriefcaseIcon />
                </div>
                <h3 className="text-lg font-bold text-blue-400">Experience</h3>
              </div>
              <div className="space-y-4 pl-11">
                <div>
                  <h4 className="text-sm font-semibold text-white">Frontend Developer</h4>
                  <p className="text-xs text-zinc-400">Freelance</p>
                  <p className="text-[11px] font-mono text-zinc-500">2025 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Card Profile */}
        <div className="lg:col-span-4 flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-zinc-700 mb-4 shadow-xl">
            <img
              src={shehrozImg}
              alt="Muhammad Shehroz"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1 font-display">Muhammad Shehroz</h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mb-6">
            Frontend Developer | Creating High-Performance, Modern Web Applications
          </p>

          {/* Updated Resume Link */}
          <a
            href="/Shehroz_Resume.pdf"
            download="Shehroz_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-300"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;