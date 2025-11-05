import Link from 'next/link'
import { Project } from '@/types/project'

interface ProjectSectionProps {
  title: string
  projects: Project[]
  showAll?: boolean
  featuredContent?: React.ReactNode
}

export default function ProjectSection({ title, projects, showAll = false, featuredContent }: ProjectSectionProps) {
  const currentProjects = projects.filter(p => p.current)
  const displayedProjects = showAll ? projects : currentProjects

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {featuredContent}

      {/* Projects */}
      <div className="space-y-3">
        {displayedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="border border-gray-200 dark:border-gray-800 rounded hover:border-accent transition-colors p-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.intro || project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.current && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                  {/* Invisible placeholder to align with CreativeRush external icon */}
                  <div className="h-5 w-5"></div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
