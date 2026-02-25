import { SiFacebook, SiInstagram, SiLine } from 'react-icons/si';
import { useState } from 'react';

const socials = [
  { href: 'https://www.facebook.com/ha.bi.din.buy.sali/', icon: SiFacebook, color: '#1877F2', label: 'Facebook' },
  { href: 'https://www.instagram.com/bdiin.bsl/', icon: SiInstagram, color: '#E4405F', label: 'Instagram' },
  { href: 'https://line.me/ti/p/~som111q', icon: SiLine, color: '#06C755', label: 'Line' },
];

function SocialIcon({ social }) {
  const [hovered, setHovered] = useState(false);
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={20} color={hovered ? social.color : undefined} className="transition-transform hover:scale-110" />
    </a>
  );
}

export default function HomeSection() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex items-center min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-focus/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-800 dark:text-white font-outfit tracking-tight flex flex-col gap-2">
              <div className="inline-block hover:scale-[1.03] hover:text-accent transition-transform duration-500 cursor-default">
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-slate-800 dark:border-white w-0 animate-[typing_2.5s_steps(20,end)_forwards,blink_1s_step-end_infinite]">
                  Habideen Bunsalee
                </span>
              </div>
              <span className="text-gradient animate-pulse-slow">
                Frontend Developer
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ผมสร้างเว็บไซต์ที่สวย ใช้ง่าย และเร็ว โดยเน้น UX/UI และโค้ดที่ดูแลง่ายในระยะยาว พร้อมส่งมอบประสบการณ์ที่ดีที่สุดให้กับผู้ใช้งาน
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <a href="#projects" className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all duration-300">
                ดูผลงานของฉัน
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-white dark:bg-secondary/50 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white rounded-full font-medium hover:bg-slate-50 dark:hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                ติดต่อพูดคุย
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-5 mt-8">
              {socials.map((social) => (
                <SocialIcon key={social.label} social={social} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
              {/* Image background decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-focus rounded-full rotate-6 opacity-20 dark:opacity-40 scale-105 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-focus rounded-full rotate-3 opacity-50 dark:opacity-70"></div>

              <img
                src="/my-profile.jpg"
                alt="Habideen"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/50 dark:border-white/10 shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
