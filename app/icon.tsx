import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#f59e0b', borderRadius: 4,
      }}>
        <span style={{ color: '#0a0a0c', fontSize: 20, fontWeight: 900, fontFamily: 'sans-serif' }}>C</span>
      </div>
    ),
    { ...size }
  )
}
