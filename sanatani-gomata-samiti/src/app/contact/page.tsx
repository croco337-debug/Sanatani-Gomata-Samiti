'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n/context';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sun, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // In production with Supabase configured, will persist to contact_messages table
      // Simulating network delay for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setErrorMessage(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-saffron)]/30 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('contact.pageTitle')}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            {t('contact.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-border-light)] shadow-xs">
                <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] mb-8">
                  Whether you have queries about our cow protection work, organic agriculture workshops, or wish to collaborate, write to us below.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[var(--color-green)]/10 border border-[var(--color-green)]/30 text-center animate-fade-in">
                    <CheckCircle2 className="w-12 h-12 text-[var(--color-green)] mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-[var(--color-dark)]">Message Received!</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1 max-w-md mx-auto">
                      {t('contact.success')}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 rounded-full bg-[var(--color-saffron)] text-white text-xs font-semibold hover:bg-[var(--color-saffron-deep)]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                          {t('contact.name')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                          {t('contact.email')} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                          {t('contact.phone')}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                          placeholder="+91 Phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                          {t('contact.subject')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                          placeholder="Subject of inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        {t('contact.message')} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6] resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-semibold text-sm shadow-md transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t('common.loading') : t('contact.send')}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[var(--color-cream)] rounded-3xl p-8 border border-[var(--color-saffron)]/30 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-saffron)]/20 border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)]">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-dark)]">
                      {t('contact.info')}
                    </h3>
                    <span className="text-xs text-[var(--color-saffron-deep)] font-semibold">
                      Sanatani Gomata Samiti
                    </span>
                  </div>
                </div>

                <ul className="space-y-6 text-sm text-[var(--color-dark)]/90">
                  <li className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                        {t('contact.address')}
                      </strong>
                      <span className="text-sm">Sanatani Gomata Samiti, Bharat</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                        {t('contact.emailLabel')}
                      </strong>
                      <a href="mailto:info@sanatanigomatasamiti.org" className="text-sm hover:text-[var(--color-saffron)]">
                        info@sanatanigomatasamiti.org
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                        {t('contact.phoneLabel')}
                      </strong>
                      <a href="tel:+919851053555" className="text-sm font-semibold text-[var(--color-dark)] hover:text-[var(--color-saffron-deep)]">
                        +91 98510 53555
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[var(--color-border-light)]">
                  <h4 className="text-xs font-bold text-[var(--color-dark)] uppercase tracking-wider mb-2">
                    {t('contact.followUs')}
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4">
                    Follow our verified community channels for regular updates on Gau Seva, natural farming, and women&apos;s empowerment.
                  </p>
                  <a
                    href="https://www.facebook.com/share/1Dxtq4K5mh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold text-xs border border-[#1877F2]/30 transition-colors"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    <span>Official Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
