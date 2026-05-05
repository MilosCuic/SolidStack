'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Rocket, Package, Gauge, Network, Shield, Users } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();
  const t = getTranslations(language).services;

  const icons = [Rocket, Package, Gauge, Network, Shield, Users];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-indigo-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
