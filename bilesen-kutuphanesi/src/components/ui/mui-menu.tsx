/**
 * MuiMenu
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Açılır menü — tetikleyiciye göre konumlanır.
 *   <MuiMenu trigger={<button>…</button>} items={[{label, onClick}]} />
 * trigger: açan element · items: {label, icon?, onClick?, disabled?}[]
 * position: top/bottom/left/right (varsayılan bottom)
 * @id 1991
 * @category Navigasyon
 * @subcategory MuiMenu
 * @source mui
 */
import { useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface MuiMenuItem {
  label: ReactNode
  icon?: ReactNode
  onClick?: () => void
  disabled?: boolean
}

interface MuiMenuProps {
  trigger?: ReactNode
  items?: MuiMenuItem[]
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

const POS: Record<string, string> = {
  bottom: "top-full mt-1 left-0",
  top: "bottom-full mb-1 left-0",
  left: "right-full mr-1 top-0",
  right: "left-full ml-1 top-0",
}

function MuiMenu({ trigger = "Menü", items = [], position = "bottom", className }: MuiMenuProps) {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState<DOMRect | null>(null)

  const openAt = (e: MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget.getBoundingClientRect())
    setOpen(true)
  }

  return (
    <div className={cn("relative inline-flex", className)}>
      <span onMouseDown={(e) => e.preventDefault()} onClick={openAt} aria-haspopup="menu" aria-expanded={open}>
        {trigger}
      </span>
      {open && anchor && (
        <div className="fixed z-50" style={{ left: anchor.left, top: anchor.top }} onMouseLeave={() => setOpen(false)}>
          <ul
            role="menu"
            className={cn("absolute min-w-44 rounded-md border border-gray-200 bg-white py-1 shadow-lg", POS[position], position === "left" || position === "right" ? "left-full ml-1 top-0" : "")}
          >
            {items.map((item, i) => (
              <li key={i} role="menuitem">
                <button
                  type="button"
                  disabled={item.disabled}
                  onClick={() => {
                    setOpen(false)
                    item.onClick?.()
                  }}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-blue-50",
                    item.disabled && "cursor-not-allowed text-gray-400 hover:bg-transparent"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { MuiMenu }
export type { MuiMenuProps, MuiMenuItem }
