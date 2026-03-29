import type { Metadata } from 'next'
import '../globals.css'

const defaultMetadata: Metadata = {
  title: 'Deep North Barber | Premium Men\'s Haircuts & Beard Grooming in Gordon',
  description: 'Precision barbering and grooming in Gordon, Sydney. Expert skin fades, beard trims, and signature haircuts tailored to your head shape. Book with Ervin today.',
  keywords: 'barber Gordon, barbershop Gordon, men\'s haircut, skin fade, beard trim, barber North Shore Sydney, premium barber',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  authors: [{ name: 'Deep North Barber' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://deepnorthbarber.com.au',
    siteName: 'Deep North Barber',
    title: 'Deep North Barber | Premium Men\'s Haircuts & Beard Grooming in Gordon',
    description: 'Precision barbering and grooming in Gordon, Sydney.',
    images: [
      {
        url: 'https://deepnorthbarber.com.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deep North Barber',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep North Barber',
    description: 'Premium men\'s barbershop in Gordon, Sydney',
    images: ['https://deepnorthbarber.com.au/og-image.jpg'],
  },
}

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-black text-brand-bone">
        {children}
      </body>
    </html>
  )
}
