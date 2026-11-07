import { useRef } from 'react'
import { codeTokens, type TokenKind } from '../data'
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap'
import { Window } from './Window'

const colorOf: Record<TokenKind, string> = {
  keyword: 'text-pink',
  name: 'text-blue',
  prop: 'text-orange',
  string: 'text-string',
  comment: 'text-muted',
  plain: '',
}

const plainText = codeTokens.map(([, text]) => text).join('')

/** Cửa sổ code tự "gõ" ra từng ký tự, có tô màu cú pháp. */
export function CodeWindow() {
  const ref = useRef<HTMLPreElement>(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('[data-char]', { display: 'none', duration: 0.01, stagger: 0.022, delay: 0.6 })
      })
    },
    { scope: ref },
  )

  return (
    <Window title="khiet.ts" className="code-window">
      <pre ref={ref} aria-label={plainText} className="min-h-[300px] whitespace-pre-wrap p-5 font-mono text-[13px] leading-[1.8] sm:text-sm lg:text-[15px]">
        {codeTokens.flatMap(([kind, text], i) =>
          [...text].map((ch, j) => (
            <span key={`${i}-${j}`} data-char aria-hidden className={colorOf[kind]}>
              {ch}
            </span>
          )),
        )}
        <span aria-hidden className="inline-block h-[1.1em] w-[9px] animate-blink bg-green align-text-bottom" />
      </pre>
    </Window>
  )
}
