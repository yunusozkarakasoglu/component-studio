/**
 * MtFloatingIndicator
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kayar gösterge — aktif öğenin altına konumlanan vurgu.
 *   <MtFloatingIndicator>
 *     <div data-active>…</div>
 *   </MtFloatingIndicator>
 * @id 1392
 * @category Navigasyon
 * @subcategory MtFloatingIndicator
 * @source mantine
 */
import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtFloatingIndicatorProps {
  children?: ReactNode
  className?: string
}

function MtFloatingIndicator({ children, className }: MtFloatingIndicatorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<{ left: number; width: number; top: number; height: number } | null>(null)

  useLayoutEffect(() => {
    const update = () => {
      const active = containerRef.current?.querySelector("[data-active]") as HTMLElement | null
      if (active && containerRef.current) {
        const c = containerRef.current.getBoundingClientRect()
        const a = active.getBoundingClientRect()
        setRect({ left: a.left - c.left, width: a.width, top: a.top - c.top, height: a.height })
      }
    }
    update()
    const observer = new ResizeObserver(update)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [children])

  return (
    <div ref={containerRef} data-slot="mt-floating-indicator" className={cn("relative inline-flex", className)}>
      {rect && (
        <span
          aria-hidden
          className="absolute z-0 rounded-md bg-blue-100 transition-all duration-300"
          style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}
        />
      )}
      <span className="relative z-10 flex">{children}</span>
    </div>
  )
}

export { MtFloatingIndicator }
export type { MtFloatingIndicatorProps }
