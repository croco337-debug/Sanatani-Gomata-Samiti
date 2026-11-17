'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/context';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFFCF6] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--color-border-light)] shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] flex items-center justify-center mb-6">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-dark)] mb-4">
            {t('footer.privacyPolicy')}
          </h1>
          <p className="text-xs text-[var(--color-muted)] mb-8">
            Last Updated: November 2024
          </p>

          <div className="space-y-6 text-sm text-[var(--color-dark)]/85 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">1. Overview</h2>
              <p>
                Sanatani Gomata Samiti is committed to protecting your personal privacy. This Privacy Policy details how we collect, use, and protect your information when you interact with our website, membership portal, and community activities.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">2. Information We Collect</h2>
              <p>
                We only collect information voluntarily provided by you, such as your name, email address, phone number, and village/district when you register for membership, submit a contact request, or join our activities.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">3. How We Use Information</h2>
              <p>
                Your information is used solely for organizational coordination, membership communication, Gau Seva project updates, and responding to inquiries. We do not sell, rent, or trade personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">4. Data Security</h2>
              <p>
                We implement strict security practices through modern authentication and database access controls to safeguard your data against unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-2">5. Contact Information</h2>
              <p>
                For questions regarding your data or to request updates to your records, please contact us at info@sanatanigomatasamiti.org.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
