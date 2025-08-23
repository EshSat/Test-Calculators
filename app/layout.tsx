import type { Metadata } from 'next';
import './(site)/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'EMI, Loan & Insurance Calculators (India)',
  description: 'Fast, accurate EMI & loan affordability calculators with India-specific examples. AdSense-ready, mobile-first.',
  openGraph: {
    title: 'EMI, Loan & Insurance Calculators (India)',
    description: 'Fast, accurate EMI & loan affordability calculators with India-specific examples.',
    url: 'https://example.com/',
    siteName: 'Finance Calculators India',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
