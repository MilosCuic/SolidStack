'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';

export default function Process() {
  const { language } = useLanguage();
  const t = getTranslations(language).process;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-violet-600 to-indigo-600 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12">
            {t.steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 md:gap-8">
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/30">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pb-8">
                  <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
