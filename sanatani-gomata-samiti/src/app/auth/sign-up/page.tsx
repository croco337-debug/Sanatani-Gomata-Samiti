'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGES } from '@/types';
import type { Language } from '@/types';
import { createClient } from '@/lib/supabase/client';
import { UserPlus, Eye, EyeOff, AlertCircle, CheckCircle2, Sun } from 'lucide-react';

export default function SignUpPage() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [preferredLang, setPreferredLang] = useState<Language>(language);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!fullName.trim()) {
      setError(t('auth.nameRequired'));
      return;
    }
    if (!email.trim()) {
      setError(t('auth.emailRequired'));
      return;
    }
    if (password.length < 8) {
      setError(t('auth.passwordTooShort'));
      return;
    }
    if (password !== confirmPassword) {
      setError(t('auth.passwordMismatch'));
      return;
    }
    if (!acceptTerms) {
      setError(t('auth.termsRequired'));
      return;
    }

    setLoading(true);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your_supabase')) {
        // Fallback mock registration
        await new Promise((res) => setTimeout(res, 800));
        localStorage.setItem(
          'sgs_auth_mock',
          JSON.stringify({
            email,
            full_name: fullName,
            phone,
            preferred_language: preferredLang,
            role: 'user',
          })
        );
        setSuccess(true);
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
        return;
      }

      const supabase = createClient();
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone,
            preferred_language: preferredLang,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message || t('auth.signUpError'));
        return;
      }

      if (data?.user) {
        setSuccess(true);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : t('auth.signUpError');
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8ED] to-[#FFFCF6]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-border-light)] shadow-sm">
        {/* Header Icon & Title */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-cream)] border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] mx-auto mb-4">
            <Sun className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-dark)] tracking-tight">
            {t('auth.signUpTitle')}
          </h1>
          <p className="text-xs text-[var(--color-muted)] mt-1">
            {t('auth.signUpSubtitle')}
          </p>
        </div>

        {success ? (
          <div className="p-6 rounded-2xl bg-[var(--color-green)]/10 border border-[var(--color-green)]/30 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-[var(--color-green)] mx-auto mb-3" />
            <h3 className="font-bold text-base text-[var(--color-dark)]">Account Created!</h3>
            <p className="text-xs text-[var(--color-muted)] mt-1">
              {t('auth.verifyEmail')}
            </p>
            <div className="mt-4">
              <Link
                href="/auth/sign-in"
                className="inline-block px-6 py-2 rounded-full bg-[var(--color-saffron)] text-white text-xs font-semibold"
              >
                {t('auth.signIn')}
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                {t('auth.fullName')} *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                placeholder="Shri / Smt..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                {t('auth.email')} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                {t('auth.phone')} *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                placeholder="+91 Phone number"
              />
            </div>

            {/* Language Preference */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                {t('auth.preferredLanguage')}
              </label>
              <select
                value={preferredLang}
                onChange={(e) => {
                  const val = e.target.value as Language;
                  setPreferredLang(val);
                  setLanguage(val);
                }}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeName} ({l.name})
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                {t('auth.password')} *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                  placeholder="Min 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-dark)]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                {t('auth.confirmPassword')} *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                  placeholder="Repeat password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-dark)]"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start pt-1">
              <input
                id="acceptTerms"
                type="checkbox"
                required
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-[var(--color-border)] text-[var(--color-saffron)] focus:ring-[var(--color-saffron)]"
              />
              <label htmlFor="acceptTerms" className="ml-2 text-xs text-[var(--color-muted)] leading-tight cursor-pointer">
                {t('auth.acceptTerms')}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-semibold text-sm shadow-md transition-all disabled:opacity-50 mt-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>{loading ? t('common.loading') : t('auth.signUp')}</span>
            </button>
          </form>
        )}

        <div className="mt-6 pt-5 border-t border-[var(--color-border-light)] text-center text-xs text-[var(--color-muted)]">
          <span>{t('auth.hasAccount')} </span>
          <Link
            href="/auth/sign-in"
            className="font-bold text-[var(--color-saffron-deep)] hover:underline"
          >
            {t('auth.signInHere')}
          </Link>
        </div>
      </div>
    </div>
  );
}
