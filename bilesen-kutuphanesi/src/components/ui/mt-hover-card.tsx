/**
 * MtHoverCard
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Üzerine gelince içerik — Target + Dropdown.
 *   <MtHoverCard>
 *     <MtHoverCardTarget><MtAnchor href="#">Hover</MtAnchor></MtHoverCardTarget>
 *     <MtHoverCardDropdown>…</MtHoverCardDropdown>
 *   </MtHoverCard>
 * @id 1346
 * @category Overlay
 * @subcategory MtHoverCard
 * @source mantine
 */
import { createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const HoverCardContext = createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null)

interface MtHoverCardProps extends HTMLAttributes<HTMLDivElement> {}

function MtHoverCard({ className, children, ...props }: MtHoverCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <HoverCardContext.Provider value={{ open, setOpen }}>
      <div data-slot="mt-hover-card" className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </HoverCardContext.Provider>
  )
}

interface MtHoverCardTargetProps extends HTMLAttributes<HTMLDivElement> {}

function MtHoverCardTarget({ className, children, ...props }: MtHoverCardTargetProps) {
  const ctx = useContext(HoverCardContext)!
  return (
    <div className={className} onMouseEnter={() => ctx.setOpen(true)} onMouseLeave={() => ctx.setOpen(false)} {...props}>
      {children}
    </div>
  )
}

interface MtHoverCardDropdownProps extends HTMLAttributes<HTMLDivElement> {}

function MtHoverCardDropdown({ className, children, ...props }: MtHoverCardDropdownProps) {
  const ctx = useContext(HoverCardContext)!
  if (!ctx.open) return null
  return (
    <div data-slot="mt-hover-card-dropdown" onMouseEnter={() => ctx.setOpen(true)} onMouseLeave={() => ctx.setOpen(false)}
      className={cn("absolute left-0 top-full z-50 mt-1.5 w-72 rounded-lg border border-border bg-background p-3 text-foreground shadow-lg", className)} {...props}>
      {children}
    </div>
  )
}

export { MtHoverCard, MtHoverCardDropdown, MtHoverCardTarget }
export type { MtHoverCardDropdownProps, MtHoverCardProps, MtHoverCardTargetProps }
