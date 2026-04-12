import Link from 'next/link'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="h-full border border-gray-200 dark:border-gray-800 rounded overflow-hidden hover:border-accent transition-colors duration-200 flex flex-col">
        {project.thumbnail && (
          <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent group-focus-within:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">
              {project.tagline}
            </p>
          )}
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
            {project.intro || project.description}
          </p>
          {project.date && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
              {formatDate(project.date)}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
