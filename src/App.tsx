import { Analytics } from '@vercel/analytics/react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { GridBackground } from './components/GridBackground'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from './lib/gsap'

export default function App() {
  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      gsap.from('[data-intro]', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })

      // mọi phần tử có data-reveal trượt lên + hiện dần khi cuộn tới
      gsap.set('[data-reveal]', { y: 40, opacity: 0 })
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 90%',
        once: true,
        onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }),
      })
    })

    // chiều cao trang đổi khi code đang gõ / chữ đang scramble → đo lại vị trí các mốc cuộn,
    // nếu không các phần tử cuối trang có thể không bao giờ hiện ra
    let timer: number | undefined
    const observer = new ResizeObserver(() => {
      clearTimeout(timer)
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 200)
    })
    observer.observe(document.body)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  })

  return (
    <>
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
