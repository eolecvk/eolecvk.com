import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
    description: 'ML engineer building production systems for LLM and generative AI applications',
    type: 'website',
    url: 'https://eolecvk.com',
    images: ['/screenshot.webp'],
    siteName: 'Eole Cervenka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eole Cervenka',
    description: 'ML engineer building production systems for LLM and generative AI applications',
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
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-3 focus:bg-gray-900 focus:text-white focus:font-semibold">
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
