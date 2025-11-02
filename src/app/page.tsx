import Link from 'next/link'
import Container from '@/components/Container'

export default function Home() {
  return (
    <>
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
                Portfolio
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded hover:border-accent transition"
              >
                Resume
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="narrow" className="py-section-desktop">
        <div>
          <h2 className="text-3xl font-bold mb-8">Articles and Projects</h2>
          <div className="space-y-6 mb-8">
            <Link
              href="/work/stable-diffusion-benchmark"
              className="block group"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-accent transition">
                    "All You Need Is One GPU" — Inference Benchmark for Stable Diffusion
                  </h3>
                </div>
                <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap text-sm">
                  2022
                </span>
              </div>
            </Link>

            <Link
              href="/work/stable-diffusion-finetuning"
              className="block group"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-accent transition">
                    "Text-to-naruto" — A Stable Diffusion Finetuning Demo
                  </h3>
                </div>
                <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap text-sm">
                  2022
                </span>
              </div>
            </Link>

            <div className="block">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-400 dark:text-gray-600">
                    "GiftHub" — Collective Decision-Making Tool for Funding Distribution
                  </h3>
                </div>
                <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap text-sm">
                  2021
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition font-semibold"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </>
  )
}
