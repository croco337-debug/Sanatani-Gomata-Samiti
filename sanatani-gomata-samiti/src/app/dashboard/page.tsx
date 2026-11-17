'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGES } from '@/types';
import type { Language } from '@/types';
import { createClient } from '@/lib/supabase/client';
import { User, Settings, LogOut, Globe, Heart, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';

interface MockUser {
  email: string;
  full_name?: string;
  phone?: string;
  role?: string;
  preferred_language?: Language;
}

export default function UserDashboardPage() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const [user, setUser] = useState<MockUser | null>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    // Check auth from Supabase or mock local storage
    const fetchUser = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your_supabase')) {
        const stored = localStorage.getItem('sgs_auth_mock');
        if (stored) {
          const parsed = JSON.parse(stored);
          setUser(parsed);
          setFullName(parsed.full_name || 'Valued Member');
          setPhone(parsed.phone || '');
        } else {
          setUser({ email: 'member@sanatanigomatasamiti.org', full_name: 'Sanatani Sevak' });
          setFullName('Sanatani Sevak');
        }
        return;
      }

      const supabase = createClient();
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (!authUser) {
        router.push('/auth/sign-in');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single();

      setUser({
        email: authUser.email || '',
        full_name: profile?.full_name || authUser.user_metadata?.full_name || 'Member',
        phone: profile?.phone || '',
        role: profile?.role || 'user',
        preferred_language: profile?.preferred_language || 'en',
      });
      setFullName(profile?.full_name || authUser.user_metadata?.full_name || '');
      setPhone(profile?.phone || '');
    };

    fetchUser();
  }, [router]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const updated = { ...user, full_name: fullName, phone };
      setUser(updated);
      localStorage.setItem('sgs_auth_mock', JSON.stringify(updated));
      setSavedSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('sgs_auth_mock');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('your_supabase')) {
      const supabase = createClient();
      await supabase.auth.signOut();
    }
    router.push('/auth/sign-in');
  };

  return (
    <div className="min-h-screen bg-[#FFFCF6] py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header Card */}
        <div className="bg-gradient-to-r from-[var(--color-cream)] to-[#FFF3DE] rounded-3xl p-8 sm:p-10 border border-[var(--color-saffron)]/30 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] shadow-xs">
              <User className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[var(--color-saffron-deep)] uppercase tracking-wider">
                Member Portal
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)] mt-0.5">
                {t('dashboard.welcome', { name: fullName || user?.email || 'Member' })}
              </h1>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Sanatani Gomata Samiti Community Member
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[var(--color-border)] text-xs font-semibold text-[var(--color-dark)] hover:border-red-300 hover:text-red-600 transition-colors shadow-xs"
          >
            <LogOut className="w-4 h-4" />
            <span>{t('dashboard.logout')}</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-[var(--color-green)]/10 border border-[var(--color-green)]/30 text-[var(--color-green-dark)] text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t('dashboard.profileUpdated')}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border-light)] shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-[var(--color-dark)]">
                  {t('dashboard.profile')} Information
                </h2>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-xs font-bold text-[var(--color-saffron-deep)] hover:underline"
                >
                  {isEditing ? t('common.cancel') : t('dashboard.editProfile')}
                </button>
              </div>

              {isEditing ? (
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                      {t('auth.fullName')}
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1">
                      {t('auth.phone')}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-dark)] focus:border-[var(--color-saffron)] outline-none bg-[#FFFCF6]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[var(--color-saffron)] text-white text-xs font-semibold hover:bg-[var(--color-saffron-deep)]"
                    >
                      {t('dashboard.updateProfile')}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-[var(--color-border-light)]">
                    <span className="text-xs text-[var(--color-muted)] font-medium">Full Name</span>
                    <span className="font-semibold text-[var(--color-dark)]">{fullName || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-[var(--color-border-light)]">
                    <span className="text-xs text-[var(--color-muted)] font-medium">Email Address</span>
                    <span className="font-semibold text-[var(--color-dark)]">{user?.email}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-[var(--color-border-light)]">
                    <span className="text-xs text-[var(--color-muted)] font-medium">Phone Number</span>
                    <span className="font-semibold text-[var(--color-dark)]">{phone || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-[var(--color-muted)] font-medium">Membership Role</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green-dark)] text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Active Member</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Initiative Participation Status */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border-light)] shadow-xs">
              <h2 className="text-lg font-bold text-[var(--color-dark)] mb-4">
                Community Initiatives & Updates
              </h2>
              <div className="p-4 rounded-2xl bg-[var(--color-cream)]/70 border border-[var(--color-border-light)] flex items-start gap-3">
                <Heart className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-[var(--color-dark)]/85">
                  <strong className="block text-sm font-bold text-[var(--color-dark)] mb-1">
                    Sanatani Gomata Seva Network
                  </strong>
                  Thank you for being part of the movement. You will receive notifications about upcoming natural farming demonstrations, cow protection camps, and rural support activities.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preferences & Settings */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border-light)] shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="w-5 h-5 text-[var(--color-saffron)]" />
                <h2 className="text-base font-bold text-[var(--color-dark)]">
                  {t('dashboard.accountSettings')}
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-dark)] mb-2 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                    <span>{t('dashboard.languagePreference')}</span>
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => setLanguage(l.code)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                          language === l.code
                            ? 'bg-[var(--color-saffron)] text-white shadow-xs'
                            : 'bg-[var(--color-cream)]/60 text-[var(--color-dark)] hover:bg-[var(--color-cream)]'
                        }`}
                      >
                        <span>{l.nativeName}</span>
                        <span className="text-[10px] uppercase opacity-80">{l.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-light)] text-xs text-[var(--color-muted)]">
                  <p>Account ID: <span className="font-mono text-[10px] text-[var(--color-dark)]">SGS-{user?.email?.split('@')[0]}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
