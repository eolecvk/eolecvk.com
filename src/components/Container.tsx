import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'narrow' | 'default' | 'wide'
}

export default function Container({ children, className = '', maxWidth = 'default' }: ContainerProps) {
  const maxWidthClasses = {
    narrow: 'max-w-content-narrow',
    default: 'max-w-content-default',
    wide: 'max-w-content-wide',
  }

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}
