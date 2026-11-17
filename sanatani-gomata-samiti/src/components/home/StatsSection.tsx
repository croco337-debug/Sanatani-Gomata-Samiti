'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/context';
import { Clock, Users, HeartHandshake, MapPin } from 'lucide-react';

interface StatsSectionProps {
  stats?: {
    yearsOfService?: string;
    cowsDonated?: string;
    mothersInterested?: string;
    villagesReached?: string;
  };
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const { t } = useLanguage();

  const statItems = [
    {
      value: stats?.yearsOfService || '10+',
      label: t('stats.yearsOfService'),
      subtitle: 'Dedicated Personal Initiative',
      icon: Clock,
    },
    {
      value: stats?.cowsDonated || '67',
      label: t('stats.cowsDonated'),
      subtitle: 'Indigenous Cows Distributed',
      icon: HeartHandshake,
    },
    {
      value: stats?.mothersInterested || '5000+',
      label: t('stats.mothersInterested'),
      subtitle: 'Across Various Villages',
      icon: Users,
    },
    {
      value: stats?.villagesReached || 'Multiple',
      label: t('stats.villagesReached'),
      subtitle: 'Rural Communities Connected',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-[#29251F] text-white relative overflow-hidden">
      {/* Decorative ambient saffron glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-saffron)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-saffron)]">
            {t('stats.sectionSubtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            {t('stats.sectionTitle')}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-[var(--color-saffron)]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-saffron)]/20 border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[var(--color-saffron)] mb-2">
                  {item.value}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-[#A89F94]">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-[#8E867C] max-w-lg mx-auto">
          * Information provided based on verified organizational records of Sanatani Gomata Samiti initiatives.
        </div>
      </div>
    </section>
  );
}
