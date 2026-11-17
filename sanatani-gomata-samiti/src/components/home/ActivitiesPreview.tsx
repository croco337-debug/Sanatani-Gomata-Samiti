'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { Calendar, ArrowRight, Newspaper, Tag } from 'lucide-react';

export default function ActivitiesPreview() {
  const { t } = useLanguage();

  const sampleActivities = [
    {
      id: '1',
      title: 'Connecting Rural Mothers with Indigenous Cows',
      category: 'Matri Shakti',
      date: 'Recent Initiative',
      description: 'Strengthening self-reliant families by empowering rural mothers through the distribution and care of indigenous Indian cows.',
    },
    {
      id: '2',
      title: 'Promoting Natural Agriculture & Cow-Based Manure',
      category: 'Agriculture',
      date: 'Field Workshop',
      description: 'Educating local farming families on reviving soil health using natural cow dung and urine preparations instead of chemical inputs.',
    },
    {
      id: '3',
      title: 'Gau Seva & Native Breed Preservation Efforts',
      category: 'Gau Seva',
      date: 'Heritage Mission',
      description: 'Highlighting the cultural, spiritual, and ecological significance of indigenous cow breeds in Indian villages.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-saffron-deep)]">
            {t('activities.sectionSubtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mt-2 tracking-tight">
            {t('activities.sectionTitle')}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleActivities.map((act) => (
            <article
              key={act.id}
              className="bg-white rounded-3xl border border-[var(--color-border-light)] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual placeholder header */}
                <div className="aspect-16/9 bg-[var(--color-cream)] flex items-center justify-center p-6 border-b border-[var(--color-border-light)] relative">
                  <div className="w-12 h-12 rounded-full bg-white/80 border border-[var(--color-saffron)]/30 flex items-center justify-center text-[var(--color-saffron)] group-hover:scale-105 transition-transform">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-[var(--color-saffron-deep)] shadow-xs">
                    <Tag className="w-3 h-3" />
                    <span>{act.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                    <span>{act.date}</span>
                  </div>

                  <h3 className="font-bold text-lg text-[var(--color-dark)] mb-3 leading-snug group-hover:text-[var(--color-saffron-deep)] transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {act.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/activities`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-saffron-deep)] hover:text-[var(--color-saffron)] transition-colors"
                >
                  <span>{t('activities.readMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron-deep)] font-semibold text-sm transition-all shadow-xs"
          >
            <span>{t('activities.viewAll')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
