import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllProjectSlugs, getProjectBySlug, getAdjacentProjects } from '@/lib/mdx'
import Container from '@/components/Container'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.metadata.title} - Eole Cervenka`,
    description: project.metadata.description,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      type: 'article',
      images: project.metadata.thumbnail ? [project.metadata.thumbnail] : undefined,
    },
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' })
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(params.slug)
  const tags = project.metadata.tags || []

  return (
    <Container maxWidth="narrow" className="py-section-desktop">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors duration-200 mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        All projects
      </Link>

      <article>
        {/* Hero image */}
        {project.metadata.thumbnail && (
          <div className="aspect-video overflow-hidden rounded bg-gray-100 dark:bg-gray-800 mb-8">
            <img
              src={project.metadata.thumbnail}
              alt={project.metadata.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.metadata.title}</h1>

          {/* Date + Tags row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.metadata.date && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(project.metadata.date)}
              </span>
            )}
            {tags.length > 0 && (
              <>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.metadata.intro || project.metadata.description}
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:first:mt-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              a: ({ node, ...props }) => (
                <a target="_blank" rel="noopener noreferrer" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className="max-w-full h-auto" loading="lazy" {...props} />
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <nav className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-start gap-8">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex-1 min-w-0"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">Previous</span>
                <p className="text-base font-medium group-hover:text-accent transition-colors duration-200 truncate mt-1">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex-1 min-w-0 text-right"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">Next</span>
                <p className="text-base font-medium group-hover:text-accent transition-colors duration-200 truncate mt-1">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </nav>
      )}
    </Container>
  )
}
