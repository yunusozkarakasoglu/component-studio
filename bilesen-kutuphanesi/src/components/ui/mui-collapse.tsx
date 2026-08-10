/**
 * MuiCollapse
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Daralma animasyonu — içerik yüksekliğiyle açılır/kapanır.
 *   <MuiCollapse in={open}>…</MuiCollapse>
 * @id 1864
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiCollapseProps {
  /** Açık/kapalı durumu */
  in?: boolean
  /** Animasyon süresi (ms) */
  timeout?: number
  className?: string
  children?: ReactNode
}

function MuiCollapse({ in: open = false, timeout = 300, className, children }: MuiCollapseProps) {
  return (
    <div
      className={cn("overflow-hidden transition-[max-height,opacity]", className)}
      style={{
        maxHeight: open ? "500px" : "0px",
        opacity: open ? 1 : 0,
        transitionDuration: `${timeout}ms`,
      }}
    >
      {children}
    </div>
  )
}

export { MuiCollapse }
export type { MuiCollapseProps }
