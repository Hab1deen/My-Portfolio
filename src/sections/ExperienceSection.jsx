import SectionTitle from '../components/SectionTitle';
import { Briefcase, GraduationCap } from 'phosphor-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-focus/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="ประสบการณ์และการศึกษา" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">

          <div className="glass-card p-8 sm:p-10 rounded-[2rem] reveal shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                <Briefcase size={32} weight="duotone" />
              </div>
              <h3 className="text-3xl font-bold font-outfit text-slate-800 dark:text-white">ประสบการณ์ทำงาน</h3>
            </div>

            <ul className="space-y-10 pl-4 border-l-2 border-slate-200 dark:border-slate-800 ml-4 relative">
              <li className="relative">
                <span className="absolute -left-[27px] bg-accent w-5 h-5 rounded-full border-4 border-slate-50 dark:border-[#1D1616] shadow-sm"></span>
                <p className="text-sm font-semibold text-accent mb-2 tracking-wide uppercase">มิ.ย. 2025 - ก.พ. 2026</p>
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white font-outfit mb-1">Full-Stack Developer</h4>
                <p className="text-base font-medium text-slate-500 dark:text-slate-400">Thai GL Co., Ltd.</p>
              </li>
              <li className="relative">
                <span className="absolute -left-[27px] bg-slate-300 dark:bg-slate-700 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-[#1D1616]"></span>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">มี.ค. 2024 - ก.ย. 2024</p>
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white font-outfit mb-1">Frontend Developer</h4>
                <p className="text-base font-medium text-slate-500 dark:text-slate-400">Gosoft (Thailand) Co., Ltd.</p>
              </li>
              <li className="relative">
                <span className="absolute -left-[27px] bg-slate-300 dark:bg-slate-700 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-[#1D1616]"></span>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">มี.ค. 2023 - พ.ค. 2023</p>
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white font-outfit mb-1">Cashier 7-11 Store</h4>
                <p className="text-base font-medium text-slate-500 dark:text-slate-400">CP ALL Public Company Limited</p>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-[2rem] reveal shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                <GraduationCap size={32} weight="duotone" />
              </div>
              <h3 className="text-3xl font-bold font-outfit text-slate-800 dark:text-white">ประสบการณ์การศึกษา</h3>
            </div>

            <ul className="space-y-10 pl-4 border-l-2 border-slate-200 dark:border-slate-800 ml-4 relative">
              <li className="relative">
                <span className="absolute -left-[27px] bg-accent w-5 h-5 rounded-full border-4 border-slate-50 dark:border-[#1D1616] shadow-sm"></span>
                <p className="text-sm font-semibold text-accent mb-2 tracking-wide uppercase">2022 - 2026</p>
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white font-outfit mb-1"> Faculty of Engineering and Technology</h4>
                <p className="text-base font-medium text-slate-500 dark:text-slate-400">สถาบันการจัดการปัญญาภิวัฒน์</p>
              </li>
              <li className="relative">
                <span className="absolute -left-[27px] bg-slate-300 dark:bg-slate-700 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-[#1D1616]"></span>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">2023</p>
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white font-outfit mb-1 leading-snug">Meta Front-End Developer Professional Certificate</h4>
                <p className="text-base font-medium text-slate-500 dark:text-slate-400 mt-1">Coursera</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
