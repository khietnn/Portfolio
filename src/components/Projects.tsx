import { projects } from '../data'
import { SectionLabel } from './SectionLabel'

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionLabel>selected work</SectionLabel>
      <div>
        {projects.map((p, i) => (
          <article key={p.title} data-reveal className="group grid gap-x-6 gap-y-3 border-t border-line py-8 last:border-b md:grid-cols-[60px_1fr_auto]">
            <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="flex flex-wrap items-center gap-3 text-[clamp(24px,3vw,40px)] font-bold tracking-[-0.02em] transition duration-300 group-hover:translate-x-3 group-hover:text-green">
                {p.title}
                {p.isPrivate && (
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs font-normal text-muted">private</span>
                )}
              </h3>
              <p className="mt-3 max-w-[680px] leading-relaxed text-muted">{p.description}</p>
              <p className="mt-3 font-mono text-sm text-blue">{p.stack.join(' · ')}</p>
            </div>
            <div className="flex gap-5 font-mono text-sm md:flex-col md:items-end md:gap-2">
              {p.demo && <a href={p.demo} target="_blank" rel="noopener" className="hover:text-green">demo ↗</a>}
              {p.code && <a href={p.code} target="_blank" rel="noopener" className="hover:text-green">code ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
