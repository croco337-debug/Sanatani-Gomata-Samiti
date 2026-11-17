'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';
import { Heart, Compass, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFCF6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-cream)] border border-[var(--color-saffron)]/30 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('about.sectionSubtitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] tracking-tight">
            {t('about.sectionTitle')}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-[var(--color-dark)]/90 leading-relaxed text-base sm:text-lg">
            <p className="font-serif italic text-xl text-[var(--color-saffron-deep)] leading-normal border-l-4 border-[var(--color-saffron)] pl-4 py-1">
              &ldquo;{t('about.philosophy')}&rdquo;
            </p>

            <p className="text-[var(--color-muted)] text-base leading-relaxed">
              {t('about.description')}
            </p>

            <p className="text-[var(--color-muted)] text-base leading-relaxed">
              {t('about.commitment')}
            </p>

            {/* Core Values Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-cream)]/70 border border-[var(--color-border-light)]">
                <Heart className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--color-dark)]">{t('about.value1Title')}</h4>
                  <p className="text-xs text-[var(--color-muted)] mt-1">{t('about.value1Text')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-cream)]/70 border border-[var(--color-border-light)]">
                <Compass className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--color-dark)]">{t('about.value3Title')}</h4>
                  <p className="text-xs text-[var(--color-muted)] mt-1">{t('about.value3Text')}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-saffron-deep)] hover:text-[var(--color-saffron)] transition-colors group"
              >
                <span>{t('about.learnMore')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Cultural Visual Card featuring the sacred painting */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-tr from-[var(--color-cream)] to-[#FFF3DE] border border-[var(--color-saffron)]/40 p-5 sm:p-7 shadow-md overflow-hidden group">
              {/* Decorative Background Aura */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[var(--color-saffron)]/15 rounded-full blur-xl pointer-events-none" />

              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-[var(--color-saffron)]/30 shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Gomata, Matri Shakti and Sri Krishna"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-saffron-light)] block">
                    Sanatani Gomata Samiti
                  </span>
                  <p className="font-serif font-bold text-sm leading-tight drop-shadow-sm">
                    गोमाता एवं मातृ शक्ति संरक्षण
                  </p>
                </div>
              </div>

              {/* Cultural Quote in footer of card */}
              <div className="mt-5 text-center">
                <p className="text-sm font-serif italic text-[var(--color-dark)] font-semibold">
                  &ldquo;गावो विश्वस्य मातरः&rdquo;
                </p>
                <span className="text-xs text-[var(--color-muted)] block mt-0.5">
                  (Cows are the mothers of the universe)
                </span>
                <div className="mt-3 inline-block px-3.5 py-1 rounded-full bg-white/90 border border-[var(--color-border-light)] text-[11px] font-semibold text-[var(--color-saffron-deep)] shadow-xs">
                  ~10+ Years of Dedicated Initiative
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
