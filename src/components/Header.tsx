'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname.startsWith('/projects')
    }
    return pathname.startsWith(path)
  }

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === '/') {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/#projects')
    }
  }

  const linkClasses = (path: string) =>
    `transition-colors duration-200 focus-visible:text-accent focus-visible:outline-none relative pb-1 ${
      isActive(path)
        ? 'text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent'
        : 'hover:text-accent'
    }`

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
        >
          EC
        </Link>
        <div className="flex gap-6 text-base">
          <a
            href="/#projects"
            onClick={handleProjectsClick}
            className={linkClasses('/')}
          >
            Projects
          </a>
          <Link href="/resume" className={linkClasses('/resume')}>
            Resume
          </Link>
          <Link href="/lab" className={linkClasses('/lab')}>
            Media Lab
          </Link>
        </div>
      </nav>
    </header>
  )
}
