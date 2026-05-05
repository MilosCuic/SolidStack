'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Brain, Zap, Code, MessageSquare, Target } from 'lucide-react';

export default function WhyUs() {
  const { language } = useLanguage();
  const t = getTranslations(language).whyUs;

  const icons = [Brain, Zap, Code, MessageSquare, Target];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400">{item.description}</p>
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
