'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';
import { Users, Heart, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function MatriShaktiPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-saffron)]/30 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[var(--color-saffron-deep)]" />
            <span>Pillar 03</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('matriShaktiPage.title')}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-saffron-deep)] font-medium">
            {t('matriShaktiPage.subtitle')}
          </p>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('matriShaktiPage.intro')}
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-16 md:py-24 space-y-20">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                Rural Women Livelihoods
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('matriShaktiPage.section1Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('matriShaktiPage.section1Text')}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-saffron-deep)]" />
                  <span>67 Mothers Benefited</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-saffron-deep)]" />
                  <span>Hundreds More Expressed Interest</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl overflow-hidden border border-[var(--color-border-light)] relative shadow-lg group">
                <Image
                  src="/images/matri-shakti-distribution-program.jpg"
                  alt="Matri Shakti Cow Distribution Program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron-light)]">
                    Sanatani Gomata Samiti
                  </span>
                  <h4 className="font-bold text-sm">Gomata Pujon & Distribution Ceremony</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="aspect-4/3 rounded-3xl overflow-hidden border border-[var(--color-border-light)] relative shadow-lg group">
                <Image
                  src="/images/matri-shakti-community-orientation.jpg"
                  alt="Rural Women Dialogue & Self-Reliance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron-light)]">
                    Self-Reliance
                  </span>
                  <h4 className="font-bold text-sm">Community Dialogue with Village Mothers</h4>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                Economic Independence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('matriShaktiPage.section2Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('matriShaktiPage.section2Text')}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                Sisterhood & Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('matriShaktiPage.section3Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('matriShaktiPage.section3Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl overflow-hidden border border-[var(--color-border-light)] relative shadow-lg group">
                <Image
                  src="/images/matri-shakti-traditional-ceremony.jpg"
                  alt="Sacred Matri Shakti Vedic Ceremony"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron-light)]">
                    Vedic Tradition
                  </span>
                  <h4 className="font-bold text-sm">Sacred Matri Shakti Ceremony</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-cream)]/60 border-t border-[var(--color-border-light)] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">
            Empower Matri Shakti
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Help us expand cow donations to hundreds of waiting mothers across rural Bharat.
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
