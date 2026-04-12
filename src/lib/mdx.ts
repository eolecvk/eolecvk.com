import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project, ProjectMetadata } from '@/types/project'

const projectsDirectory = path.join(process.cwd(), 'src/content/projects')

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        tagline: data.tagline || '',
        description: data.description || '',
        intro: data.intro || '',
        thumbnail: data.thumbnail || '',
        date: data.date || '',
        tags: data.tags || data.tag || [],
        current: data.current || false,
        category: data.category || '',
      }
    })
    .sort((a, b) => {
      // Sort by date descending
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })

  return projects
}

export function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const metadata: ProjectMetadata = {
    ...data as ProjectMetadata,
    tags: data.tags || data.tag || [],
  }

  return {
    slug,
    metadata,
    content,
  }
}

export function getAdjacentProjects(slug: string) {
  const projects = getAllProjects()
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }))
}
