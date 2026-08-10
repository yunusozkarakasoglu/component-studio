/**
 * MuiSlide
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Kayma animasyonu — yön belirterek görünürlük (transform translate).
 *   <MuiSlide direction="up" in={open}>…</MuiSlide>
 * direction: up | down | left | right
 * @id 1867
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiSlideProps {
  in?: boolean
  direction?: "up" | "down" | "left" | "right"
  timeout?: number
  className?: string
  children?: ReactNode
}

function MuiSlide({ in: open = false, direction = "up", timeout = 300, className, children }: MuiSlideProps) {
  const hidden = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  }[direction]
  return (
    <div
      className={cn("transition-[transform,opacity]", open ? "translate-x-0 translate-y-0 opacity-100" : `${hidden} opacity-0`, className)}
      style={{ transitionDuration: `${timeout}ms` }}
    >
      {children}
    </div>
  )
}

export { MuiSlide }
export type { MuiSlideProps }
