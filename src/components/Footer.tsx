export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 border-t border-line px-[6vw] py-8 font-mono text-sm text-muted">
      <span>© {new Date().getFullYear()} Nguyen Ngoc Khiet</span>
      <span>built with React, TypeScript &amp; GSAP</span>
    </footer>
  )
}
