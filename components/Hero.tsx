'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language).hero;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden py-20 lg:py-32">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
      
      {/* Very subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/10 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium text-zinc-400">6 Engineers + 2 Project Managers</span>
        </div>

        {/* Headline - cleaner, more professional */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>

        {/* CTA Buttons - simplified */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-base hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-base border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-200"
          >
            {t.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
