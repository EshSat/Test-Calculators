import type { Metadata } from 'next';
import './(site)/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'EMI, Loan & Insurance Calculators (India)',
  description: 'Fast, accurate calculators with India-focused guides. AdSense-ready, mobile-first.',
  openGraph: {
    title: 'EMI, Loan & Insurance Calculators (India)',
    description: 'Fast, accurate calculators with India-focused guides.',
    url: 'https://example.com/',
    siteName: 'Finance Calculators India',
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
