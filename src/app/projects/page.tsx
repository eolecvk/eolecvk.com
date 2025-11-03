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

      {/* CreativeRush MediaLab - Featured */}
      <a
        href="https://creativerush.me"
        target="_blank"
        rel="noopener noreferrer"
        className="group block mb-8"
      >
        <article className="border border-accent/30 dark:border-accent/30 rounded-lg hover:border-accent transition-colors bg-accent/5 dark:bg-accent/10 p-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="CreativeRush MediaLab"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-semibold group-hover:text-accent transition">
                  CreativeRush MediaLab
                </h3>
                <span className="text-xs px-2 py-1 bg-accent/20 rounded whitespace-nowrap">Current Project</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                GenAI experiments for film creators.
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-accent transition flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
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
