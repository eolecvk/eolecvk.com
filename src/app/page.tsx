import Link from 'next/link'
import Container from '@/components/Container'
import { getAllProjects } from '@/lib/mdx'
import ScrollToProjects from '@/components/ScrollToProjects'
import ProjectsContainer from '@/components/ProjectsContainer'

export default function Home() {
  const allProjects = getAllProjects()

  // Sort projects by current status (current first) within each category
  const sortByCurrent = (projects: typeof allProjects) =>
    projects.sort((a, b) => {
      if (a.current && !b.current) return -1
      if (!a.current && b.current) return 1
      return 0
    })

  const audiovisualProjects = sortByCurrent(allProjects.filter(p => p.category === 'Image/Video'))
  const llmProjects = sortByCurrent(allProjects.filter(p => p.category === 'LLM applications'))

  return (
    <>
      <ScrollToProjects />
      {/* Hero Section */}
      <div className="min-h-[45vh] flex items-center">
        <Container maxWidth="narrow" className="py-8 md:py-12">
          <div className="flex flex-col items-center gap-6">
            {/* Avatar and Text Row */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 border border-accent/20">
                <img
                  src="/eole.webp"
                  alt="Eole Cervenka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Eole Cervenka
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    Building AI/ML systems for media production and llm applications
                  </p>
                </div>

                {/* Social Links and Resume */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
                  <a
                    href="https://github.com/eolecvk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent transition rounded"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eole-cervenka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent transition rounded"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent transition rounded"
                  >
                    Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Projects Section */}
      <Container maxWidth="narrow" className="pt-4 pb-16 md:pt-8 md:pb-20" id="projects">
        <ProjectsContainer
          audiovisualProjects={audiovisualProjects}
          llmProjects={llmProjects}
        />
      </Container>
    </>
  )
}
