/**
 * MuiSpeedDial
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Hız araması — ana butona tıklayınca etrafında açılan aksiyon butonları.
 *   <MuiSpeedDial ariaLabel="…" actions={[{icon, name}]} />
 * direction: up | down | left | right · actions: {icon, name, onClick}[]
 * @id 1913
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiSpeedDial
 * @source mui
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X, Plus } from "@/components/ui/icons"

interface MuiSpeedDialAction {
  icon: ReactNode
  name: string
  onClick?: () => void
}

interface MuiSpeedDialProps {
  ariaLabel?: string
  actions?: MuiSpeedDialAction[]
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

function MuiSpeedDial({ ariaLabel = "Hızlı aksiyon", actions = [], direction = "up", className }: MuiSpeedDialProps) {
  const [open, setOpen] = useState(false)
  const dirCls = {
    up: "bottom-16 right-2 flex-col-reverse",
    down: "top-16 right-2 flex-col",
    left: "right-16 top-2 flex-row-reverse",
    right: "left-16 top-2 flex-row",
  }[direction]
  return (
    <div className={cn("relative inline-flex", className)}>
      {/* Aksiyonlar */}
      <div className={cn("absolute z-10 flex items-center gap-2", dirCls)}>
        {open &&
          actions.map((a) => (
            <button
              key={a.name}
              type="button"
              onClick={() => {
                setOpen(false)
                a.onClick?.()
              }}
              className="group flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-2 text-xs text-white shadow-lg transition-colors hover:bg-gray-700"
            >
              {a.icon}
              <span className="hidden group-hover:inline">{a.name}</span>
            </button>
          ))}
      </div>
      {/* Ana buton */}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative z-20 flex size-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform hover:bg-blue-700 hover:scale-105"
      >
        {open ? <X className="size-6" /> : <Plus className="size-6" />}
      </button>
    </div>
  )
}

export { MuiSpeedDial }
export type { MuiSpeedDialProps, MuiSpeedDialAction }
