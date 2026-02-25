import SectionTitle from '../components/SectionTitle';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-primary/95 border-t border-slate-100 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="เกี่ยวกับฉัน" />
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mt-12">
          <div className="w-full lg:w-5/12 reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-focus rounded-[2rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute inset-0 bg-accent/20 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10"></div>
              <img
                src="/IMG_6552.jpg"
                alt="Workspace"
                className="rounded-[2rem] shadow-2xl w-full h-[400px] object-cover object-bottom grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 relative z-10 border border-white/20"
              />
            </div>
          </div>
          <div className="w-full lg:w-7/12 reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6 font-outfit text-slate-800 dark:text-white">เส้นทางการทำงาน & แนวคิด</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              เริ่มจากการมีความหลงใหลในงานออกแบบ ก่อนพัฒนาต่อยอดเป็นนักพัฒนา Web Frontend เต็มตัว ที่ให้ความสำคัญอย่างมากกับ User-Centric Design ประสบการณ์ผู้ใช้ และการเขียน Clean Code ที่สามารถดูแลรักษาได้ง่ายในระยะยาว
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 p-8 glass-card rounded-3xl">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h4 className="text-5xl font-extrabold font-outfit text-gradient mb-2">3+</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">ปีประสบการณ์</p>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h4 className="text-5xl font-extrabold font-outfit text-gradient mb-2">20+</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">โปรเจกต์ที่สำเร็จ</p>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-2 sm:col-span-1">
                <h4 className="text-5xl font-extrabold font-outfit text-gradient mb-2">100%</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">ความใส่ใจในงาน</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
