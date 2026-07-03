import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Charvigne CleanConnect - Cleaning Made Easy, Anytime, Anywhere',
  description: 'Charvigne CleanConnect connects you with trusted, verified cleaners in your area—fast, reliable, and completely stress-free.',
  keywords: 'cleaning services, Nigeria, Lagos, Abuja, Port Harcourt, home cleaning, office cleaning',
  openGraph: {
    title: 'Charvigne CleanConnect',
    description: 'Cleaning Made Easy, Anytime, Anywhere.',
    url: 'https://cleanconnect.ng',
    siteName: 'Charvigne CleanConnect',
    images: [
      {
        url: 'https://cleanconnect.ng/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charvigne CleanConnect',
    description: 'Cleaning Made Easy, Anytime, Anywhere.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
