import Container from '@/components/Container'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const metadata = {
  title: 'Resume - Eole Cervenka',
  description: 'Machine Learning Engineer - Resume and Experience',
}

function getResumeContent() {
  const resumePath = path.join(process.cwd(), 'src/content/resume.mdx')
  const fileContents = fs.readFileSync(resumePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { metadata: data, content }
}

export default function ResumePage() {
  const resume = getResumeContent()

  return (
    <Container maxWidth="narrow" className="py-section-desktop">
      <div>
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{resume.metadata.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {resume.metadata.description}
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-accent text-dark font-semibold rounded hover:opacity-90 transition flex items-center gap-2 whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="prose prose-lg dark:prose-invert prose-headings:first:mt-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              a: ({ node, ...props }) => (
                <a target="_blank" rel="noopener noreferrer" {...props} />
              ),
            }}
          >
            {resume.content}
          </ReactMarkdown>
        </div>
      </div>
    </Container>
  )
}
