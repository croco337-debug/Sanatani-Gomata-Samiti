'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGES } from '@/types';
import type { Language } from '@/types';
import { Menu, X, Globe, Sun, ChevronDown, LogIn, UserPlus } from 'lucide-react';

const navLinks = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/gau-seva', labelKey: 'nav.gauSeva' },
  { href: '/agriculture', labelKey: 'nav.agriculture' },
  { href: '/matri-shakti', labelKey: 'nav.matriShakti' },
  { href: '/animal-husbandry', labelKey: 'nav.animalHusbandry' },
  { href: '/activities', labelKey: 'nav.activities' },
  { href: '/gallery', labelKey: 'nav.gallery' },
  { href: '/contact', labelKey: 'nav.contact' },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  const currentLangInfo = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header border-b border-[var(--color-border-light)] shadow-sm py-2.5'
          : 'bg-[#FFFCF6] border-b border-[var(--color-border-light)]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[var(--color-cream)] border border-[var(--color-saffron)]/40 flex items-center justify-center text-[var(--color-saffron)] shadow-xs group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-[var(--color-dark)] leading-tight tracking-tight">
                सनातनी गोमाता समिति
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-saffron-deep)] tracking-widest uppercase">
                SANATANI GOMATA SAMITI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-saffron-deep)] bg-[var(--color-cream)] font-semibold'
                      : 'text-[var(--color-dark)]/85 hover:text-[var(--color-saffron-deep)] hover:bg-[var(--color-cream)]/60'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-medium text-[var(--color-dark)] hover:border-[var(--color-saffron)] transition-colors bg-white/80 shadow-xs"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                <span>{currentLangInfo.nativeName}</span>
                <ChevronDown className="w-3 h-3 text-[var(--color-muted)]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white border border-[var(--color-border-light)] shadow-lg py-1 z-50 animate-scale-in">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-[var(--color-cream)] ${
                        language === l.code
                          ? 'font-bold text-[var(--color-saffron-deep)] bg-[var(--color-cream)]/50'
                          : 'text-[var(--color-dark)]'
                      }`}
                    >
                      <span>{l.nativeName}</span>
                      <span className="text-[10px] text-[var(--color-muted)] uppercase">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <Link
              href="/auth/sign-in"
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--color-dark)] hover:text-[var(--color-saffron-deep)] transition-colors"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{t('nav.signIn')}</span>
            </Link>

            <Link
              href="/auth/sign-up"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white shadow-sm hover:shadow transition-all"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{t('nav.signUp')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Quick Lang Switcher for mobile */}
            <button
              onClick={() => {
                const nextLang: Record<Language, Language> = { en: 'hi', hi: 'bn', bn: 'en' };
                setLanguage(nextLang[language]);
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[var(--color-border)] text-xs font-medium text-[var(--color-dark)] bg-white/80"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[var(--color-saffron)]" />
              <span>{currentLangInfo.nativeName}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[var(--color-dark)] hover:bg-[var(--color-cream)] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFCF6] border-b border-[var(--color-border-light)] px-4 pt-3 pb-6 space-y-3 animate-slide-down shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'text-[var(--color-saffron-deep)] bg-[var(--color-cream)] font-semibold'
                      : 'text-[var(--color-dark)] hover:bg-[var(--color-cream)]/50'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[var(--color-border-light)] flex flex-col gap-2">
            <div className="flex items-center justify-between py-1 px-2">
              <span className="text-xs text-[var(--color-muted)] font-medium">{t('nav.language')}:</span>
              <div className="flex gap-1.5">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                      language === l.code
                        ? 'bg-[var(--color-saffron)] text-white'
                        : 'bg-white border border-[var(--color-border)] text-[var(--color-dark)]'
                    }`}
                  >
                    {l.nativeName}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                href="/auth/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl border border-[var(--color-border)] text-xs font-semibold text-[var(--color-dark)] hover:bg-[var(--color-cream)]"
              >
                {t('nav.signIn')}
              </Link>
              <Link
                href="/auth/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-[var(--color-saffron)] text-white text-xs font-semibold hover:bg-[var(--color-saffron-deep)] shadow-xs"
              >
                {t('nav.signUp')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
