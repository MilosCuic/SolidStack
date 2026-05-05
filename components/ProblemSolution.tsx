'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Problem */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative h-full bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-sm border border-red-500/10 rounded-3xl p-8 lg:p-10 hover:border-red-500/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
                <AlertCircle className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t.problem.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">{t.problem.description}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative h-full bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-sm border border-indigo-500/10 rounded-3xl p-8 lg:p-10 hover:border-indigo-500/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <CheckCircle className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t.solution.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">{t.solution.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
