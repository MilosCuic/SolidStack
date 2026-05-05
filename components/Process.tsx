'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';

export default function Process() {
  const { language } = useLanguage();
  const t = getTranslations(language).process;

  return (
    <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4">
                {/* Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center">
                  <span className="text-indigo-400 font-bold text-sm">{index + 1}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
