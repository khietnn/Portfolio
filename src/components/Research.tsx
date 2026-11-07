import { research } from '../data'
import { SectionLabel } from './SectionLabel'

export function Research() {
  return (
    <section id="research" className="section">
      <SectionLabel>research</SectionLabel>
      <div>
        {research.map((r) => (
          <article key={r.title} data-reveal className="border-y border-line py-8">
            <p className="flex flex-wrap items-center gap-3 font-mono text-sm text-orange">
              {r.venue}
              <span className="rounded-full border border-green/40 px-2.5 py-0.5 text-xs text-green">{r.status}</span>
            </p>
            <h3 className="mt-3 max-w-[900px] text-[clamp(22px,2.6vw,34px)] font-bold leading-tight tracking-[-0.02em]">{r.title}</h3>
            <p className="mt-2 text-sm text-muted">{r.authors}</p>
            <p className="mt-4 max-w-[760px] leading-relaxed text-muted">{r.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
