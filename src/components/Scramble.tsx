import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*<>/'

type Props = {
  text: string
  className?: string
  /** chạy hiệu ứng ngay khi trang tải */
  playOnMount?: boolean
  /** chạy hiệu ứng khi cuộn tới */
  playOnView?: boolean
}

/** Chữ nhảy ký tự ngẫu nhiên rồi dần hiện ra chữ thật. Rê chuột vào để chạy lại. */
export function Scramble({ text, className, playOnMount, playOnView }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const tween = useRef<gsap.core.Tween | null>(null)

  const { contextSafe } = useGSAP(
    () => {
      if (playOnMount) play()
      if (playOnView && ref.current) {
        ScrollTrigger.create({ trigger: ref.current, start: 'top 85%', once: true, onEnter: play })
      }
    },
    { scope: ref },
  )

  function play() {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    tween.current?.kill()
    const state = { progress: 0 }
    tween.current = gsap.to(state, {
      progress: 1,
      duration: 1.1,
      ease: 'power2.out',
      onUpdate: () => {
        const done = Math.floor(state.progress * text.length)
        el.textContent = [...text]
          .map((ch, i) => (i < done || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join('')
      },
      onComplete: () => {
        el.textContent = text
      },
    })
  }

  return (
    <span ref={ref} className={className} onMouseEnter={contextSafe(play)}>
      {text}
    </span>
  )
}
