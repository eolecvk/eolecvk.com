import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'CreativeRush Media Lab - Eole Cervenka',
  description: 'Collaborative R&D for Modern Filmmakers — Cinematic Vision Meets AI',
}

export default function LabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="lab-dark-mode"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.body.classList.add('lab-dark');`,
        }}
      />
      {children}
    </>
  )
}
