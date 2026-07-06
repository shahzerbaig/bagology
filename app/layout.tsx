import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--sg-font',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--inter-font',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--plex-font',
  display: 'swap',
});

const siteUrl = 'https://eco.bagology.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Bagology | Premium Non-Woven & BOPP Bag Manufacturer, Exporting from India',
  description:
    'Bagology manufactures premium non-woven, BOPP and metallic BOPP bags for retail, corporate and export clients across the US and Europe. Custom branding, bulk production, flexible MOQs, and reliable worldwide shipping from Rajkot, India.',
  keywords: [
    'non-woven bags manufacturer India',
    'BOPP bags exporter',
    'custom packaging bags wholesale',
    'sustainable packaging manufacturer',
    'private label bag manufacturer',
    'reusable shopping bags export',
  ],
  openGraph: {
    title: 'Bagology — The Science of Smart Packaging',
    description:
      'Premium non-woven and BOPP bag manufacturing, exported worldwide with flexible MOQs and reliable global shipping.',
    url: siteUrl,
    siteName: 'Bagology',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bagology — The Science of Smart Packaging',
    description:
      'Premium non-woven and BOPP bag manufacturing, exported worldwide with flexible MOQs and reliable global shipping.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
