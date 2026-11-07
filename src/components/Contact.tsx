import { profile, socials } from '../data'
import { Scramble } from './Scramble'
import { SectionLabel } from './SectionLabel'

export function Contact() {
  return (
    <section id="contact" className="section flex flex-col items-center text-center">
      <SectionLabel>contact</SectionLabel>
      <p className="text-[clamp(44px,7vw,104px)] font-bold leading-[0.95] tracking-[-0.035em]">
        <Scramble text="Let's build" playOnView />
        <br />
        <Scramble text="something." playOnView className="text-green" />
      </p>
      <p data-reveal className="mt-6 max-w-[480px] text-lg leading-relaxed text-muted">
        Have a project, an internship opportunity, or just want to say hi? My inbox is open.
      </p>
      <a data-reveal href={`mailto:${profile.email}`} className="btn btn-primary mt-9 max-w-full break-all">
        {profile.email}
      </a>
      <ul data-reveal className="mt-10 flex flex-wrap justify-center gap-6 font-mono text-sm">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener" className="text-muted transition-colors hover:text-green">
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
