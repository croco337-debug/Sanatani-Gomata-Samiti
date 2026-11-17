'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';
import { CheckCircle2, Target } from 'lucide-react';

export default function MissionSection() {
  const { t } = useLanguage();

  const objectives = [
    t('mission.objective1'),
    t('mission.objective2'),
    t('mission.objective3'),
    t('mission.objective4'),
    t('mission.objective5'),
  ];

  return (
    <section id="mission" className="py-20 md:py-28 bg-[#FFF8EE] relative overflow-hidden">
      {/* Background image of hands holding fertile soil and sprout: tuned for clear visibility and warm golden-amber ambiance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mission-bg.jpg"
          alt="Sacred Soil and Sprout"
          fill
          sizes="100vw"
          className="object-cover object-center scale-100 opacity-85"
          priority
        />
        {/* Translucent saffron-cream gradient overlay that lets the hands holding soil and sprout shine through clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5E5]/70 via-[#FFFCF6]/60 to-[#FFF5E5]/75" />
        <div className="absolute inset-0 bg-amber-600/15 mix-blend-color" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[var(--color-saffron)]/40 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4 shadow-sm">
              <Target className="w-3.5 h-3.5" />
              <span>{t('mission.sectionSubtitle')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] tracking-tight drop-shadow-xs">
              {t('mission.sectionTitle')}
            </h2>
            <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full shadow-xs" />
          </div>

          {/* Central Philosophy Quote Banner with translucent glass backdrop */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-md border border-white/80 mb-14 text-center relative hover:bg-white/90 transition-all">
            <span className="text-4xl text-[var(--color-saffron)]/40 font-serif leading-none block mb-2">&ldquo;</span>
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[var(--color-dark)] font-medium leading-snug">
              {t('mission.statement')}
            </p>
            <span className="text-4xl text-[var(--color-saffron)]/40 font-serif leading-none block mt-2">&rdquo;</span>
            <div className="mt-4 text-xs font-semibold text-[var(--color-saffron-deep)] tracking-widest uppercase">
              Sanatani Gomata Samiti
            </div>
          </div>

          {/* Detailed Objectives List with translucent cards so the background hands are clearly visible */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-dark)] mb-6 text-center drop-shadow-xs">
              Our Core Objectives for Sustainable Impact
            </h3>
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/85 backdrop-blur-sm border border-white/80 hover:border-[var(--color-saffron)]/60 hover:bg-white/95 transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-saffron)]/15 text-[var(--color-saffron-deep)] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 shadow-xs">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-[var(--color-dark)] font-medium leading-relaxed">
                    {obj}
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
