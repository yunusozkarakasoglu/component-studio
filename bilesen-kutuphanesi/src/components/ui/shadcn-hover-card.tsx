/**
 * ShadcnHoverCard familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * HoverCard + Trigger (delay) + Content (side).
 *   <ShadcnHoverCard>
 *     <ShadcnHoverCardTrigger delay={10} closeDelay={100}>Hover Here</ShadcnHoverCardTrigger>
 *     <ShadcnHoverCardContent side="top">…</ShadcnHoverCardContent>
 *   </ShadcnHoverCard>
 * @id 801
 * @category Overlay
 * @subcategory ShadcnHoverCard
 * @source shadcn
 */
import { createContext, useContext, useRef, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HoverCardContextValue {
  open: boolean
  enter: () => void
  leave: () => void
}

const HoverCardContext = createContext<HoverCardContextValue | null>(null)

function useShadcnHoverCard(): HoverCardContextValue {
  const ctx = useContext(HoverCardContext)
  if (!ctx) throw new Error("ShadcnHoverCard parçaları, ShadcnHoverCard içinde kullanılmalı")
  return ctx
}

interface ShadcnHoverCardProps {
  children?: ReactNode
  defaultOpen?: boolean
}

function ShadcnHoverCard({ children, defaultOpen }: ShadcnHoverCardProps) {
  const [open, setOpen] = useState(!!defaultOpen)
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const delayRef = useRef(0)
  const closeDelayRef = useRef(100)

  const enter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpen(true), delayRef.current)
  }
  const leave = () => {
    if (openTimer.current) clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), closeDelayRef.current)
  }

  const value: HoverCardContextValue = {
    open,
    enter: () => {
      delayRef.current = 0
      enter()
    },
    leave,
  }

  return (
    <HoverCardContext.Provider value={value}>
      <div data-slot="shadcn-hover-card" className="relative inline-block">
        {children}
      </div>
    </HoverCardContext.Provider>
  )
}

interface ShadcnHoverCardTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  delay?: number
  closeDelay?: number
}

function ShadcnHoverCardTrigger({ className, delay = 0, closeDelay = 100, children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }: ShadcnHoverCardTriggerProps) {
  const ctx = useShadcnHoverCard()
  const ctxRef = useRef(ctx)
  ctxRef.current = ctx
  const delayRef = useRef(delay)

  return (
    <button
      type="button"
      data-slot="shadcn-hover-card-trigger"
      onMouseEnter={(e) => {
        delayRef.current = delay
        ctxRef.current.enter()
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        ctxRef.current.leave()
        onMouseLeave?.(e)
      }}
      onFocus={(e) => {
        ctxRef.current.enter()
        onFocus?.(e)
      }}
      onBlur={(e) => {
        ctxRef.current.leave()
        onBlur?.(e)
      }}
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

interface ShadcnHoverCardContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left"
}

function ShadcnHoverCardContent({ className, side = "top", children, ...props }: ShadcnHoverCardContentProps) {
  const ctx = useShadcnHoverCard()
  if (!ctx.open) return null

  return (
    <div
      role="dialog"
      data-slot="shadcn-hover-card-content"
      className={cn(
        "absolute z-50 w-max max-w-sm rounded-lg border border-border bg-background p-4 text-sm text-foreground shadow-lg outline-none",
        side === "top" && "bottom-full left-1/2 mb-2 -translate-x-1/2",
        side === "bottom" && "top-full left-1/2 mt-2 -translate-x-1/2",
        side === "left" && "right-full top-1/2 mr-2 -translate-y-1/2",
        side === "right" && "left-full top-1/2 ml-2 -translate-y-1/2",
        className
      )}
      onMouseEnter={() => ctx.enter()}
      onMouseLeave={() => ctx.leave()}
      {...props}
    >
      {children}
    </div>
  )
}

export { ShadcnHoverCard, ShadcnHoverCardContent, ShadcnHoverCardTrigger }
export type { ShadcnHoverCardContentProps, ShadcnHoverCardProps, ShadcnHoverCardTriggerProps }
