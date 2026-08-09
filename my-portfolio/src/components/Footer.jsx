import React from 'react';
import { Code2, User, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 py-8 bg-[#0b0e11]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side Info */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold text-white tracking-wide">Build the Future.</p>
          <p className="text-[11px] font-mono text-zinc-500 mt-1">
            Software Engineering Portfolio © 2024
          </p>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 text-zinc-500">
          <Code2 className="w-4 h-4 hover:text-emerald-400 transition-colors cursor-pointer" />
          <User className="w-4 h-4 hover:text-emerald-400 transition-colors cursor-pointer" />
          <Globe className="w-4 h-4 hover:text-emerald-400 transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;