'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0d0e1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem - POPULARNE */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#8b88ff] uppercase tracking-wider">{t.popular.title}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              {t.popular.heading}
            </h2>
            <div className="space-y-4">
              {t.popular.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution - MI ĆE BITI TU */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#8b88ff] uppercase tracking-wider">{t.build.title}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              {t.build.heading}
            </h2>
            <div className="space-y-4">
              {t.build.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-[#5b58eb] group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
