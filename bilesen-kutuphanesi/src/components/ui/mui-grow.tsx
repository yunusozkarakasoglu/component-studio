/**
 * MuiGrow
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Büyüme animasyonu — ölçek ile görünürlük (transform-origin center).
 *   <MuiGrow in={open}>…</MuiGrow>
 * @id 1866
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiGrowProps {
  in?: boolean
  timeout?: number
  className?: string
  children?: ReactNode
}

function MuiGrow({ in: open = false, timeout = 300, className, children }: MuiGrowProps) {
  return (
    <div
      className={cn("origin-center transition-[transform,opacity]", open ? "scale-100 opacity-100" : "scale-75 opacity-0", className)}
      style={{ transitionDuration: `${timeout}ms` }}
    >
      {children}
    </div>
  )
}

export { MuiGrow }
export type { MuiGrowProps }
