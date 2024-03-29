import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter, Indie_Flower, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const indie_flower = Indie_Flower({ subsets: ['latin'], weight: '400' });
export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '300', '200'],
}); // revision of necessary fonts

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
