import {
  POSITIONING,
  POSITIONING_COMPANY,
  POSITIONING_COMPANY_URL,
} from '@/lib/profile'

/**
 * Single-source rendering of the "Currently building … @ Company" sentence.
 * Used on `/` (hero) and `/about` (Now block) so any tweak propagates.
 */
export default function NowLine() {
  return (
    <>
      {POSITIONING}{' '}
      <span className="text-gray-400 dark:text-gray-600">@</span>{' '}
      <a
        href={POSITIONING_COMPANY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 underline decoration-gray-300 dark:decoration-gray-700 underline-offset-2 hover:decoration-gray-900 dark:hover:decoration-gray-100 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
      >
        {POSITIONING_COMPANY}
      </a>
      .
    </>
  )
}
