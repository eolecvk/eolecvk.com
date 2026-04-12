'use client'

import { useState, useEffect, useRef } from 'react'

interface Company {
  name: string
  file: string
  width: number
  height: number
  darkModeClass: string
  responsiveClasses: string
  baseClasses?: string
}

const companies: Company[] = [
  { name: 'Instacart', file: 'instacart.svg', width: 140, height: 40, darkModeClass: 'invert', responsiveClasses: 'h-4 sm:h-6 lg:h-8', baseClasses: 'grayscale brightness-150' },
  { name: 'Goodwater', file: 'goodwater.svg', width: 120, height: 40, darkModeClass: 'invert', responsiveClasses: 'h-4 sm:h-7 lg:h-9', baseClasses: 'grayscale brightness-150' },
  { name: 'Lambda', file: 'lambda.svg', width: 100, height: 40, darkModeClass: 'invert brightness-500', responsiveClasses: 'h-4 sm:h-8 lg:h-10', baseClasses: 'grayscale' },
  { name: 'DeepVoodoo', file: 'deepvoodoo.svg', width: 120, height: 40, darkModeClass: 'invert brightness-500', responsiveClasses: 'h-6 sm:h-7 lg:h-9', baseClasses: 'grayscale' },
  { name: 'BCG', file: 'bcg.svg', width: 80, height: 40, darkModeClass: 'invert', responsiveClasses: 'h-6 sm:h-8 lg:h-10', baseClasses: '' },
  { name: 'ATT', file: 'att.svg', width: 140, height: 40, darkModeClass: 'invert', responsiveClasses: 'h-4 sm:h-6 lg:h-8', baseClasses: 'grayscale brightness-150' },
]

export default function CompanyLogos() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [marqueeWidth, setMarqueeWidth] = useState(0)

  useEffect(() => {
    if (marqueeRef.current) {
      const updateWidth = () => {
        const firstChild = marqueeRef.current?.firstChild as HTMLDivElement
        if (firstChild) setMarqueeWidth(firstChild.offsetWidth)
      }
      updateWidth()
      const resizeObserver = new ResizeObserver(updateWidth)
      resizeObserver.observe(marqueeRef.current.firstChild as Element)
      return () => resizeObserver.disconnect()
    }
  }, [])

  const marqueeStyle = { '--marquee-width': `${marqueeWidth}px` } as React.CSSProperties

  const renderLogos = (keyPrefix: string) =>
    companies.map((company, index) => (
      <div key={`${keyPrefix}-${index}`} className="flex-shrink-0 mr-6 sm:mr-12 lg:mr-16 flex items-center justify-center h-6 sm:h-10">
        <img
          src={`/images/lab/companies/${company.file}`}
          alt={`${company.name} logo`}
          width={company.width}
          height={company.height}
          className={`${company.responsiveClasses} w-auto ${company.baseClasses} ${company.darkModeClass}`}
        />
      </div>
    ))

  return (
    <div className="overflow-hidden" style={{
      mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
      WebkitMask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
    }}>
      <div ref={marqueeRef} style={marqueeStyle} className="flex py-2 w-max animate-scroll-dynamic">
        <div className="flex flex-shrink-0 items-center">{renderLogos('first')}</div>
        <div className="flex flex-shrink-0 items-center">{renderLogos('second')}</div>
      </div>
    </div>
  )
}
