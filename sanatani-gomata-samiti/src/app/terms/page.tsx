'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/context';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFFCF6] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--color-border-light)] shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] flex items-center justify-center mb-6">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-dark)] mb-4">
            {t('footer.termsConditions')}
          </h1>
          <p className="text-xs text-[var(--color-muted)] mb-8">
            Last Updated: November 2024
          </p>

          <div className="space-y-6 text-sm text-[var(--color-dark)]/85 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the official website of Sanatani Gomata Samiti, you agree to comply with and be bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">2. Organizational Objectives</h2>
              <p>
                Sanatani Gomata Samiti works dedicatedly towards Gau Seva, natural agriculture revival, women&apos;s empowerment, and animal husbandry. All content and activities published here reflect the values and initiatives of the organization.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">3. User Conduct</h2>
              <p>
                Users agree to use our platform respectfully and in accordance with applicable laws. Misrepresentation of identity or unauthorized access to administrative functions is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">4. Intellectual Property</h2>
              <p>
                All textual, graphic, and multimedia content produced by Sanatani Gomata Samiti is protected by copyright. Reproduction without prior written authorization is not permitted.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
