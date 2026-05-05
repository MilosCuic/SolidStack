'use client';

import { useState } from 'react';
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language).contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-3">
                  {t.namePlaceholder}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all hover:bg-white/[0.07]"
                  placeholder={t.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-3">
                  {t.emailPlaceholder}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all hover:bg-white/[0.07]"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-3">
                  {t.messagePlaceholder}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none hover:bg-white/[0.07]"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-semibold text-lg hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group/btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>{t.ctaButton}</span>
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-2xl p-5">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium">{t.successMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 rounded-2xl p-5">
                  <XCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium">{t.errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
