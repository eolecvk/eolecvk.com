'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-content-wide mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl font-bold tracking-wider transition ${
            isActive('/') ? 'text-accent' : 'hover:text-accent'
          }`}
        >
          EC
        </Link>
        <div className="flex gap-6">
          <Link
            href="/work"
            className={`transition ${
              isActive('/work') ? 'text-accent' : 'hover:text-accent'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={`transition ${
              isActive('/resume') ? 'text-accent' : 'hover:text-accent'
            }`}
          >
            Resume
          </Link>
          <a
            href="https://creativerush.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            Media lab ↗
          </a>
        </div>
      </nav>
    </header>
  )
}
