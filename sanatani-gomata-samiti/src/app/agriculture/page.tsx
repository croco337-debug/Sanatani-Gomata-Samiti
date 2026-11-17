'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';
import { Sprout, Sparkles, Leaf, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AgriculturePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-green)]/30 text-xs font-semibold text-[var(--color-green)] uppercase tracking-wider mb-4 shadow-xs">
            <Sprout className="w-3.5 h-3.5 text-[var(--color-green)]" />
            <span>Pillar 02</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('agriculturePage.title')}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-green-dark)] font-medium">
            {t('agriculturePage.subtitle')}
          </p>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('agriculturePage.intro')}
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-16 md:py-24 space-y-20">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-green)] tracking-widest uppercase">
                Traditional Wisdom
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('agriculturePage.section1Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-green)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('agriculturePage.section1Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl overflow-hidden border border-[var(--color-border-light)] relative shadow-lg group">
                <Image
                  src="/images/agri-icar-natural-farming-field.jpg"
                  alt="Natural Organic Farming Field Plot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron-light)]">
                    ICAR - IARI
                  </span>
                  <h4 className="font-bold text-sm">Natural Farming Research & Field Trial</h4>
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
                  src="/images/agri-icar-integrated-farming-system.jpg"
                  alt="Integrated Farming System Model"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron-light)]">
                    Sustainable Model
                  </span>
                  <h4 className="font-bold text-sm">Integrated Farming System for Small Farmers</h4>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-green)] tracking-widest uppercase">
                Cow-Based Farming
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('agriculturePage.section2Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-green)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('agriculturePage.section2Text')}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[var(--color-green)] tracking-widest uppercase">
                Soil Health
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('agriculturePage.section3Title')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-green)] rounded-full" />
              <p className="text-[var(--color-dark)]/85 text-base sm:text-lg leading-relaxed pt-2">
                {t('agriculturePage.section3Text')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-4/3 rounded-3xl overflow-hidden border border-[var(--color-border-light)] relative shadow-lg group">
                <Image
                  src="/images/agri-icar-paddy-field-demonstration.jpg"
                  alt="Lush Paddy Field Demonstration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron-light)]">
                    Soil Vitality
                  </span>
                  <h4 className="font-bold text-sm">Paddy Field Demonstration & Soil Restoration</h4>
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
            Revive Natural Agriculture
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Join our workshops and farming initiatives for sustainable rural growth.
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
