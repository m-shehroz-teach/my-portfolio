import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import portfolioImg from '../assets/Portfolio.png';
import localHubImg from '../assets/LocalHub.png';
import libraryImg from '../assets/Library.png';

const GithubIcon = ({ size = 14 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 1,
    category: 'Web Application',
    title: 'DOCONNECT',
    description:
      'A comprehensive web platform featuring role-based JWT authentication, real-time chat functionality, and a highly responsive user interface.',
    tags: ['React', 'Node', 'MongoDB', 'Socket'],
  },
  {
    id: 2,
    category: 'Desktop Software',
    title: 'ACCOUNTING SYS',
    description:
      'A robust desktop application for financial management, featuring modules for fee collection, payroll management, and report generation.',
    tags: ['C#', 'SQL Server', 'WinForms', 'RDLC'],
  },
  {
    id: 3,
    category: 'Hardware/IoT',
    title: 'IOT COLOR DETECTION',
    description:
      'An embedded system project utilizing real-time sensor logic to detect and process colors, combining hardware interfaces with algorithms.',
    tags: ['Arduino', 'Python', 'TCS3200', 'C++'],
  },
  {
    id: 4,
    category: 'Web Application',
    title: 'My Portfolio',
    description:
      'A personal developer portfolio website designed with sleek dark mode aesthetics, interactive 3D elements, smooth framer-motion animations, and responsive tailwind layout.',
    image: portfolioImg,
    github: 'https://github.com/m-shehroz-teach/my-portfolio',
    demo: 'https://my-portfolio-m-shehroz-teach.vercel.app/',
    tags: ['React', 'Framer Motion', 'TailwindCSS', 'Vite'],
  },
  {
    id: 5,
    category: 'Web Application',
    title: 'LocalDrop',
    description:
      'A modern local file sharing hub allowing seamless peer-to-peer file transfers and collaboration over local networks.',
    image: localHubImg,
    github: 'https://github.com/m-shehroz-teach/localhub',
    demo: 'https://localhub-ten.vercel.app/',
    tags: ['React', 'Vite', 'TailwindCSS', 'P2P'],
  },
  {
    id: 6,
    category: 'Web Application',
    title: 'Codex Archives',
    description:
      'A premium, real-time library management system providing robust book cataloging, transaction management, real-time circulation updates (via Pusher), and printable administrative reports.',
    image: libraryImg,
    github: 'https://github.com/m-shehroz-teach/library-management-system',
    demo: 'https://client-sigma-hazel.vercel.app',
    tags: ['React', 'Node.js', 'MongoDB', 'Pusher', 'TailwindCSS'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Projects
        </h2>
        <div className="h-1 w-12 bg-blue-500 rounded mt-2" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              borderColor: 'rgba(59, 130, 246, 0.5)',
              boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.15), 0 10px 10px -5px rgba(59, 130, 246, 0.05)',
            }}
            className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/80 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group cursor-pointer"
          >
            <div>
              {project.image && (
                <div className="overflow-hidden rounded-lg mb-4 aspect-video bg-zinc-950/50 border border-zinc-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <span className="text-xs font-mono text-blue-400 block mb-1 group-hover:text-blue-300 transition-colors">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4 group-hover:text-zinc-300 transition-colors">
                {project.description}
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 pt-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800 group-hover:border-zinc-700 px-2 py-0.5 rounded transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="flex gap-4 pt-3 border-t border-zinc-800/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;