'use client'

import Link from 'next/link'
import { Project } from '@/types/project'

interface ProjectsContainerProps {
  allProjects: Project[]
}

export default function ProjectsContainer({ allProjects }: ProjectsContainerProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {/* All Projects */}
      <div className="space-y-3">
        {allProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="border border-gray-200 dark:border-gray-800 rounded hover:border-accent transition-colors duration-200 p-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.current && (
                      <span className="text-xs px-2 py-1 bg-accent/20 rounded whitespace-nowrap">Current</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.tagline || project.description}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* CreativeRush Media Lab */}
      <Link
        href="/lab"
        className="group block mt-3"
      >
        <article className="border border-gray-200 dark:border-gray-800 rounded hover:border-accent transition-colors duration-200 p-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="CreativeRush Media Lab"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-200 mb-1">
                CreativeRush Media Lab
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Media Lab co-designing AI experiments with film creators
              </p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}
