'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { HeartHandshake, UserPlus, ArrowRight, ShieldCheck } from 'lucide-react';

export default function JoinSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF5E5] to-[#FFF0D4] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-[var(--color-saffron)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-[var(--color-green)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 rounded-3xl bg-white border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mx-auto mb-6 shadow-sm">
          <HeartHandshake className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-saffron-deep)]">
          {t('join.sectionSubtitle')}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] mt-3 mb-6 tracking-tight">
          {t('join.sectionTitle')}
        </h2>

        <p className="text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
          {t('join.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/auth/sign-up"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <UserPlus className="w-5 h-5" />
            <span>{t('join.cta')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-saffron)] font-semibold text-base shadow-xs transition-colors"
          >
            <span>{t('nav.contact')}</span>
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[var(--color-muted)] font-medium">
          <ShieldCheck className="w-4 h-4 text-[var(--color-green)]" />
          <span>Open to all devotees, farmers, rural workers, and supporters of Sanatani culture</span>
        </div>
      </div>
    </section>
  );
}
