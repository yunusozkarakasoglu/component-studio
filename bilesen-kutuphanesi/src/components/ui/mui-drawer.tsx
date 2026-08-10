/**
 * MuiDrawer
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Yan panel — kenardan kayan çekmece.
 *   <MuiDrawer open={open} onClose={h} anchor="right">…</MuiDrawer>
 * anchor: left (varsayılan) | right | top | bottom · width (piksel)
 * variant: temporary (overlay'li) | persistent (kenar itmeli)
 * @id 1984
 * @category Overlay
 * @subcategory MuiDrawer
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MuiDrawerProps {
  open?: boolean
  onClose?: () => void
  anchor?: "left" | "right" | "top" | "bottom"
  width?: number
  title?: ReactNode
  closeable?: boolean
  className?: string
  children?: ReactNode
}

function MuiDrawer({
  open = false,
  onClose,
  anchor = "left",
  width = 320,
  title,
  closeable = true,
  className,
  children,
}: MuiDrawerProps) {
  if (!open) return null
  const posCls = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "left-0 top-0 w-full border-b",
    bottom: "left-0 bottom-0 w-full border-t",
  }[anchor]
  const sizeStyle = anchor === "left" || anchor === "right" ? { width: `${width}px` } : { height: `${Math.min(width, 400)}px` }
  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn("fixed bg-white text-gray-900 shadow-xl", posCls, className)}
        style={sizeStyle}
      >
        {(title || closeable) && (
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <h2 className="text-base font-semibold">{title}</h2>
            {closeable && (
              <button type="button" aria-label="Kapat" onClick={onClose} className="rounded p-1 text-gray-500 hover:bg-gray-100">
                <X className="size-5" />
              </button>
            )}
          </div>
        )}
        <div className="h-[calc(100%-3rem)] overflow-y-auto p-4 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  )
}

export { MuiDrawer }
export type { MuiDrawerProps }
