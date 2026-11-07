import type { ReactNode } from 'react'

/** Khung cửa sổ kiểu editor (3 chấm màu + tên file). */
export function Window({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-panel shadow-[0_30px_60px_-30px_#000] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-[13px] text-muted">
        <i className="size-3 rounded-full bg-[#ff5f57]" />
        <i className="size-3 rounded-full bg-[#febc2e]" />
        <i className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-2">{title}</span>
      </div>
      {children}
    </div>
  )
}
