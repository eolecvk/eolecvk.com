import Link from 'next/link'
import Container from '@/components/Container'

export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <Container maxWidth="narrow" className="py-section-desktop">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Eole Cervenka
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            Machine Learning Engineer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Building AI/ML systems for production. Specialized in LLM pipelines, computer vision, and GenAI applications.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/work"
              className="px-6 py-3 bg-accent text-dark font-semibold rounded hover:opacity-90 transition"
            >
              View Portfolio
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded hover:border-accent transition"
            >
              View Resume
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
