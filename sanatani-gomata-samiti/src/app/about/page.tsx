'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { Heart, Shield, Sprout, Landmark, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('about.value1Title'),
      text: t('about.value1Text'),
      icon: Heart,
      color: 'text-[var(--color-saffron)]',
      bg: 'bg-[var(--color-saffron)]/10',
    },
    {
      title: t('about.value2Title'),
      text: t('about.value2Text'),
      icon: Shield,
      color: 'text-[var(--color-green)]',
      bg: 'bg-[var(--color-green)]/10',
    },
    {
      title: t('about.value3Title'),
      text: t('about.value3Text'),
      icon: Sprout,
      color: 'text-[var(--color-saffron-deep)]',
      bg: 'bg-[var(--color-saffron-deep)]/10',
    },
    {
      title: t('about.value4Title'),
      text: t('about.value4Text'),
      icon: Landmark,
      color: 'text-[var(--color-earth)]',
      bg: 'bg-[var(--color-earth)]/10',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-saffron)]/30 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('about.pageSubtitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('about.pageTitle')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-saffron-deep)]">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)]">
                {t('about.ourStory')}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-saffron)] rounded-full" />

              <p className="text-[var(--color-dark)]/90 text-base sm:text-lg leading-relaxed">
                {t('about.ourStoryText')}
              </p>

              <blockquote className="border-l-4 border-[var(--color-saffron)] pl-4 py-2 my-6 font-serif italic text-lg text-[var(--color-saffron-deep)] bg-[var(--color-cream)]/50 rounded-r-xl">
                &ldquo;{t('about.philosophy')}&rdquo;
              </blockquote>

              <p className="text-[var(--color-muted)] text-base leading-relaxed">
                {t('about.commitment')}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-green)]" />
                  <span>10+ Years of Dedication</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-green)]" />
                  <span>67 Mothers Empowered</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-green)]" />
                  <span>Indigenous Cow Care</span>
                </div>
              </div>
            </div>

            {/* Visual Cultural Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[var(--color-cream)] border border-[var(--color-saffron)]/30 p-8 shadow-sm">
                <div className="aspect-4/3 rounded-2xl bg-white border border-[var(--color-border-light)] flex flex-col items-center justify-center p-6 text-center shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mb-4">
                    <Heart className="w-8 h-8 fill-current text-[var(--color-saffron)]/30" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[var(--color-dark)]">
                    सनातनी जीवन दृष्टि
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                    Connecting spiritual reverence with practical rural upliftment and self-reliant ecosystems.
                  </p>
                </div>
                <div className="mt-6 text-center text-xs text-[var(--color-muted)]">
                  Official Archive of Sanatani Gomata Samiti
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]/50 border-t border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-saffron-deep)]">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-bold text-[var(--color-dark)] mt-2">
              {t('about.ourValues')}
            </h2>
            <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-[var(--color-border-light)] shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center ${v.color} mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--color-dark)] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">
            Want to support our initiatives?
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Join hands with Sanatani Gomata Samiti to protect Gomata and empower rural families.
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
