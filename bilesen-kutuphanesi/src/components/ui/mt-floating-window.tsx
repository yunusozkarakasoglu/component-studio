/**
 * MtFloatingWindow
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yüzen pencere — sürüklenebilir, yeniden boyutlandırılabilir başlıklı panel.
 *   <MtFloatingWindow title="Pencere">…</MtFloatingWindow>
 * @id 1771
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtFloatingWindowProps {
  title?: ReactNode
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
  minWidth?: number
  minHeight?: number
  resizable?: boolean
  closeable?: boolean
  onClose?: () => void
  children?: ReactNode
  className?: string
}

function MtFloatingWindow({ title, initialPosition = { x: 24, y: 24 }, initialSize = { width: 280, height: 220 }, minWidth = 160, minHeight = 120, resizable = true, closeable = true, onClose, children, className }: MtFloatingWindowProps) {
  const [pos, setPos] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [closed, setClosed] = useState(false)
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number } | null>(null)
  const resizeRef = useRef<{ startX: number; startY: number; w: number; h: number } | null>(null)

  if (closed) return null

  return (
    <div
      data-slot="mt-floating-window"
      className={cn("absolute select-none rounded-xl border border-border bg-background shadow-xl", className)}
      style={{ left: pos.x, top: pos.y, width: size.width, height: size.height, touchAction: "none" }}
      onPointerMove={(e) => {
        if (dragRef.current) {
          const dx = e.clientX - dragRef.current.startX
          const dy = e.clientY - dragRef.current.startY
          setPos({ x: dragRef.current.posX + dx, y: dragRef.current.posY + dy })
        }
        if (resizeRef.current) {
          const dw = e.clientX - resizeRef.current.startX
          const dh = e.clientY - resizeRef.current.startY
          setSize({ width: Math.max(minWidth, resizeRef.current.w + dw), height: Math.max(minHeight, resizeRef.current.h + dh) })
        }
      }}
      onPointerUp={() => {
        dragRef.current = null
        resizeRef.current = null
      }}
      onPointerLeave={() => {
        dragRef.current = null
        resizeRef.current = null
      }}
    >
      <div
        className="flex h-9 cursor-grab items-center justify-between rounded-t-xl border-b border-border bg-muted/40 px-3 active:cursor-grabbing"
        onPointerDown={(e) => {
          dragRef.current = { startX: e.clientX, startY: e.clientY, posX: pos.x, posY: pos.y }
        }}
      >
        <span className="text-xs font-semibold text-foreground">{title}</span>
        {closeable && (
          <button
            type="button"
            aria-label="Kapat"
            onClick={() => {
              setClosed(true)
              onClose?.()
            }}
            className="flex size-5 cursor-pointer items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      <div className="h-[calc(100%-2.25rem)] overflow-auto p-3 text-sm text-foreground">{children}</div>
      {resizable && (
        <div
          className="absolute right-0 bottom-0 size-4 cursor-nwse-resize"
          onPointerDown={(e) => {
            resizeRef.current = { startX: e.clientX, startY: e.clientY, w: size.width, h: size.height }
          }}
        />
      )}
    </div>
  )
}

export { MtFloatingWindow }
export type { MtFloatingWindowProps }
