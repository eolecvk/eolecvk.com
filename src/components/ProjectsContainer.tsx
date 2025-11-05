'use client'

import ProjectSection from '@/components/ProjectSection'
import { Project } from '@/types/project'

interface ProjectsContainerProps {
  allProjects: Project[]
}

export default function ProjectsContainer({ allProjects }: ProjectsContainerProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {/* CreativeRush Featured Project */}
      <a
        href="https://creativerush.me"
        target="_blank"
        rel="noopener noreferrer"
        className="group block mb-3"
      >
        <article className="border border-accent/30 dark:border-accent/30 rounded hover:border-accent transition-colors bg-accent/5 dark:bg-accent/10 p-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="CreativeRush Media Lab"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-semibold group-hover:text-accent transition">
                  CreativeRush Media Lab
                </h3>
                <span className="text-xs px-2 py-1 bg-accent/20 rounded whitespace-nowrap">Current Project</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Media Lab co-designing AI experiments with film creators
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-accent transition" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </div>
          </div>
        </article>
      </a>

      {/* All Projects */}
      <div className="space-y-3">
        {allProjects.map((project) => (
          <a
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
                  {project.tagline && (
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-1 italic">
                      {project.tagline}
                    </p>
                  )}
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
                  <div className="h-5 w-5"></div>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  )
}
