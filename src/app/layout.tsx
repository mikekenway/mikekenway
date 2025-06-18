
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
const OG_IMAGE = 'https://mikekenway.com/images/og-image.png';

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
      <body className='bg-black' >
          <Navbar />
          <main className={inter.className}>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
