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
    <section id="contact" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-zinc-950/30">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
        </div>

        {/* Form */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  {t.namePlaceholder}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-colors"
                  placeholder={t.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  {t.emailPlaceholder}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-colors"
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                {t.messagePlaceholder}
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-colors resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>{t.ctaButton}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{t.successMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{t.errorMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
