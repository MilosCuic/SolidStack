'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';

export default function Process() {
  const { language } = useLanguage();
  const t = getTranslations(language).process;

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-500 hidden lg:block" />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-12">
            {t.steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 lg:gap-8 group">
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xl lg:text-2xl font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 transition-all duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">{step.description}</p>
                    </div>
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
