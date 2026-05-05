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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-indigo-300">6 Engineers + 2 Project Managers</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold text-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            {t.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            {t.ctaSecondary}
          </button>
        </div>

        {/* Floating cards visual */}
        <div className="mt-20 relative h-64 hidden lg:block">
          <div className="absolute top-0 left-1/4 w-48 h-32 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-2xl border border-white/10 backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="p-6">
              <div className="text-indigo-400 font-semibold">MVP</div>
              <div className="text-white/60 text-sm mt-2">Fast launch</div>
            </div>
          </div>
          <div className="absolute top-8 right-1/4 w-48 h-32 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-2xl border border-white/10 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="p-6">
              <div className="text-violet-400 font-semibold">Scale</div>
              <div className="text-white/60 text-sm mt-2">Ready to grow</div>
            </div>
          </div>
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="text-indigo-400 font-semibold">Security</div>
              <div className="text-white/60 text-sm mt-2">Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
