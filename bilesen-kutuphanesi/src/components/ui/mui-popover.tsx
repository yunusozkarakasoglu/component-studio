/**
 * MuiPopover
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Açılır içerik — tetikleyiciye bağlı küçük panel.
 *   <MuiPopover trigger={<button>…</button>}>…içerik…</MuiPopover>
 * trigger · placement: top/bottom/left/right · width
 * @id 2025
 * @category Overlay
 * @subcategory MuiPopover
 * @source mui
 */
import { useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface MuiPopoverProps {
  trigger?: ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  width?: number
  className?: string
  children?: ReactNode
}

const POS: Record<string, string> = {
  bottom: "top-full mt-2 left-0",
  top: "bottom-full mb-2 left-0",
  left: "right-full mr-2 top-0",
  right: "left-full ml-2 top-0",
}

function MuiPopover({ trigger = "Aç", placement = "bottom", width = 280, className, children }: MuiPopoverProps) {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState<DOMRect | null>(null)

  const openAt = (e: MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget.getBoundingClientRect())
    setOpen((o) => !o)
  }

  return (
    <div className={cn("relative inline-flex", className)}>
      <span onClick={openAt} aria-haspopup="dialog" aria-expanded={open}>
        {trigger}
      </span>
      {open && anchor && (
        <div className="fixed z-50" style={{ left: anchor.left, top: anchor.top }}>
          <div
            role="dialog"
            className={cn(
              "absolute rounded-lg border border-gray-200 bg-white p-3 shadow-xl",
              POS[placement]
            )}
            style={{ width: `${width}px` }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export { MuiPopover }
export type { MuiPopoverProps }
