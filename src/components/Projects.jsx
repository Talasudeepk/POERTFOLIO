import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Ethereal E-Commerce',
    description: 'A high-end fashion e-commerce experience built with Next.js and Three.js.',
    tags: ['React', 'Three.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Fintech Dashboard',
    description: 'Real-time data visualization and portfolio management platform.',
    tags: ['Vue', 'D3.js', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Prompt Studio',
    description: 'Collaborative workspace for designing and testing LLM applications.',
    tags: ['React', 'Node.js', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
  }
];

const Projects = () => {
  return (
    <section className="bg-background min-h-screen py-24 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          Selected <span className="text-gray-500">Works</span>.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)]"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                    <Code size={16} /> Source
                  </button>
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
