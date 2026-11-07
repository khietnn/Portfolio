import { useRef } from 'react'
import { profile } from '../data'
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap'
import { CodeWindow } from './CodeWindow'
import { Scramble } from './Scramble'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('[data-hero-fade]', { y: 20, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.3, ease: 'power3.out' })
        gsap.from('.code-window', { y: 40, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="home" className="mx-auto grid min-h-svh max-w-[1400px] items-center gap-12 px-[6vw] pt-28 pb-16 md:grid-cols-2 md:gap-[5vw]">
      <div>
        <p data-hero-fade className="font-mono text-[15px] text-green">$ whoami</p>
        <h1 aria-label={profile.name} className="mt-4 text-[clamp(44px,6.2vw,88px)] font-bold leading-[0.95] tracking-[-0.035em]">
          <Scramble text={profile.firstLine} playOnMount />
          <br />
          <Scramble text={profile.lastLine} playOnMount className="text-green" />
        </h1>
        <p data-hero-fade className="mt-6 max-w-[480px] text-lg leading-relaxed text-muted">{profile.tagline}</p>
        <div data-hero-fade className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">view --projects</a>
          <a href="#contact" className="btn">contact --me</a>
        </div>
      </div>
      <CodeWindow />
    </section>
  )
}
