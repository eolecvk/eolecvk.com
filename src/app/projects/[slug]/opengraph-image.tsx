import { ImageResponse } from 'next/og'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Project'

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  return [{ id: params.slug, alt: params.slug, contentType, size }]
}

export function generateStaticParams() {
  return getAllProjectSlugs()
}

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  const title = project?.metadata.title || 'Project'
  const tagline = project?.metadata.tagline || project?.metadata.description || ''
  const metric = project?.metadata.metric || ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#171219',
          color: '#F5F5F7',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              background: '#F5F5F7',
              borderRadius: '2px',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9CA3AF',
            }}
          >
            Eole Cervenka · Project
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1
            style={{
              fontSize: title.length > 50 ? '56px' : '72px',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              margin: 0,
              maxWidth: '1000px',
            }}
          >
            {title}
          </h1>
          {tagline && (
            <p
              style={{
                fontSize: '28px',
                lineHeight: 1.4,
                color: '#D1D5DB',
                margin: 0,
                maxWidth: '1000px',
              }}
            >
              {tagline.length > 140 ? tagline.slice(0, 137) + '…' : tagline}
            </p>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderTop: '1px solid #2D2530',
            paddingTop: '24px',
          }}
        >
          <span style={{ fontSize: '22px', color: '#9CA3AF' }}>eolecvk.com</span>
          {metric && (
            <span
              style={{
                fontSize: '24px',
                fontFamily: 'monospace',
                fontStyle: 'italic',
                color: '#9CA3AF',
              }}
            >
              {metric}
            </span>
          )}
        </div>
      </div>
    ),
    size
  )
}
