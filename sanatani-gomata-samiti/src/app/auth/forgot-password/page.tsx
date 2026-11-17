'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { createClient } from '@/lib/supabase/client';
import { KeyRound, AlertCircle, CheckCircle2, ArrowLeft, Sun } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your_supabase')) {
        await new Promise((res) => setTimeout(res, 800));
        setSuccess(true);
        return;
      }

      const supabase = createClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      });

      if (resetError) {
        setError(resetError.message);
        return;
      }

      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : t('common.error');
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8ED] to-[#FFFCF6]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-border-light)] shadow-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mx-auto mb-4">
            <KeyRound className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-dark)] tracking-tight">
            {t('auth.forgotPasswordTitle')}
          </h1>
          <p className="text-xs text-[var(--color-muted)] mt-1">
            {t('auth.forgotPasswordSubtitle')}
          </p>
        </div>

        {success ? (
          <div className="p-6 rounded-2xl bg-[var(--color-green)]/10 border border-[var(--color-green)]/30 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-[var(--color-green)] mx-auto mb-3" />
            <h3 className="font-bold text-base text-[var(--color-dark)]">Reset Link Sent</h3>
            <p className="text-xs text-[var(--color-muted)] mt-1">
              {t('auth.resetLinkSent')}
            </p>
            <div className="mt-6">
              <Link
                href="/auth/sign-in"
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[var(--color-saffron)] text-white text-xs font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t('auth.backToSignIn')}</span>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                {t('auth.email')} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                placeholder="name@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-semibold text-sm shadow-md transition-all disabled:opacity-50"
            >
              <span>{loading ? t('common.loading') : t('auth.sendResetLink')}</span>
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-[var(--color-border-light)] text-center">
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-saffron-deep)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('auth.backToSignIn')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
