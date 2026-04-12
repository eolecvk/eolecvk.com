import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CreativeRush Media Lab - Eole Cervenka',
  description: 'Collaborative R&D for Modern Filmmakers — Cinematic Vision Meets AI',
}

export default function LabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
