export function SectionLabel({ children }: { children: string }) {
  return <h2 className="mb-10 font-mono text-[15px] font-normal text-green">{`// ${children}`}</h2>
}
