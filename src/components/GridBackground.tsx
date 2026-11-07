import { useEffect, useRef } from 'react'

export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: PointerEvent) => {
      ref.current?.style.setProperty('--mx', `${e.clientX}px`)
      ref.current?.style.setProperty('--my', `${e.clientY}px`)
    }
    addEventListener('pointermove', move)
    return () => removeEventListener('pointermove', move)
  }, [])

  return <div ref={ref} aria-hidden className="grid-bg pointer-events-none fixed inset-0 -z-10 opacity-55" />
}
