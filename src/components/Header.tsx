'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const

export default function Header() {
  const pathname = usePathname() ?? '/'

  return (
    <header className="max-w-3xl mx-auto px-6 pt-8 md:pt-10 pb-6 border-b border-gray-200 dark:border-gray-800">
      <nav className="flex items-baseline justify-center gap-12 md:gap-20 text-sm" aria-label="Primary">
        {NAV.map(({ href, label }) => {
          const active =
            href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={
                active
                  ? 'text-gray-900 dark:text-gray-100 underline decoration-gray-900 dark:decoration-gray-100 underline-offset-4'
                  : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
              }
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
