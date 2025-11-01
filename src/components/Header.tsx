import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-content-wide mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative">
          <Image
            src="/logo.svg"
            alt=""
            width={100}
            height={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            priority
          />
          <Link
            href="/"
            className="relative z-10 text-2xl font-bold tracking-wider hover:text-accent transition drop-shadow-[0_2px_6px_rgba(255,255,255,1)] drop-shadow-[0_1px_3px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_6px_rgba(0,0,0,1)] dark:drop-shadow-[0_1px_3px_rgba(0,0,0,1)]"
          >
            EC
          </Link>
        </div>
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
