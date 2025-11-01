import Link from 'next/link'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <article className="h-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-accent transition-colors flex flex-col">
        {project.thumbnail && (
          <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
            {project.intro || project.description}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
