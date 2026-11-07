import { useRef } from 'react'
import photo from '../assets/NNK.webp'
import { profile } from '../data'
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap'
import { SectionLabel } from './SectionLabel'
import { Window } from './Window'

export function About() {
  const statement = useRef<HTMLParagraphElement>(null)

  // từng chữ của câu giới thiệu sáng dần lên theo thanh cuộn
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('[data-word]', {
          opacity: 0.15,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: statement.current, start: 'top 85%', end: 'bottom 45%', scrub: true },
        })
      })
    },
    { scope: statement },
  )

  return (
    <section id="about" className="section">
      <SectionLabel>about</SectionLabel>
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-[5vw]">
        <div>
          <p ref={statement} className="text-[clamp(28px,3.4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em]">
            {profile.statement.split(' ').map((word, i) => (
              <span key={i} data-word className="inline-block whitespace-pre">{word} </span>
            ))}
          </p>
          <p data-reveal className="mt-6 max-w-[600px] text-lg leading-relaxed text-muted">{profile.bio}</p>
          <dl data-reveal className="mt-8 grid gap-x-8 font-mono text-sm sm:grid-cols-2">
            {profile.facts.map((f) => (
              <div key={f.key} className="flex gap-3 border-t border-line py-3">
                <dt className="text-orange">{f.key}:</dt>
                <dd className={f.highlight ? 'text-green' : 'text-string'}>"{f.value}"</dd>
              </div>
            ))}
          </dl>
        </div>
        <div data-reveal className="w-full max-w-sm justify-self-center md:max-w-none">
          <Window title="khiet.webp">
            <img src={photo} alt="Portrait of Nguyen Ngoc Khiet" width={800} height={973} loading="lazy" className="block aspect-[4/5] w-full object-cover" />
          </Window>
        </div>
      </div>
    </section>
  )
}
