import { skills } from '../data'
import { SectionLabel } from './SectionLabel'

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionLabel>skills</SectionLabel>
      <div>
        {skills.map(({ group, items }) => (
          <div key={group} data-reveal className="grid gap-4 border-t border-line py-6 last:border-b md:grid-cols-[180px_1fr] md:items-center">
            <h3 className="font-mono text-sm text-muted">{group}</h3>
            <ul className="flex flex-wrap gap-2 font-mono text-sm">
              {items.map((item) => (
                <li key={item} className="rounded-md border border-line px-3 py-1.5 transition-colors hover:border-green hover:text-green">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
