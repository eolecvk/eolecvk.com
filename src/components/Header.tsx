import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-content-wide mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-accent transition">
          Eole Cervenka
        </Link>
        <div className="flex gap-6">
          <Link href="/work" className="hover:text-accent transition">
            Portfolio
          </Link>
          <Link href="/resume" className="hover:text-accent transition">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  )
}
