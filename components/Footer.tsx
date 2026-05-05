'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language).footer;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5b58eb] to-[#7c3aed] flex items-center justify-center">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <span className="text-white font-bold text-xl">SolidStack</span>
            </Link>
            <p className="text-zinc-400 text-sm mb-6 max-w-md">
              {language === 'sr' 
                ? 'Pretvaramo ideje u funkcionalne digitalne proizvode. MVP, full product development i skaliranje sistema.'
                : 'We turn ideas into functional digital products. MVP, full product development and system scaling.'
              }
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-zinc-400" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5 text-zinc-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.navigate}</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-zinc-400 hover:text-white transition-colors text-sm">{t.services}</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-zinc-400 hover:text-white transition-colors text-sm">{t.projects}</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-zinc-400 hover:text-white transition-colors text-sm">{t.team}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-zinc-400 hover:text-white transition-colors text-sm">{t.contact}</button></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.links}</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{t.careers}</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{t.blog}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">{t.rights}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
