import { getAllProjects } from '@/lib/mdx'
import ProjectCard from '@/components/ProjectCard'
import Container from '@/components/Container'

export const metadata = {
  title: 'Projects - Eole Cervenka',
  description: 'AI/ML Engineering Projects',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <Container maxWidth="default" className="py-section-desktop">
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* CreativeRush Media Lab */}
      <a href="/lab" className="group block mt-8">
        <article className="border border-gray-200 dark:border-gray-800 rounded hover:border-accent transition-colors p-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="CreativeRush Media Lab"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-xl font-semibold group-hover:text-accent transition mb-1">
                CreativeRush Media Lab
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Media Lab co-designing AI experiments with film creators
              </p>
            </div>
          </div>
        </article>
      </a>
    </Container>
  )
}
