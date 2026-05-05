'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'sr' ? 'en' : 'sr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/10 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-semibold">{language === 'sr' ? 'EN' : 'SR'}</span>
    </button>
  );
}
