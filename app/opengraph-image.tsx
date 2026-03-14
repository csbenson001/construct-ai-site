import { ImageResponse } from 'next/og'

export const alt = 'Construct.ai — We Construct AI Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#0a0a0c', color: '#f59e0b', fontFamily: 'sans-serif',
        border: '2px solid #26262e',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: '0.05em', zIndex: 1 }}>CONSTRUCT.AI</div>
        <div style={{ fontSize: 28, color: '#9494a3', marginTop: 20, zIndex: 1 }}>Enterprise AI Development Factory</div>
      </div>
    ),
    { ...size }
  )
}
