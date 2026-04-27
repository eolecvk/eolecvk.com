import NowLine from '@/components/NowLine'
import {
  NAME,
  ROLE,
  CAL_URL,
  CAL_ENABLED,
  LINKEDIN_URL,
  LINKS,
} from '@/lib/profile'

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-16 md:pt-28 pb-16">
      {/* Hero */}
      <section>
        <div className="flex items-start gap-5">
          <img
            src="/eole.webp"
            alt={`${NAME} portrait`}
            width={56}
            height={56}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-800"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {NAME}
            </h1>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-500 font-mono">
              {ROLE}
            </p>
          </div>
        </div>

        <p className="mt-8 md:mt-10 max-w-[60ch] text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <NowLine />
        </p>
        <p className="mt-8 max-w-[60ch] text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-900 dark:text-gray-100 underline decoration-gray-300 dark:decoration-gray-700 underline-offset-2 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors"
          >
            Message on LinkedIn
          </a>{' '}
          or{' '}
          <a
            href={CAL_ENABLED ? CAL_URL : LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-900 dark:text-gray-100 underline decoration-gray-300 dark:decoration-gray-700 underline-offset-2 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors"
          >
            find time to chat
          </a>
          .
        </p>
      </section>
    </div>
  )
}
