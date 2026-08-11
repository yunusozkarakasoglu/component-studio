/**
 * MuiPopper
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Konumlanmış açılır panel — bağlantılı öğe.
 *   <MuiPopper trigger={<button>…</button>}>…</MuiPopper>
 * trigger · placement · width
 * @id 2075
 * @category Overlay
 * @subcategory MuiPopper
 * @source mui
 */
import { useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface MuiPopperProps {
  trigger?: ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  width?: number
  className?: string
  children?: ReactNode
}

const POS: Record<string, string> = {
  bottom: "top-full mt-2",
  top: "bottom-full mb-2",
  left: "right-full mr-2 top-0",
  right: "left-full ml-2 top-0",
}

function MuiPopper({ trigger = "Aç", placement = "bottom", width = 260, className, children }: MuiPopperProps) {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState<DOMRect | null>(null)
  const openAt = (e: MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget.getBoundingClientRect())
    setOpen((o) => !o)
  }
  return (
    <div className={cn("relative inline-flex", className)}>
      <span onClick={openAt} aria-expanded={open}>{trigger}</span>
      {open && anchor && (
        <div className="fixed z-50" style={{ left: anchor.left, top: anchor.top }}>
          <div role="tooltip" className={cn("absolute", POS[placement])} style={{ width: `${width}px` }}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export { MuiPopper }
export type { MuiPopperProps }
