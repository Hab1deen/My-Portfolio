import { useState } from 'react';
import { GithubLogo, Link, ArrowUpRight, Rocket, GraduationCap } from 'phosphor-react';
import SectionTitle from '../components/SectionTitle';

const tabs = [
  { key: 'mini', label: 'มินิโปรเจกต์', icon: Rocket },
  { key: 'capstone', label: 'โปรเจกต์จบ', icon: GraduationCap },
];

export default function ProjectsSection({ projects }) {
  const [activeTab, setActiveTab] = useState('mini');

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="ผลงานที่โดดเด่น" />

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-10 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                  : 'bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-accent/40 hover:text-accent dark:hover:text-accent'
                  }`}
              >
                <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className={`grid grid-cols-1 ${activeTab === 'capstone' ? 'md:grid-cols-1 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group reveal bg-slate-50 dark:bg-slate-900/50 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Category Badge */}
                <span className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.category === 'capstone'
                  ? 'bg-amber-500/90 text-white'
                  : 'bg-accent/90 text-white'
                  }`}>
                  {project.category === 'capstone' ? 'Capstone' : 'Mini'}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 font-outfit text-slate-800 dark:text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2"><span className="font-semibold text-slate-700 dark:text-slate-300">บทบาท:</span> {project.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {(project.tech_stack || []).map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800 pt-5 text-sm font-medium mt-auto">
                  <a href={project.live_url || '#'} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group/link">
                    <Link size={18} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                  </a>
                  <a href={project.github_url || '#'} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group/link">
                    <GithubLogo size={18} />
                    <span>{project.github_backend_url ? 'Frontend' : 'GitHub'}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                  </a>
                  {project.github_backend_url && (
                    <a href={project.github_backend_url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group/link">
                      <GithubLogo size={18} />
                      <span>Backend</span>
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            <p className="text-lg">ยังไม่มีผลงานในหมวดนี้</p>
          </div>
        )}
      </div>
    </section>
  );
}
