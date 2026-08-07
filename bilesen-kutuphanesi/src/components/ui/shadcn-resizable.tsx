/**
 * ShadcnResizable familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Yeniden boyutlandırılabilir paneller — PanelGroup + Panel + ResizeHandle.
 * Not: kaynak react-resizable-panels kullanır — üçüncü parti olduğundan
 * basit pointer tabanlı kendi çekirdeği yazıldı.
 *   <ShadcnResizablePanelGroup orientation="horizontal">
 *     <ShadcnResizablePanel defaultSize={50}>…</ShadcnResizablePanel>
 *     <ShadcnResizableHandle withHandle />
 *     <ShadcnResizablePanel defaultSize={50}>…</ShadcnResizablePanel>
 *   </ShadcnResizablePanelGroup>
 * @id 984
 * @category Genel
 * @subcategory ShadcnResizable
 * @source shadcn
 */
import { createContext, useContext, useRef, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { GripVertical } from "@/components/ui/icons"

interface PanelGroupContextValue {
  registerPanel: () => number
  sizes: number[]
  setSize: (index: number, value: number) => void
}

const PanelGroupContext = createContext<PanelGroupContextValue | null>(null)

function usePanelGroup(): PanelGroupContextValue {
  const ctx = useContext(PanelGroupContext)
  if (!ctx) throw new Error("ShadcnResizablePanel, ShadcnResizablePanelGroup içinde kullanılmalı")
  return ctx
}

interface ShadcnResizablePanelGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  children?: ReactNode
}

function ShadcnResizablePanelGroup({ className, orientation = "horizontal", children, ...props }: ShadcnResizablePanelGroupProps) {
  const [sizes, setSizes] = useState<number[]>([])
  const panelCount = useRef(0)

  const registerPanel = () => panelCount.current++

  const setSize = (index: number, value: number) => {
    setSizes((prev) => {
      const next = [...prev]
      next[index] = Math.max(5, Math.min(95, value))
      return next
    })
  }

  return (
    <PanelGroupContext.Provider value={{ registerPanel, sizes, setSize }}>
      <div
        data-slot="shadcn-resizable-panel-group"
        className={cn(
          "flex w-full gap-0.5",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </PanelGroupContext.Provider>
  )
}

interface ShadcnResizablePanelProps extends HTMLAttributes<HTMLDivElement> {
  defaultSize?: number
}

function ShadcnResizablePanel({ className, defaultSize = 50, children, ...props }: ShadcnResizablePanelProps) {
  const ctx = usePanelGroup()
  const index = useRef(ctx.registerPanel())
  const size = ctx.sizes[index.current] ?? defaultSize

  return (
    <div
      data-slot="shadcn-resizable-panel"
      className={cn("min-h-0 min-w-0 flex-1", className)}
      style={{ flexGrow: size, flexBasis: 0 }}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnResizableHandleProps extends HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean
}

function ShadcnResizableHandle({ className, withHandle, ...props }: ShadcnResizableHandleProps) {
  const ctx = usePanelGroup()
  const dragging = useRef(false)
  const startPos = useRef(0)
  const startSize = useRef(0)

  const findPanelIndex = (el: HTMLElement | null): number => {
    if (!el) return -1
    const panels = Array.from(el.querySelectorAll("[data-slot=shadcn-resizable-panel]"))
    return panels.findIndex((p) => p.contains(el) || p === el)
  }

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      data-slot="shadcn-resizable-handle"
      onPointerDown={(e) => {
        dragging.current = true
        startPos.current = e.clientX
        // en yakın önceki panelin boyutunu bul
        const group = e.currentTarget.closest("[data-slot=shadcn-resizable-panel-group]")
        const panels = group ? Array.from(group.querySelectorAll("[data-slot=shadcn-resizable-panel]")) : []
        const idx = panels.findIndex((p) => p === e.currentTarget.previousElementSibling)
        if (idx >= 0 && ctx.sizes[idx]) startSize.current = ctx.sizes[idx]
        e.currentTarget.setPointerCapture(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return
        const group = e.currentTarget.closest("[data-slot=shadcn-resizable-panel-group]")
        const panels = group ? Array.from(group.querySelectorAll("[data-slot=shadcn-resizable-panel]")) : []
        const idx = panels.findIndex((p) => p === e.currentTarget.previousElementSibling)
        if (idx < 0) return
        const delta = e.clientX - startPos.current
        const next = Math.max(5, Math.min(95, startSize.current + delta))
        ctx.setSize(idx, next)
      }}
      onPointerUp={() => {
        dragging.current = false
      }}
      className={cn(
        "relative flex w-px shrink-0 items-center justify-center bg-border transition-colors after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 hover:bg-blue-500/60",
        className
      )}
      {...props}
    >
      {withHandle && (
        <GripVertical className="pointer-events-none size-3.5 text-muted-foreground" />
      )}
    </div>
  )
}

export { ShadcnResizableHandle, ShadcnResizablePanel, ShadcnResizablePanelGroup }
export type { ShadcnResizableHandleProps, ShadcnResizablePanelGroupProps, ShadcnResizablePanelProps }
