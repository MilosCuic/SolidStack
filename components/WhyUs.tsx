'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Brain, Zap, Code, MessageSquare, Target } from 'lucide-react';

export default function WhyUs() {
  const { language } = useLanguage();
  const t = getTranslations(language).whyUs;

  const icons = [Brain, Zap, Code, MessageSquare, Target];

  return (
    <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="group">
                <div className="flex flex-col items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
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
