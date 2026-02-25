import { Wrench, Rocket } from 'phosphor-react';
import SectionTitle from '../components/SectionTitle';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiSourcetree,
  SiSwagger
} from 'react-icons/si';
import { TbBrandCSharp, TbDatabase, TbSql, TbBrandVscode } from 'react-icons/tb';

// Helper function to render a relevant icon based on the skill name
const getSkillIcon = (skillName) => {
  const iconProps = { size: 38, className: "mb-4 group-hover/skill:-translate-y-2 transition-transform duration-300" };

  const iconMap = {
    'React.js': <SiReact {...iconProps} color="#61DAFB" />,
    'Node.js': <SiNodedotjs {...iconProps} color="#339933" />,
    'JavaScript': <SiJavascript {...iconProps} color="#F7DF1E" />,
    'TypeScript': <SiTypescript {...iconProps} color="#3178C6" />,
    'C#': <TbBrandCSharp {...iconProps} color="#9B4F96" />,
    '.NET': <SiDotnet {...iconProps} color="#512BD4" />,
    'SQL': <TbDatabase {...iconProps} className={`${iconProps.className} text-blue-500 dark:text-blue-400`} />,
    'TailwindCSS': <SiTailwindcss {...iconProps} color="#06B6D4" />,
    'Git / GitHub': <SiGithub {...iconProps} className={`${iconProps.className} text-slate-800 dark:text-white`} />,
    'Figma': <SiFigma {...iconProps} color="#F24E1E" />,
    'VS Code': <TbBrandVscode {...iconProps} color="#007ACC" />,
    'Antigravity': <Rocket {...iconProps} weight="duotone" className={`${iconProps.className} text-accent`} />,
    'Git': <SiGit {...iconProps} color="#F05032" />,
    'Sourcetree': <SiSourcetree {...iconProps} color="#0052CC" />,
    'SwaggerUI': <SiSwagger {...iconProps} color="#85EA2D" />,
  };

  return iconMap[skillName] || <Wrench {...iconProps} className={`${iconProps.className} text-accent`} />;
};

export default function SkillsSection({ skills }) {
  // Combine technical and tools into a single list
  const combinedSkills = skills.filter((item) => item.category === 'technical' || item.category === 'tools');

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-focus/5 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="ทักษะและความเชี่ยวชาญ" />
        <div className="mt-12 max-w-4xl mx-auto">

          <article className="glass-card p-8 sm:p-12 rounded-[2rem] shadow-sm reveal group">
            <div className="flex items-center justify-center gap-5 mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                <Wrench size={36} weight="duotone" />
              </div>
              <h3 className="text-3xl font-bold font-outfit text-slate-800 dark:text-white group-hover:text-accent transition-colors">
                Skills & Tools
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {combinedSkills.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default group/skill"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {getSkillIcon(item.name)}
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center tracking-wide group-hover/skill:text-accent transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
