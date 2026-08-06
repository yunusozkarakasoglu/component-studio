/**
 * ShadcnTooltip familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Tooltip + Trigger + Content (side).
 *   <ShadcnTooltip>
 *     <ShadcnTooltipTrigger>Hover</ShadcnTooltipTrigger>
 *     <ShadcnTooltipContent side="top">Add to library</ShadcnTooltipContent>
 *   </ShadcnTooltip>
 * side: top | right | bottom | left (varsayılan top).
 * @id 795
 * @category Overlay
 * @subcategory ShadcnTooltip
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TooltipContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

function useShadcnTooltip(): TooltipContextValue {
  const ctx = useContext(TooltipContext)
  if (!ctx) throw new Error("ShadcnTooltip parçaları, ShadcnTooltip içinde kullanılmalı")
  return ctx
}

interface ShadcnTooltipProps {
  children?: ReactNode
  defaultOpen?: boolean
}

function ShadcnTooltip({ children, defaultOpen }: ShadcnTooltipProps) {
  const [open, setOpen] = useState(!!defaultOpen)
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div data-slot="shadcn-tooltip" className="relative inline-block">
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

interface ShadcnTooltipTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnTooltipTrigger({ className, children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }: ShadcnTooltipTriggerProps) {
  const ctx = useShadcnTooltip()
  return (
    <button
      type="button"
      data-slot="shadcn-tooltip-trigger"
      aria-describedby={ctx.open ? "shadcn-tooltip-content" : undefined}
      onMouseEnter={(e) => { ctx.setOpen(true); onMouseEnter?.(e) }}
      onMouseLeave={(e) => { ctx.setOpen(false); onMouseLeave?.(e) }}
      onFocus={(e) => { ctx.setOpen(true); onFocus?.(e) }}
      onBlur={(e) => { ctx.setOpen(false); onBlur?.(e) }}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnTooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left"
}

function ShadcnTooltipContent({ className, side = "top", children, ...props }: ShadcnTooltipContentProps) {
  const ctx = useShadcnTooltip()
  if (!ctx.open) return null

  return (
    <div
      id="shadcn-tooltip-content"
      role="tooltip"
      data-slot="shadcn-tooltip-content"
      className={cn(
        "absolute z-50 w-max max-w-xs rounded-md border border-border bg-foreground px-2.5 py-1.5 text-xs text-background shadow-md",
        side === "top" && "bottom-full left-1/2 mb-2 -translate-x-1/2",
        side === "bottom" && "top-full left-1/2 mt-2 -translate-x-1/2",
        side === "left" && "right-full top-1/2 mr-2 -translate-y-1/2",
        side === "right" && "left-full top-1/2 ml-2 -translate-y-1/2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { ShadcnTooltip, ShadcnTooltipContent, ShadcnTooltipTrigger }
export type { ShadcnTooltipContentProps, ShadcnTooltipProps, ShadcnTooltipTriggerProps }
