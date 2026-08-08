/**
 * MtSplitter
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Bölücü — iki paneli sürüklenebilir tutamaçla ayırır.
 *   <MtSplitter>
 *     <div>Sol</div>
 *     <div>Sağ</div>
 *   </MtSplitter>
 * @id 1768
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { Children, useCallback, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtSplitterProps {
  orientation?: "horizontal" | "vertical"
  initialSize?: number
  minSize?: number
  maxSize?: number
  lineSize?: number
  withHandle?: boolean
  children?: ReactNode
  className?: string
}

function MtSplitter({ orientation = "horizontal", initialSize = 50, minSize = 15, maxSize = 85, lineSize = 6, withHandle, children, className }: MtSplitterProps) {
  const [size, setSize] = useState(initialSize)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const onMove = useCallback(
    (clientX: number, clientY: number) => {
      const el = containerRef.current
      if (!el || !dragging.current) return
      const rect = el.getBoundingClientRect()
      const total = orientation === "horizontal" ? rect.width : rect.height
      const pos = orientation === "horizontal" ? clientX - rect.left : clientY - rect.top
      const pct = Math.min(maxSize, Math.max(minSize, (pos / total) * 100))
      setSize(pct)
    },
    [orientation, minSize, maxSize]
  )

  const panels = Children.toArray(children)

  return (
    <div
      ref={containerRef}
      data-slot="mt-splitter"
      className={cn("flex w-full select-none", orientation === "horizontal" ? "h-48 flex-row" : "h-64 flex-col", className)}
      onPointerMove={(e) => onMove(e.clientX, e.clientY)}
      onPointerUp={() => { dragging.current = false }}
      onPointerLeave={() => { dragging.current = false }}
    >
      {panels[0] && (
        <div className="min-h-0 min-w-0 overflow-auto" style={{ width: orientation === "horizontal" ? `${size}%` : "100%", height: orientation === "vertical" ? `${size}%` : "100%" }}>
          {panels[0]}
        </div>
      )}
      {panels.length > 1 && (
        <div
          role="separator"
          aria-orientation={orientation}
          onPointerDown={(e) => {
            dragging.current = true
            e.currentTarget.setPointerCapture(e.pointerId)
          }}
          className={cn(
            "relative z-10 shrink-0 cursor-col-resize touch-none bg-border transition-colors hover:bg-blue-400",
            orientation === "vertical" && "w-full cursor-row-resize",
            withHandle && "bg-blue-200 hover:bg-blue-400"
          )}
          style={orientation === "horizontal" ? { width: lineSize } : { height: lineSize }}
        />
      )}
      {panels[1] && (
        <div className="min-h-0 min-w-0 overflow-auto" style={{ width: orientation === "horizontal" ? `${100 - size}%` : "100%", height: orientation === "vertical" ? `${100 - size}%` : "100%" }}>
          {panels[1]}
        </div>
      )}
    </div>
  )
}

export { MtSplitter }
export type { MtSplitterProps }
