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
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-center">
              <item.icon className="w-5 h-5 text-indigo-400" />
              <span className="text-zinc-300 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
