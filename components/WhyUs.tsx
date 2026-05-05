'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Brain, Zap, Code, MessageSquare, Target } from 'lucide-react';

export default function WhyUs() {
  const { language } = useLanguage();
  const t = getTranslations(language).whyUs;

  const icons = [Brain, Zap, Code, MessageSquare, Target];

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Items */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-7 h-7 text-violet-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
