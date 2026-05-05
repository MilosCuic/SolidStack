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
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-full text-white hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 shadow-lg"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === 'sr' ? 'EN' : 'SR'}</span>
    </button>
  );
}
