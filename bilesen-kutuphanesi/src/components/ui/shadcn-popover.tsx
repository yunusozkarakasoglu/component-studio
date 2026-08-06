/**
 * ShadcnPopover familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Popover + Trigger + Content + Header/Title/Description.
 *   <ShadcnPopover>
 *     <ShadcnPopoverTrigger>Open popover</ShadcnPopoverTrigger>
 *     <ShadcnPopoverContent align="start">…</ShadcnPopoverContent>
 *   </ShadcnPopover>
 * align: start | center | end.
 * @id 789
 * @category Overlay
 * @subcategory ShadcnPopover
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PopoverContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const PopoverContext = createContext<PopoverContextValue | null>(null)

function useShadcnPopover(): PopoverContextValue {
  const ctx = useContext(PopoverContext)
  if (!ctx) throw new Error("ShadcnPopover parçaları, ShadcnPopover içinde kullanılmalı")
  return ctx
}

interface ShadcnPopoverProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function ShadcnPopover({ children, open, defaultOpen, onOpenChange, className, ...props }: ShadcnPopoverProps) {
  const [internal, setInternal] = useState(!!defaultOpen)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => {
    if (open === undefined) setInternal(v)
    onOpenChange?.(v)
  }
  return (
    <PopoverContext.Provider value={{ open: isOpen, setOpen }}>
      <div data-slot="shadcn-popover" className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

interface ShadcnPopoverTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnPopoverTrigger({ className, children, onClick, ...props }: ShadcnPopoverTriggerProps) {
  const ctx = useShadcnPopover()
  return (
    <button
      type="button"
      data-slot="shadcn-popover-trigger"
      aria-expanded={ctx.open}
      onClick={(e) => {
        ctx.setOpen(!ctx.open)
        onClick?.(e)
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

interface ShadcnPopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end"
}

function ShadcnPopoverContent({ className, align = "center", children, ...props }: ShadcnPopoverContentProps) {
  const ctx = useShadcnPopover()
  if (!ctx.open) return null

  return (
    <div
      data-slot="shadcn-popover-content"
      className={cn(
        "absolute top-full z-50 mt-2 rounded-lg border border-border bg-background p-4 text-foreground shadow-lg outline-none",
        align === "start" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        align === "end" && "right-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnPopoverHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnPopoverHeader({ className, ...props }: ShadcnPopoverHeaderProps) {
  return <div data-slot="shadcn-popover-header" className={cn("mb-3 flex flex-col gap-1", className)} {...props} />
}

interface ShadcnPopoverTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnPopoverTitle({ className, ...props }: ShadcnPopoverTitleProps) {
  return <h4 data-slot="shadcn-popover-title" className={cn("font-medium leading-none", className)} {...props} />
}

interface ShadcnPopoverDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnPopoverDescription({ className, ...props }: ShadcnPopoverDescriptionProps) {
  return <p data-slot="shadcn-popover-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

export {
  ShadcnPopover,
  ShadcnPopoverContent,
  ShadcnPopoverDescription,
  ShadcnPopoverHeader,
  ShadcnPopoverTitle,
  ShadcnPopoverTrigger,
}
export type {
  ShadcnPopoverContentProps,
  ShadcnPopoverDescriptionProps,
  ShadcnPopoverHeaderProps,
  ShadcnPopoverProps,
  ShadcnPopoverTitleProps,
  ShadcnPopoverTriggerProps,
}
