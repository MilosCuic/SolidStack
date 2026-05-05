'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { Brain, Zap, Code2, MessageSquare, Target } from 'lucide-react';

export default function Values() {
  const { language } = useLanguage();
  const t = getTranslations(language).values;

  const icons = [Brain, Zap, Code2, MessageSquare, Target];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="group">
                <div className="flex flex-col items-start gap-4 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/[0.07] hover:border-[#5b58eb]/30 transition-all">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#5b58eb]/10 border border-[#5b58eb]/20 flex items-center justify-center group-hover:bg-[#5b58eb]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#8b88ff]" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
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
