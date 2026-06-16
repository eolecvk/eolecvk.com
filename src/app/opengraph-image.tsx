import { ImageResponse } from 'next/og'
import { NAME } from '@/lib/profile'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = NAME

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
          padding: '72px',
          background: '#171219',
          color: '#F5F5F7',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '96px',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {NAME}
        </h1>
        <p
          style={{
            fontSize: '40px',
            lineHeight: 1.3,
            color: '#D1D5DB',
            margin: 0,
          }}
        >
          Full-stack ML engineer
        </p>
        <span
          style={{
            fontSize: '26px',
            color: '#9CA3AF',
            marginTop: '12px',
          }}
        >
          eolecvk.com
        </span>
      </div>
    ),
    size
  )
}
