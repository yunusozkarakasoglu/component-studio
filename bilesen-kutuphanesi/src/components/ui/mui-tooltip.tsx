/**
 * MuiTooltip
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * İpucu — öğenin üzerine gelince beliren açıklama.
 *   <MuiTooltip title="Açıklama"><button>…</button></MuiTooltip>
 * title · placement: top/bottom/left/right (varsayılan top)
 * arrow: ok işareti · children tek element
 * @id 1988
 * @category Overlay
 * @subcategory MuiTooltip
 * @source mui
 */
import { useState, type ReactElement } from "react"
import { cn } from "@/lib/utils"

interface MuiTooltipProps {
  title?: string
  placement?: "top" | "bottom" | "left" | "right"
  arrow?: boolean
  className?: string
  children?: ReactElement
}

const PLACEMENT: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-1.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-1.5",
}

function MuiTooltip({ title = "İpucu", placement = "top", arrow = false, className, children = <span>Hedef</span> }: MuiTooltipProps) {
  const [visible, setVisible] = useState(false)
  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {visible && (
        <span
          role="tooltip"
          className={cn(
            "absolute z-40 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg",
            PLACEMENT[placement],
            arrow && "after:absolute after:border-4 after:border-transparent",
            arrow && placement === "top" && "after:left-1/2 after:top-full after:-translate-x-1/2 after:border-t-gray-800",
            arrow && placement === "bottom" && "after:left-1/2 after:bottom-full after:-translate-x-1/2 after:border-b-gray-800",
            arrow && placement === "left" && "after:top-1/2 after:left-full after:-translate-y-1/2 after:border-l-gray-800",
            arrow && placement === "right" && "after:top-1/2 after:right-full after:-translate-y-1/2 after:border-r-gray-800"
          )}
        >
          {title}
        </span>
      )}
      {children}
    </span>
  )
}

export { MuiTooltip }
export type { MuiTooltipProps }
