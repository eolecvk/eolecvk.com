import { notFound } from 'next/navigation'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx'
import Container from '@/components/Container'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

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
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Container maxWidth="default" className="py-section-desktop">
      <article>
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">{project.metadata.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.metadata.intro || project.metadata.description}
          </p>
          {project.metadata.tag && project.metadata.tag.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.metadata.tag.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              a: ({ node, ...props }) => (
                <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props} />
              ),
              pre: ({ node, ...props }) => (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
              ),
              img: ({ node, ...props }) => (
                <div className="my-8">
                  <img className="w-full rounded-lg" {...props} />
                </div>
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>
      </article>
    </Container>
  )
}
