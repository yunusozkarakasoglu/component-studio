/**
 * MtTooltip
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İpucu — label, position, children (trigger).
 *   <MtTooltip label="Tooltip content"><MtButton>Hover</MtButton></MtTooltip>
 * @id 1344
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtTooltipProps {
  label?: ReactNode
  children?: ReactNode
  position?: "top" | "right" | "bottom" | "left"
  disabled?: boolean
  withArrow?: boolean
  className?: string
}

function MtTooltip({ label = "", children, position = "top", disabled, withArrow, className }: MtTooltipProps) {
  const [visible, setVisible] = useState(false)

  if (disabled) return <>{children}</>

  const posClass =
    position === "top" ? "bottom-full left-1/2 mb-1.5 -translate-x-1/2" :
    position === "bottom" ? "top-full left-1/2 mt-1.5 -translate-x-1/2" :
    position === "left" ? "right-full top-1/2 mr-1.5 -translate-y-1/2" :
    "left-full top-1/2 ml-1.5 -translate-y-1/2"

  return (
    <div
      data-slot="mt-tooltip"
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={cn("absolute z-50 w-max max-w-xs rounded bg-gray-900 px-2.5 py-1 text-xs text-white shadow", posClass)}>
          {withArrow && <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 rotate-45 bg-gray-900" />}
          {label}
        </div>
      )}
    </div>
  )
}

export { MtTooltip }
export type { MtTooltipProps }
