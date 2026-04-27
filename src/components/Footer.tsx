import { LINKS, CAL_URL, CAL_ENABLED, LINKEDIN_URL } from '@/lib/profile'

const LAST_UPDATED = '2026-04-26'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-500">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={CAL_ENABLED ? CAL_URL : LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Book a call
          </a>
          <span className="ml-auto font-mono text-xs text-gray-400 dark:text-gray-600">
            updated {LAST_UPDATED}
          </span>
        </div>
      </div>
    </footer>
  )
}
