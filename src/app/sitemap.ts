import type { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/mdx'

const SITE = 'https://eolecvk.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, priority: 1.0 },
    { url: `${SITE}/projects`, priority: 0.8 },
    { url: `${SITE}/about`, priority: 0.7 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE}/projects/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : undefined,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
