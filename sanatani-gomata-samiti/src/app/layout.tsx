import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Sanatani Gomata Samiti | सनातनी गोमाता समिति | সনাতনী গোমাতা সমিতি',
    template: '%s | Sanatani Gomata Samiti',
  },
  description:
    'Protecting Gomata, Empowering Matri Shakti, Reviving Natural Agriculture, and Building a Self-Reliant Bharat. Official Web Platform of Sanatani Gomata Samiti (সनातनी गोमाता समिति / সনাতনী গোমাতা সমিতি ভারত).',
  keywords: [
    'সনাতনী গোমাতা সমিতি',
    'সনাতনী গোমাতা সমিতি ভারত',
    'सनातनी गोमाता समिति',
    'सनातनी गोमाता समिति भारत',
    'Sanatani Gomata Samiti',
    'Sanatani Gomata Samiti Bharat',
    'Gau Seva',
    'গো সেবা',
    'गौ सेवा',
    'Matri Shakti',
    'মাতৃশক্তির ক্ষমতায়ন',
    'मातृशक्ति',
    'Natural Agriculture',
    'জৈবিক কৃষি',
    'जैविक कृषि',
    'Indigenous Cow Protection',
    'দেশি গো-বংশ সংরক্ষণ',
    'Rural Development',
    'স্বনির্ভর ভারত',
    'sanatanigomatasamiti.org',
  ],
  authors: [{ name: 'Sanatani Gomata Samiti' }],
  metadataBase: new URL('https://sanatanigomatasamiti.org'),
  alternates: {
    canonical: 'https://sanatanigomatasamiti.org',
  },
  openGraph: {
    title: 'Sanatani Gomata Samiti | सनातनी गोमाता समिति | সনাতনী গোমাতা সমিতি',
    description:
      'Protecting Gomata, Empowering Matri Shakti, Reviving Natural Agriculture, and Building a Self-Reliant Bharat. Official Web Platform.',
    url: 'https://sanatanigomatasamiti.org',
    siteName: 'Sanatani Gomata Samiti',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFCF6] text-[#29251F] selection:bg-[#E89B32]/20 selection:text-[#C87919]">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
