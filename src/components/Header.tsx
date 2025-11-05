'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === '/') {
      // Already on homepage, just scroll to projects
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to homepage with projects hash
      router.push('/#projects')
    }
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl font-bold tracking-wider transition ${
            isActive('/') ? 'text-accent' : 'hover:text-accent'
          }`}
        >
          EC
        </Link>
        <div className="flex gap-6 text-base">
          <a
            href="/#projects"
            onClick={handleProjectsClick}
            className={`transition cursor-pointer ${
              pathname === '/' ? 'text-accent' : 'hover:text-accent'
            }`}
          >
            Projects
          </a>
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
            Media Lab ↗
          </a>
        </div>
      </nav>
    </header>
  )
}
