'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language).nav;
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'sr' ? 'en' : 'sr');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b14]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5b58eb] to-[#7c3aed] flex items-center justify-center">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span className="text-white font-bold text-xl">SolidStack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              {t.projects}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              {t.contact}
            </button>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Globe className="w-4 h-4 text-zinc-400" />
              <span className="text-sm font-medium text-white">{language === 'sr' ? 'EN' : 'SR'}</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 rounded-lg bg-[#5b58eb] hover:bg-[#4a47d8] text-white font-semibold text-sm transition-colors"
            >
              {t.getStarted}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/5">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-zinc-400 hover:text-white transition-colors text-left py-2">
                {t.services}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-zinc-400 hover:text-white transition-colors text-left py-2">
                {t.projects}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-zinc-400 hover:text-white transition-colors text-left py-2">
                {t.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-zinc-400 hover:text-white transition-colors text-left py-2">
                {t.contact}
              </button>
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm font-medium text-white">{language === 'sr' ? 'EN' : 'SR'}</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 px-6 py-2.5 rounded-lg bg-[#5b58eb] hover:bg-[#4a47d8] text-white font-semibold text-sm transition-colors"
                >
                  {t.getStarted}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
