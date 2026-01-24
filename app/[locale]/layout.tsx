import { NextIntlClientProvider } from 'next-intl';
import { Inter, Orbitron } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

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
    <html lang={locale} className={`${inter.variable} ${orbitron.variable}`}>
      <body className={`font-body flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {/* Navbar here */}
          <main className="flex-1">{children}</main>
          {/* Footer here */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
