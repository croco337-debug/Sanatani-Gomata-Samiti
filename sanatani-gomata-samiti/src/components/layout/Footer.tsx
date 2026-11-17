'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGES } from '@/types';
import { Sun, Heart, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const [currentYear, setCurrentYear] = useState('2024');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#211E1A] text-[#F5EFEB] relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Organization Identity & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-saffron)]/20 border border-[var(--color-saffron)]/50 flex items-center justify-center text-[var(--color-saffron)]">
                <Sun className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">
                  सनातनी गोमाता समिति
                </span>
                <span className="text-[10px] font-semibold text-[var(--color-saffron)] tracking-wider uppercase">
                  SANATANI GOMATA SAMITI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BDB5AB] leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/share/1Dxtq4K5mh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[var(--color-saffron)] hover:border-[var(--color-saffron)] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[var(--color-saffron)] hover:border-[var(--color-saffron)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[var(--color-saffron)] hover:border-[var(--color-saffron)] transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[var(--color-saffron)] hover:border-[var(--color-saffron)] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-saffron)] border-b border-white/10 pb-2">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/gau-seva" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.gauSeva')}
                </Link>
              </li>
              <li>
                <Link href="/agriculture" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.agriculture')}
                </Link>
              </li>
              <li>
                <Link href="/matri-shakti" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.matriShakti')}
                </Link>
              </li>
              <li>
                <Link href="/animal-husbandry" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.animalHusbandry')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Sections */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-saffron)] border-b border-white/10 pb-2">
              {t('footer.importantLinks')}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/activities" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.activities')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/auth/sign-up" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('nav.signUp')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#CFC6BC] hover:text-[var(--color-saffron)] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[var(--color-saffron)]" />
                  {t('footer.termsConditions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-saffron)] border-b border-white/10 pb-2">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#CFC6BC]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                <span>Sanatani Gomata Samiti, Bharat</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--color-saffron)] shrink-0" />
                <a href="mailto:info@sanatanigomatasamiti.org" className="hover:text-[var(--color-saffron)]">
                  info@sanatanigomatasamiti.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--color-saffron)] shrink-0" />
                <a href="tel:+919851053555" className="hover:text-[var(--color-saffron)] font-medium">
                  +91 98510 53555
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FacebookIcon className="w-4 h-4 text-[var(--color-saffron)] shrink-0" />
                <a
                  href="https://www.facebook.com/share/1Dxtq4K5mh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-saffron)] inline-flex items-center gap-1 font-medium"
                >
                  <span>Facebook Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </a>
              </li>
            </ul>

            {/* Quick Language Toggle */}
            <div className="pt-2">
              <span className="text-[11px] text-[#81786D] block mb-1.5 uppercase font-medium">Select Language:</span>
              <div className="flex gap-1.5">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      language === l.code
                        ? 'bg-[var(--color-saffron)] text-white font-semibold'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {l.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E867C]">
          <p>{t('footer.copyright', { year: currentYear.toString() })}</p>
          <div className="flex items-center gap-1.5 text-[var(--color-saffron-light)]">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-3.5 h-3.5 fill-current text-[var(--color-saffron)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
