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

      {/* CreativeRush Media Lab - Featured */}
      <a
        href="/lab"
        className="group block mb-8"
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </article>
      </a>

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  )
}
