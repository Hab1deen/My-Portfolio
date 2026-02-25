import { List, Moon, Sun } from 'phosphor-react';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'หน้าแรก' },
  { href: '#about', label: 'เกี่ยวกับฉัน' },
  { href: '#skills', label: 'ทักษะ' },
  { href: '#projects', label: 'ผลงาน' },
  { href: '#experience', label: 'ประสบการณ์' },
  { href: '#contact', label: 'ติดต่อ' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass dark:glass border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" className="text-2xl font-bold tracking-tight font-outfit text-slate-800 dark:text-white transition-colors hover:text-accent dark:hover:text-accent">
            Deen<span className="text-accent">Folio.</span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="Toggle Dark Mode">
              {isDark ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
            </button>
            <button onClick={() => setIsOpen((prev) => !prev)} className="text-slate-800 dark:text-white p-2" aria-label="Mobile menu">
              <List size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-secondary/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-accent dark:hover:text-accent transition-colors text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
