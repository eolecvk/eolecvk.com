import { getAllProjects } from '@/lib/mdx'
import ProjectCard from '@/components/ProjectCard'
import Container from '@/components/Container'

export const metadata = {
  title: 'Portfolio - Eole Cervenka',
  description: 'AI/ML Engineering Projects',
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <Container maxWidth="default" className="py-section-desktop">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          AI/ML engineering projects and case studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  )
}
