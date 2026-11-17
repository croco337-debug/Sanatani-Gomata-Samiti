'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { Home, Sparkles, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AnimalHusbandryPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-earth)]/30 text-xs font-semibold text-[var(--color-earth)] uppercase tracking-wider mb-4 shadow-xs">
            <Home className="w-3.5 h-3.5 text-[var(--color-earth)]" />
            <span>Pillar 04</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('animalHusbandryPage.title')}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-earth-light)] font-medium">
            {t('animalHusbandryPage.subtitle')}
          </p>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('animalHusbandryPage.intro')}
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-16 md:py-24 space-y-20">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-earth)] tracking-widest uppercase">
                Ethical Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('animalHusbandryPage.section1Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-earth)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('animalHusbandryPage.section1Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-earth)]/30 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-earth)]/40 flex items-center justify-center text-[var(--color-earth)] mb-4">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-dark)]">वैज्ञानिक एवं परंपरागत पशुपालन</h4>
                <p className="text-xs text-[var(--color-muted)] mt-1">Holistic animal care and welfare</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="aspect-4/3 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-earth)]/30 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-earth)]/40 flex items-center justify-center text-[var(--color-earth)] mb-4">
                  <Home className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-dark)]">ग्राम स्वराज्य</h4>
                <p className="text-xs text-[var(--color-muted)] mt-1">Self-reliant rural village circular economy</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-earth)] tracking-widest uppercase">
                Rural Prosperity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('animalHusbandryPage.section2Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-earth)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('animalHusbandryPage.section2Text')}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-earth)] tracking-widest uppercase">
                Genetic Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('animalHusbandryPage.section3Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-earth)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('animalHusbandryPage.section3Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl bg-[var(--color-cream)] border border-[var(--color-earth)]/30 p-8 flex flex-col items-center justify-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-earth)]/40 flex items-center justify-center text-[var(--color-earth)] mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-dark)]">देसी नस्ल संवर्धन</h4>
                <p className="text-xs text-[var(--color-muted)] mt-1">Preserving indigenous Indian cattle genetics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-cream)]/60 border-t border-[var(--color-border-light)] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">
            Build Self-Reliant Villages
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Support rural communities with better livestock management and local economies.
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
