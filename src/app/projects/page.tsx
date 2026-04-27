import Link from 'next/link'
import { getAllProjects } from '@/lib/mdx'
import { Project } from '@/types/project'

export const metadata = {
  title: 'Projects - Eole Cervenka',
  description: 'AI/ML Engineering Projects',
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${p.slug}`}
        className="group flex items-start gap-5 py-5"
      >
        <div className="w-20 h-12 sm:w-24 sm:h-14 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          {p.thumbnail && (
            <img
              src={p.thumbnail}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 truncate">
              {p.title}
            </span>
            <div className="ml-auto flex items-baseline gap-2 flex-shrink-0">
              {p.metric && (
                <span className="hidden sm:inline font-mono text-xs italic text-gray-500 dark:text-gray-500 whitespace-nowrap">
                  {p.metric}
                </span>
              )}
              {p.current && (
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                  WIP
                </span>
              )}
            </div>
          </div>
          {p.tagline && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
              {p.tagline}
            </p>
          )}
          {p.category && (
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 dark:text-gray-600">
              {p.category}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}

function LabRow() {
  return (
    <li>
      <div className="flex items-start gap-5 py-5">
        <div className="w-20 h-12 sm:w-24 sm:h-14 flex-shrink-0 rounded overflow-hidden bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
          <img src="/logo.svg" alt="" className="w-8 h-8 object-contain opacity-90" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-medium text-gray-900 dark:text-gray-100 truncate">
              CreativeRush Media Lab
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            Co-designed AI experiments with film creators
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 dark:text-gray-600">
            2024
          </p>
        </div>
      </div>
    </li>
  )
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  const sorted = [...projects].sort((a, b) => {
    if (a.current && !b.current) return -1
    if (!a.current && b.current) return 1
    const ad = a.date ? new Date(a.date as unknown as string).getTime() : 0
    const bd = b.date ? new Date(b.date as unknown as string).getTime() : 0
    return bd - ad
  })

  return (
    <div className="max-w-2xl mx-auto px-6 pt-6 md:pt-8 pb-12">
      <h1 className="sr-only">Projects</h1>

      <ul className="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800">
        {sorted.map((p) => (
          <ProjectRow key={p.slug} p={p} />
        ))}
        <LabRow />
      </ul>
    </div>
  )
}
