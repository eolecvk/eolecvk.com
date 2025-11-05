export interface Project {
  slug: string
  title: string
  description: string
  intro: string
  thumbnail: string
  date: string
  tags: string[]
  current?: boolean
  category?: string
}

export interface ProjectMetadata {
  title: string
  description: string
  intro: string
  thumbnail: string
  date: string
  tag?: string[]
  current?: boolean
  category?: string
}
