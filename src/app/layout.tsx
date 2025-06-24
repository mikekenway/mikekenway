import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

// Site Metadata
const SITE_TITLE = 'Mike Kenway - Portfolio';
const SITE_DESCRIPTION = 'UX Designer & Creative Director.';
const SITE_URL = 'https://mikekenway.com';
const OG_IMAGE = 'https://mikekenway.com/images/logo.png';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Mike Kenway',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@mikekenway',
    images: [{ url: OG_IMAGE }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-black'>
          <Navbar />
        <div className='relative w-full min-h-screen overflow-x-hidden'>
          {/* Indigo Gradient Splash (Top Left) */}
          <div
            className='pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] z-0'
            aria-hidden='true'
          >
            <div className='w-full h-full bg-gradient-to-br from-indigo-900 via-indigo-700 to-transparent opacity-40 blur-[90px] rounded-full' />
          </div>
          {/* Pink Gradient Splash (Bottom Right) */}
          <div
            className='pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] z-0'
            aria-hidden='true'
          >
            <div className='w-full h-full bg-gradient-to-tr from-pink-900 via-pink-700 to-transparent opacity-40 blur-[90px] rounded-full' />
          </div>

          <div className='relative z-10'>
            <main className={inter.className}>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
