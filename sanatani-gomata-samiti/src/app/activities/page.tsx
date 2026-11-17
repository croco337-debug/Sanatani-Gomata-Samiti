'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n/context';
import { Newspaper, Calendar, Tag, Search, ArrowRight, Sparkles } from 'lucide-react';

export default function ActivitiesPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activities = [
    {
      id: '1',
      title: 'Connecting Rural Mothers with Indigenous Cows',
      category: 'Matri Shakti',
      date: 'November 2024',
      description: 'Strengthening self-reliant families by empowering rural mothers through the distribution and care of indigenous Indian cows. 67 mothers have already received cows, with hundreds more actively participating in village consultations.',
      details: 'This initiative focuses on ensuring long-term dignity and financial independence for village families while nurturing indigenous cow breeds.'
    },
    {
      id: '2',
      title: 'Promoting Natural Agriculture & Cow-Based Manure',
      category: 'Agriculture',
      date: 'October 2024',
      description: 'Educating local farming families on reviving soil health using natural cow dung and urine preparations instead of chemical inputs. Demonstrations of Jeevamrit and traditional organic composting were conducted.',
      details: 'Farmers noted improvements in soil moisture retention and reduced dependency on costly synthetic fertilizers.'
    },
    {
      id: '3',
      title: 'Gau Seva & Native Breed Preservation Efforts',
      category: 'Gau Seva',
      date: 'September 2024',
      description: 'Highlighting the cultural, spiritual, and ecological significance of indigenous cow breeds in Indian villages. Seminars and community dialogues on native livestock resilience were held.',
      details: 'Community elders and youth participated in discussions regarding traditional shelter maintenance and holistic fodder management.'
    },
    {
      id: '4',
      title: 'Village Self-Reliance & Animal Husbandry Guidance',
      category: 'Rural Development',
      date: 'August 2024',
      description: 'Guidance camps on preventive livestock health, indigenous fodder cultivation, and establishing circular village economies centered around cow welfare.',
      details: 'Veterinary care best practices and traditional herbal treatments for common livestock ailments were shared.'
    }
  ];

  const categories = ['all', 'Gau Seva', 'Agriculture', 'Matri Shakti', 'Rural Development'];

  const filteredActivities = activities.filter((act) => {
    const matchesCategory = selectedCategory === 'all' || act.category === selectedCategory;
    const matchesSearch =
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF5E5] to-[#FFFCF6] py-16 md:py-24 border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[var(--color-saffron)]/30 text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider mb-4 shadow-xs">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Updates & News</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-dark)] tracking-tight">
            {t('activities.pageTitle')}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            {t('activities.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 border-b border-[var(--color-border-light)] bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[var(--color-saffron)] text-white shadow-xs'
                    : 'bg-white border border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-saffron)]'
                }`}
              >
                {cat === 'all' ? 'All Activities' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-[var(--color-border)] text-xs text-[var(--color-dark)] bg-white focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none"
            />
          </div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[var(--color-border-light)] max-w-xl mx-auto">
              <Newspaper className="w-12 h-12 text-[var(--color-muted-light)] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[var(--color-dark)]">No activities found</h3>
              <p className="text-xs text-[var(--color-muted)] mt-1">{t('activities.noActivities')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((act) => (
                <article
                  key={act.id}
                  className="bg-white rounded-3xl border border-[var(--color-border-light)] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Cover Placeholder */}
                    <div className="aspect-16/9 bg-[var(--color-cream)] flex items-center justify-center p-6 border-b border-[var(--color-border-light)] relative">
                      <div className="w-12 h-12 rounded-full bg-white/80 border border-[var(--color-saffron)]/30 flex items-center justify-center text-[var(--color-saffron)] group-hover:scale-105 transition-transform">
                        <Newspaper className="w-6 h-6" />
                      </div>
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-[var(--color-saffron-deep)] shadow-xs">
                        <Tag className="w-3 h-3" />
                        <span>{act.category}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                        <span>{act.date}</span>
                      </div>

                      <h3 className="font-bold text-lg text-[var(--color-dark)] mb-3 leading-snug group-hover:text-[var(--color-saffron-deep)] transition-colors">
                        {act.title}
                      </h3>

                      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                        {act.description}
                      </p>

                      <div className="p-3.5 rounded-2xl bg-[var(--color-cream)]/50 border border-[var(--color-border-light)] text-xs text-[var(--color-dark)]/80 leading-relaxed">
                        {act.details}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-2 border-t border-[var(--color-border-light)]/60">
                    <span className="text-xs font-semibold text-[var(--color-saffron-deep)]">
                      Official Sanatani Gomata Samiti Report
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
