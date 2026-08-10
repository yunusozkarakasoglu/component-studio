/**
 * MuiFade
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Solma animasyonu — opacity ile görünürlük.
 *   <MuiFade in={open}>…</MuiFade>
 * @id 1865
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiFadeProps {
  in?: boolean
  timeout?: number
  className?: string
  children?: ReactNode
}

function MuiFade({ in: open = false, timeout = 300, className, children }: MuiFadeProps) {
  return (
    <div
      className={cn("transition-opacity", open ? "opacity-100" : "opacity-0", className)}
      style={{ transitionDuration: `${timeout}ms` }}
    >
      {children}
    </div>
  )
}

export { MuiFade }
export type { MuiFadeProps }
