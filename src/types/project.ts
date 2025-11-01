export interface Project {
  slug: string
  title: string
  description: string
  intro: string
  thumbnail: string
  date: string
  tags: string[]
}

export interface ProjectMetadata {
  title: string
  description: string
  intro: string
  thumbnail: string
  date: string
  tag?: string[]
}
