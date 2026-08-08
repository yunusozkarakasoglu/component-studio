/**
 * MtCollapse
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Aç/kapa — in prop'u ile yükseklik animasyonu.
 *   <MtCollapse in={opened}>…</MtCollapse>
 * @id 1518
 * @category Alert & Dialog
 * @subcategory MtCollapse
 * @source mantine
 */
import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtCollapseProps {
  in?: boolean
  transitionDuration?: number
  transitionTimingFunction?: string
  onTransitionEnd?: () => void
  children?: ReactNode
  className?: string
}

function MtCollapse({ in: open = false, transitionDuration = 200, transitionTimingFunction = "ease", onTransitionEnd, children, className }: MtCollapseProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | "auto">(open ? "auto" : 0)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (open) {
      const target = el.scrollHeight
      el.style.height = "0px"
      requestAnimationFrame(() => {
        el.style.height = `${target}px`
        setHeight(target)
      })
    } else {
      el.style.height = `${el.scrollHeight}px`
      requestAnimationFrame(() => {
        el.style.height = "0px"
        setHeight(0)
      })
    }
  }, [open])

  return (
    <div
      ref={ref}
      data-slot="mt-collapse"
      className={cn("overflow-hidden transition-[height]", className)}
      style={{
        height: height === "auto" ? undefined : `${height}px`,
        transitionDuration: `${transitionDuration}ms`,
        transitionTimingFunction,
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === "height" && open) setHeight("auto")
        onTransitionEnd?.()
      }}
    >
      {children}
    </div>
  )
}

export { MtCollapse }
export type { MtCollapseProps }
