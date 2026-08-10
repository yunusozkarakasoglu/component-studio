/**
 * MuiZoom
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Yakınlaşma animasyonu — daha belirgin ölçek (0.2 → 1).
 *   <MuiZoom in={open}>…</MuiZoom>
 * @id 1868
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiZoomProps {
  in?: boolean
  timeout?: number
  className?: string
  children?: ReactNode
}

function MuiZoom({ in: open = false, timeout = 300, className, children }: MuiZoomProps) {
  return (
    <div
      className={cn("origin-center transition-transform", open ? "scale-100" : "scale-[0.2]", className)}
      style={{ transitionDuration: `${timeout}ms` }}
    >
      {children}
    </div>
  )
}

export { MuiZoom }
export type { MuiZoomProps }
