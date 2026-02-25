import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/SectionTitle';

export default function ContactSection() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, message: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus({ loading: true, message: '' });

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      formRef.current.reset();
      setStatus({ loading: false, message: 'ส่งข้อความเรียบร้อยแล้ว' });
    } catch {
      setStatus({ loading: false, message: 'ส่งข้อความไม่สำเร็จ กรุณาลองใหม่' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="ติดต่อพูดคุย" />
        <form ref={formRef} onSubmit={onSubmit} className="glass-card p-8 sm:p-10 rounded-[2rem] shadow-lg reveal mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              name="name"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-slate-800 dark:text-slate-200 placeholder-slate-400"
              placeholder="ชื่อ - นามสกุล"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-slate-800 dark:text-slate-200 placeholder-slate-400"
              placeholder="อีเมล"
              required
            />
          </div>
          <input
            name="subject"
            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-slate-800 dark:text-slate-200 placeholder-slate-400 mb-6"
            placeholder="หัวข้อ"
            required
          />
          <textarea
            name="message"
            rows="5"
            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-slate-800 dark:text-slate-200 placeholder-slate-400 mb-8 resize-none"
            placeholder="ข้อความของคุณ..."
            required
          />
          <button
            type="submit"
            disabled={status.loading}
            className="w-full px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium shadow-lg shadow-accent/25 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status.loading ? 'กำลังส่ง...' : 'ส่งข้อความ'}
          </button>
          {status.message && (
            <p className={`text-center mt-6 font-medium ${status.message.includes('เรียบร้อย') ? 'text-emerald-500' : 'text-red-500'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
