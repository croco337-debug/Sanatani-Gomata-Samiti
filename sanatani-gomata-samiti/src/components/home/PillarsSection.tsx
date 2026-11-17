'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { Heart, Sprout, Users, Home, ArrowRight } from 'lucide-react';

export default function PillarsSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'gau-seva',
      icon: Heart,
      title: t('pillars.gauSeva.title'),
      description: t('pillars.gauSeva.description'),
      explore: t('pillars.gauSeva.explore'),
      href: '/gau-seva',
      badge: '01',
      color: 'text-[var(--color-saffron)]',
      bgColor: 'bg-[var(--color-saffron)]/10',
    },
    {
      id: 'agriculture',
      icon: Sprout,
      title: t('pillars.agriculture.title'),
      description: t('pillars.agriculture.description'),
      explore: t('pillars.agriculture.explore'),
      href: '/agriculture',
      badge: '02',
      color: 'text-[var(--color-green)]',
      bgColor: 'bg-[var(--color-green)]/10',
    },
    {
      id: 'matri-shakti',
      icon: Users,
      title: t('pillars.matriShakti.title'),
      description: t('pillars.matriShakti.description'),
      explore: t('pillars.matriShakti.explore'),
      href: '/matri-shakti',
      badge: '03',
      color: 'text-[var(--color-saffron-deep)]',
      bgColor: 'bg-[var(--color-saffron-deep)]/10',
    },
    {
      id: 'animal-husbandry',
      icon: Home,
      title: t('pillars.animalHusbandry.title'),
      description: t('pillars.animalHusbandry.description'),
      explore: t('pillars.animalHusbandry.explore'),
      href: '/animal-husbandry',
      badge: '04',
      color: 'text-[var(--color-earth)]',
      bgColor: 'bg-[var(--color-earth)]/10',
    },
  ];

  return (
    <section id="pillars" className="py-20 md:py-28 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-saffron-deep)]">
            {t('pillars.sectionSubtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mt-2 tracking-tight">
            {t('pillars.sectionTitle')}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Pillars Grid (2x2 on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-border-light)] shadow-xs hover:shadow-xl hover:border-[var(--color-saffron)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.bgColor} flex items-center justify-center ${pillar.color} transition-transform group-hover:scale-110 duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-[var(--color-border)] group-hover:text-[var(--color-saffron-light)] transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-dark)] mb-4 tracking-tight group-hover:text-[var(--color-saffron-deep)] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-light)]">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-saffron-deep)] group-hover:text-[var(--color-saffron)] transition-colors"
                  >
                    <span>{pillar.explore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
