'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { getTranslations } from '@/lib/i18n';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0d0e1a]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#8b88ff] uppercase tracking-wider mb-4 block">{t.idea.title}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t.idea.heading}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t.idea.description}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0b14] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:border-[#5b58eb] focus:ring-1 focus:ring-[#5b58eb] outline-none transition-colors"
                  placeholder={t.form.name}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0b14] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:border-[#5b58eb] focus:ring-1 focus:ring-[#5b58eb] outline-none transition-colors"
                  placeholder={t.form.email}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-zinc-300 mb-2">
                {t.form.company}
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0b14] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:border-[#5b58eb] focus:ring-1 focus:ring-[#5b58eb] outline-none transition-colors"
                placeholder={t.form.company}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">
                {t.form.message}
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0b14] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:border-[#5b58eb] focus:ring-1 focus:ring-[#5b58eb] outline-none transition-colors resize-none"
                placeholder={t.form.message}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#5b58eb] hover:bg-[#4a47d8] text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>{t.form.submit}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{t.form.successMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{t.form.errorMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
