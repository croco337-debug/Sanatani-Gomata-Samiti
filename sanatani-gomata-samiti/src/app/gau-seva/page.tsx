'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { Heart, Sparkles, ShieldCheck, ArrowRight, Sun } from 'lucide-react';

export default function GauSevaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-saffron)]/30 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-current text-[var(--color-saffron)]" />
            <span>Pillar 01</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('gauSevaPage.title')}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-saffron-deep)] font-medium">
            {t('gauSevaPage.subtitle')}
          </p>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('gauSevaPage.intro')}
          </p>
        </div>
      </section>

      {/* Alternating Content Sections */}
      <section className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                Sanctity & Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('gauSevaPage.section1Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('gauSevaPage.section1Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-saffron)]/30 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mb-4">
                  <Sun className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-dark)]">देसी गोवंश संरक्षण</h4>
                <p className="text-xs text-[var(--color-muted)] mt-1">Indigenous Cow Protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="aspect-4/3 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-saffron)]/30 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mb-4">
                  <Heart className="w-8 h-8 text-[var(--color-saffron)]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-dark)]">माताओं को गो वितरण</h4>
                <p className="text-xs text-[var(--color-muted)] mt-1">67 Mothers Empowered With Cows</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                Active Initiatives
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('gauSevaPage.section2Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('gauSevaPage.section2Text')}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                Ecological Prosperity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('gauSevaPage.section3Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('gauSevaPage.section3Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-saffron)]/30 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-green)]/40 flex items-center justify-center text-[var(--color-green)] mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-dark)]">गो आधारित उत्पाद</h4>
                <p className="text-xs text-[var(--color-muted)] mt-1">Natural Soil Regeneration & Pest Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--color-cream)]/60 border-t border-[var(--color-border-light)] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">
            Join the Gau Seva Movement
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Help us protect native breeds and connect more rural mothers with indigenous cows.
          </p>
          <Link
            href="/auth/sign-up"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-semibold text-sm shadow-md transition-all"
          >
            <span>{t('hero.joinMission')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
