'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  const { language } = useLanguage();
  const t = getTranslations(language).process;

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0d0e1a]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Step number indicator */}
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#5b58eb] to-[#7c3aed] flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Card */}
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-[#5b58eb]/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#5b58eb] flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
