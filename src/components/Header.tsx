import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navLinks)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [])

  return (
    <header data-intro className="fixed inset-x-0 top-0 z-50 bg-bg/70 font-mono text-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-[6vw] py-5">
        <a href="#home" className="transition-colors hover:text-green">~/khiet</a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-7">
            {navLinks.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`transition-colors hover:text-green ${active === id ? 'text-green' : 'text-muted'}`}>
                  <span className="text-line">./</span>
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg/95 px-[6vw] pb-6 md:hidden">
          <ul>
            {navLinks.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-lg">
                  <span className="text-green">$ cd </span>
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
