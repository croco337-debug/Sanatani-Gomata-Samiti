'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';
import { Sun, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Sacred Background Artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Gomata and Matri Shakti - Sanatani Gomata Samiti"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter saturate-[1.15] contrast-[1.05]"
        />
        {/* Soft elegant warm overlay that preserves the artwork while guaranteeing readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/88 via-[#FFF8ED]/78 to-[#FFF4E0]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(255,248,237,0.75)_90%)]" />
      </div>

      {/* Decorative Ambient Saffron & Green Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[var(--color-saffron)]/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-green)]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Top Cultural Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[var(--color-saffron)]/40 shadow-sm mb-6 animate-fade-in">
          <Sun className="w-4 h-4 text-[var(--color-saffron)] animate-[spin_10s_linear_infinite]" />
          <span className="text-xs font-bold tracking-wider text-[var(--color-saffron-deep)] uppercase">
            सनातनी संस्कृति • गो सेवा • मातृ शक्ति
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
        </div>

        {/* Main Headline with Glass Backing */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-dark)] tracking-tight leading-[1.2]">
            <span className="block font-serif text-[var(--color-dark)] drop-shadow-sm">
              {t('hero.headline')}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[var(--color-dark)]/85 font-medium leading-relaxed mb-10 drop-shadow-xs">
          {t('hero.subtitle')}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <Link
            href="/#pillars"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
          >
            <span>{t('hero.exploreMission')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/auth/sign-up"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[var(--color-saffron)] text-[var(--color-saffron-deep)] hover:bg-[var(--color-cream)] font-bold text-base shadow-sm hover:shadow transition-all duration-200"
          >
            <span>{t('hero.joinMission')}</span>
          </Link>
        </div>

        {/* Key Highlights Micro-Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-[var(--color-border)]/80">
          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[var(--color-border-light)] shadow-xs hover:border-[var(--color-saffron)]/40 transition-colors text-center">
            <span className="block font-bold text-sm text-[var(--color-dark)]">गौ सेवा</span>
            <span className="text-[11px] text-[var(--color-saffron-deep)] font-semibold">Gau Seva</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[var(--color-border-light)] shadow-xs hover:border-[var(--color-green)]/40 transition-colors text-center">
            <span className="block font-bold text-sm text-[var(--color-dark)]">प्राकृतिक कृषि</span>
            <span className="text-[11px] text-[var(--color-green-dark)] font-semibold">Natural Farming</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[var(--color-border-light)] shadow-xs hover:border-[var(--color-saffron)]/40 transition-colors text-center">
            <span className="block font-bold text-sm text-[var(--color-dark)]">मातृ शक्ति</span>
            <span className="text-[11px] text-[var(--color-saffron-deep)] font-semibold">Matri Shakti</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[var(--color-border-light)] shadow-xs hover:border-[var(--color-earth)]/40 transition-colors text-center">
            <span className="block font-bold text-sm text-[var(--color-dark)]">आत्मनिर्भर भारत</span>
            <span className="text-[11px] text-[var(--color-earth)] font-semibold">Self-Reliant</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/#about"
            className="inline-flex flex-col items-center text-[var(--color-muted)] hover:text-[var(--color-saffron)] transition-colors text-xs font-semibold"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-5 h-5 animate-bounce text-[var(--color-saffron)]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
