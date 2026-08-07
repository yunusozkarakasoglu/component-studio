/**
 * MtPopover
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Açılır içerik — Target + Dropdown.
 *   <MtPopover>
 *     <MtPopoverTarget><MtButton>Toggle</MtButton></MtPopoverTarget>
 *     <MtPopoverDropdown>…</MtPopoverDropdown>
 *   </MtPopover>
 * @id 1345
 * @category Overlay
 * @subcategory MtPopover
 * @source mantine
 */
import { createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const PopoverContext = createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null)

interface MtPopoverProps extends HTMLAttributes<HTMLDivElement> {}

function MtPopover({ className, children, ...props }: MtPopoverProps) {
  const [open, setOpen] = useState(false)
  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div data-slot="mt-popover" className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

interface MtPopoverTargetProps extends HTMLAttributes<HTMLDivElement> {}

function MtPopoverTarget({ className, children, onClick, ...props }: MtPopoverTargetProps) {
  const ctx = useContext(PopoverContext)!
  return (
    <div className={className} onClick={(e) => { ctx.setOpen(!ctx.open); onClick?.(e) }} {...props}>
      {children}
    </div>
  )
}

interface MtPopoverDropdownProps extends HTMLAttributes<HTMLDivElement> {}

function MtPopoverDropdown({ className, children, ...props }: MtPopoverDropdownProps) {
  const ctx = useContext(PopoverContext)!
  if (!ctx.open) return null
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => ctx.setOpen(false)} />
      <div data-slot="mt-popover-dropdown" className={cn("absolute left-0 top-full z-50 mt-1.5 w-64 rounded-lg border border-border bg-background p-3 text-foreground shadow-lg", className)} {...props}>
        {children}
      </div>
    </>
  )
}

export { MtPopover, MtPopoverDropdown, MtPopoverTarget }
export type { MtPopoverDropdownProps, MtPopoverProps, MtPopoverTargetProps }
