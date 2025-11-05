'use client'

import { useEffect } from 'react'

export default function ScrollToProjects() {
  useEffect(() => {
    // Scroll to projects section if hash is present
    if (window.location.hash === '#projects') {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        setTimeout(() => {
          projectsSection.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return null
}
