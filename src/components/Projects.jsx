import React from 'react';

const highlights = [
  {
    title: 'Education',
    items: [
      'B.Tech in Computer Science Engineering, KIIT University (2024 - Present) — CGPA 9.23/10',
      'Halikot College — 12th Grade (Completed)',
      'DAV Public School — 10th Grade (Completed)',
    ],
  },
  {
    title: 'Technical Skills',
    items: [
      'Languages: Python, C++, C, Java (Basic), JavaScript (Basic)',
      'Frontend: HTML, CSS, React',
      'Backend: Django (Basic)',
      'Concepts: OOP, Data Structures, Problem Solving',
      'Tools: Git, GitHub, VS Code, Arduino',
      'Additional: Prompt Engineering (Basic), Debugging',
    ],
  },
  {
    title: 'Certifications',
    items: [
      'NPTEL - Machine Learning',
      'GitHub Copilot Certification',
    ],
  },
];

const projects = [
  {
    id: 1,
    title: 'Profile Card & Portfolio Website',
    description: 'Designed and built responsive UI components with a clean layout and readable typography for a personal portfolio.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
  },
  {
    id: 2,
    title: 'To-Do List Application',
    description: 'Built a task management app with add, delete, and manage flows using React state and event handling.',
    tags: ['React.js', 'JavaScript', 'State Management'],
  },
  {
    id: 3,
    title: 'NutriLabel - Healthy Recipe Validator',
    description: 'Analyzes user-submitted recipes against FSSAI guidelines and suggests healthier ingredient alternatives.',
    tags: ['Python', 'Data Validation', 'Logic'],
  },
  {
    id: 4,
    title: 'AI Prompt Generator',
    description: 'Tool to generate optimized prompts for AI models with a focus on clarity and output quality.',
    tags: ['Prompt Engineering', 'AI/ML', 'Ongoing'],
    status: 'Ongoing',
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-[#0b0b10] via-[#0c0c14] to-[#0b0b10] min-h-screen py-24 px-8 md:px-24 text-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tight">
          Resume <span className="text-slate-400">Highlights</span>.
        </h2>

        <p className="text-slate-400 max-w-2xl mb-12">
          Focused on web development and AI/ML fundamentals, with hands-on projects and strong academic performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-emerald-200">{block.title}</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {block.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 tracking-tight">
          Selected <span className="text-slate-400">Projects</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]"
            >
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200 bg-emerald-400/10 px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
