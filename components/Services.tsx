'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Rocket, Package, Gauge, Network, Shield, Users } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();
  const t = getTranslations(language).services;

  const icons = [Rocket, Package, Gauge, Network, Shield, Users];

  return (
    <section id="services" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-8 h-8 text-indigo-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
