import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://eolecvk.com'),
  title: 'Eole Cervenka',
  description: 'AI/ML Engineer - Projects and Resume',
  authors: [{ name: 'Eole Cervenka' }],
  creator: 'Eole Cervenka',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Eole Cervenka',
    description: 'AI/ML Engineer — Building AI/ML systems for media production and LLM applications',
    type: 'website',
    url: 'https://eolecvk.com',
    images: ['/screenshot.webp'],
    siteName: 'Eole Cervenka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eole Cervenka',
    description: 'AI/ML Engineer — Building AI/ML systems for media production and LLM applications',
    images: ['/screenshot.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-3 focus:bg-accent focus:text-dark focus:font-semibold">
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
