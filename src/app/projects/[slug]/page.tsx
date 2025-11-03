import { notFound } from 'next/navigation'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx'
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
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Container maxWidth="narrow" className="py-section-desktop">
      <article>
        <header>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.metadata.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {project.metadata.intro || project.metadata.description}
          </p>
          {project.metadata.tag && project.metadata.tag.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
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

        <div className="prose prose-lg dark:prose-invert prose-headings:first:mt-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              a: ({ node, ...props }) => (
                <a target="_blank" rel="noopener noreferrer" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className="max-w-full h-auto" {...props} />
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
