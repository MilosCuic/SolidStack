'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { ArrowRight, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language).hero;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b58eb]/10 via-transparent to-[#7c3aed]/10" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#5b58eb]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(91,88,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(91,88,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b58eb]/10 border border-[#5b58eb]/20 mb-8">
              <span className="text-xs font-medium text-[#8b88ff] uppercase tracking-wider">{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {t.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 rounded-lg bg-[#5b58eb] hover:bg-[#4a47d8] text-white font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 transition-all"
              >
                {t.ctaSecondary}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#5b58eb]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <span className="text-sm text-zinc-300">{t.teamBadge}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#5b58eb]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <span className="text-sm text-zinc-300">{t.endToEndBadge}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#5b58eb]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌍</span>
                </div>
                <span className="text-sm text-zinc-300">{t.readyTeamBadge}</span>
              </div>
            </div>
          </div>

          {/* Right 3D Mockup */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main screen mockup */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#1a1b2e] to-[#0a0b14] border border-white/10 p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="space-y-3">
                    <div className="h-8 bg-[#5b58eb]/20 rounded-lg" />
                    <div className="h-6 bg-white/5 rounded-lg w-3/4" />
                    <div className="h-6 bg-white/5 rounded-lg w-1/2" />
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="h-24 bg-[#7c3aed]/10 rounded-lg border border-[#7c3aed]/20" />
                      <div className="h-24 bg-[#5b58eb]/10 rounded-lg border border-[#5b58eb]/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-8 top-12 w-48 h-32 rounded-xl bg-gradient-to-br from-[#5b58eb]/20 to-[#7c3aed]/20 border border-white/10 backdrop-blur-sm p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-[#8b88ff]" />
                  <span className="text-sm font-semibold text-white">MVP Ready</span>
                </div>
                <div className="text-xs text-zinc-400">Launch in weeks</div>
              </div>

              <div className="absolute -left-8 bottom-12 w-48 h-32 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#5b58eb]/20 border border-white/10 backdrop-blur-sm p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚀</span>
                  <span className="text-sm font-semibold text-white">Scalable</span>
                </div>
                <div className="text-xs text-zinc-400">Built for growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
