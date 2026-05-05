'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 mb-6">
                <AlertCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.problem.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{t.problem.description}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <CheckCircle className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.solution.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{t.solution.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
