'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { Rocket, Package, Network, Gauge, Shield, Users } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();
  const t = getTranslations(language).services;

  const icons = [Rocket, Package, Network, Gauge, Shield, Users];

  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#8b88ff] uppercase tracking-wider mb-4 block">{t.title}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.heading}</h2>
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
                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-[#5b58eb]/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#5b58eb]/10 border border-[#5b58eb]/20 mb-6 group-hover:scale-110 group-hover:bg-[#5b58eb]/20 transition-all">
                    <Icon className="w-7 h-7 text-[#8b88ff]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
