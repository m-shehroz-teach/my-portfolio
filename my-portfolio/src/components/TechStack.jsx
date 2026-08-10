import React from 'react';

const techCategories = [
  {
    title: 'Frontend',
    level: 'Advanced',
    levelColor: 'text-emerald-400',
    description: 'Building responsive and dynamic user interfaces.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Database',
    level: 'Intermediate',
    levelColor: 'text-blue-400',
    description: 'Managing and designing efficient data storage solutions.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'Mongoose'],
  },
  {
    title: 'Tools',
    level: 'Intermediate',
    levelColor: 'text-blue-400',
    description: 'Design, coding, and productivity tools.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z" />
      </svg>
    ),
    skills: ['VS Code', 'Terminal', 'NPM', 'Prettier'],
  },
  {
    title: 'Fundamentals',
    level: 'Intermediate',
    levelColor: 'text-blue-400',
    description: 'Core web development concepts and best practices.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    skills: ['Responsive Design', 'Cross-browser Compatibility', 'Performance Optimization', 'Component-Driven Architecture'],
  },
];

const skillStyles = {
  'HTML5': { border: 'border-orange-500/20 hover:border-orange-500/60 bg-orange-950/10', text: 'text-orange-400', font: 'font-mono' },
  'CSS3': { border: 'border-blue-500/20 hover:border-blue-500/60 bg-blue-950/10', text: 'text-blue-400', font: 'font-mono' },
  'JavaScript': { border: 'border-yellow-500/20 hover:border-yellow-500/60 bg-yellow-950/10', text: 'text-yellow-400', font: 'font-mono' },
  'TypeScript': { border: 'border-sky-500/20 hover:border-sky-500/60 bg-sky-950/10', text: 'text-sky-400', font: 'font-mono' },
  'React.js': { border: 'border-cyan-400/20 hover:border-cyan-400/60 bg-cyan-950/10', text: 'text-cyan-400', font: 'font-mono font-semibold' },
  'Tailwind CSS': { border: 'border-teal-400/20 hover:border-teal-400/60 bg-teal-950/10', text: 'text-teal-400', font: 'font-mono' },
  'Framer Motion': { border: 'border-pink-500/20 hover:border-pink-500/60 bg-pink-950/10', text: 'text-pink-400', font: 'font-mono' },
  'MySQL': { border: 'border-sky-600/20 hover:border-sky-600/60 bg-sky-950/10', text: 'text-sky-400', font: 'font-mono' },
  'SQL Server': { border: 'border-red-500/20 hover:border-red-500/60 bg-red-950/10', text: 'text-red-400', font: 'font-mono' },
  'VS Code': { border: 'border-blue-500/20 hover:border-blue-500/60 bg-blue-950/10', text: 'text-blue-400', font: 'font-sans' },
  'Terminal': { border: 'border-zinc-400/20 hover:border-zinc-400/60 bg-zinc-900/10', text: 'text-zinc-300', font: 'font-mono' },
  'NPM': { border: 'border-red-500/20 hover:border-red-500/60 bg-red-950/10', text: 'text-red-400', font: 'font-sans' },
};

const getSkillStyle = (skill) => {
  return skillStyles[skill] || { border: 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/80', text: 'text-zinc-300', font: 'font-sans' };
};

const TechStack = () => {
  return (
    <section id="techstack" className="min-h-screen w-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Tech Stack
        </h2>
        <div className="h-1 w-12 bg-blue-500 rounded mt-2 mb-3" />
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
          From frontend frameworks to databases, key development tools, and principles, this is my tech toolkit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 shadow-md"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                  {cat.title} <span className={`text-xs font-normal ${cat.levelColor}`}>({cat.level})</span>
                </h3>
                <p className="text-xs text-zinc-500">{cat.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {cat.skills.map((skill) => {
                const style = getSkillStyle(skill);
                return (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-md border text-xs ${style.border} ${style.text} ${style.font} transition-all duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;