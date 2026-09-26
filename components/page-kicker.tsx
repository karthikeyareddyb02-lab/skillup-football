export function PageKicker({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
      <span className="inline-block size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  )
}
