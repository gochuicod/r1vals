import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Inter, Orbitron, Space_Grotesk, Bebas_Neue } from 'next/font/google';

import '@/app/globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'R1vals - Reimagining Football for the Digital Age',
  description:
    'R1VALS is a stage built to crown champions and change lives. Powered by 30+ years of sports and entertainment experience, we have reimagined football for the digital age.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'R1VALS - Reimagining Football for the Digital Age',
    description:
      'R1VALS is a stage built to crown champions and change lives. Powered by 30+ years of sports and entertainment experience, we have reimagined football for the digital age.',
    url: 'https://www.r1vals.com/en',
    siteName: 'R1VALS',
    images: [
      {
        url: '/opengraph/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'R1VALS',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R1VALS',
    description:
      'R1VALS is a stage built to crown champions and change lives. Powered by 30+ years of sports and entertainment experience, we have reimagined football for the digital age.',
    images: ['/twitter-card/opengraph.webp'],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${bebasNeue.variable}`}
    >
      <body className={`font-body flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="flex-1 bg-black">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-7B5583VFKD" />
      </body>
    </html>
  );
}
