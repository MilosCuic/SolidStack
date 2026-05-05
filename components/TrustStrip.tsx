'use client';

import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Users, Layers, Globe } from 'lucide-react';

export default function TrustStrip() {
  const { language } = useLanguage();
  const t = getTranslations(language).trust;

  const items = [
    { icon: Users, text: t.developers },
    { icon: Layers, text: t.endToEnd },
    { icon: Globe, text: t.ready }
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-center group">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-zinc-200 font-medium text-sm lg:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
