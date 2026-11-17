'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import { createClient } from '@/lib/supabase/client';
import { LogIn, Eye, EyeOff, AlertCircle, Sun, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SignInPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Check if Supabase keys exist in env
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your_supabase')) {
        // Fallback demo/mock authentication for local dev verification
        await new Promise((res) => setTimeout(res, 800));

        // If admin test credentials
        if (email.toLowerCase().includes('admin')) {
          localStorage.setItem('sgs_auth_mock', JSON.stringify({ email, role: 'admin' }));
          router.push('/admin');
        } else {
          localStorage.setItem('sgs_auth_mock', JSON.stringify({ email, role: 'user' }));
          router.push('/dashboard');
        }
        return;
      }

      const supabase = createClient();
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || t('auth.signInError'));
        return;
      }

      if (data?.user) {
        // Check user role
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();

        if (profile?.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : t('auth.signInError');
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
            {t('auth.signInTitle')}
          </h1>
          <p className="text-xs text-[var(--color-muted)] mt-1">
            {t('auth.signInSubtitle')}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-[var(--color-dark)]">
                {t('auth.password')} *
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-xs text-[var(--color-saffron-deep)] hover:underline"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-11 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] focus:ring-1 focus:ring-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-dark)]"
                aria-label={showPassword ? t('auth.hidePassword') : t('auth.showPassword')}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-saffron)] focus:ring-[var(--color-saffron)]"
            />
            <label htmlFor="rememberMe" className="ml-2 text-xs text-[var(--color-muted)] cursor-pointer">
              {t('auth.rememberMe')}
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white font-semibold text-sm shadow-md transition-all disabled:opacity-50"
          >
            <LogIn className="w-4 h-4" />
            <span>{loading ? t('common.loading') : t('auth.signIn')}</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[var(--color-border-light)] text-center text-xs text-[var(--color-muted)]">
          <span>{t('auth.noAccount')} </span>
          <Link
            href="/auth/sign-up"
            className="font-bold text-[var(--color-saffron-deep)] hover:underline"
          >
            {t('auth.createAccount')}
          </Link>
        </div>
      </div>
    </div>
  );
}
