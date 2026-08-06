/**
 * ShadcnSheet familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Kenar paneli — Sheet + Trigger + Content (side) + Header/Title/Description + Footer + Close.
 *   <ShadcnSheet>
 *     <ShadcnSheetTrigger>Open</ShadcnSheetTrigger>
 *     <ShadcnSheetContent side="right">
 *       <ShadcnSheetHeader>
 *         <ShadcnSheetTitle>…</ShadcnSheetTitle>
 *         <ShadcnSheetDescription>…</ShadcnSheetDescription>
 *       </ShadcnSheetHeader>
 *     </ShadcnSheetContent>
 *   </ShadcnSheet>
 * side: left | right | top | bottom (varsayılan right).
 * @id 821
 * @category Overlay
 * @subcategory ShadcnSheet
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface SheetContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextValue | null>(null)

function useShadcnSheet(): SheetContextValue {
  const ctx = useContext(SheetContext)
  if (!ctx) throw new Error("ShadcnSheet parçaları, ShadcnSheet içinde kullanılmalı")
  return ctx
}

interface ShadcnSheetProps {
  children?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function ShadcnSheet({ children, open, defaultOpen, onOpenChange }: ShadcnSheetProps) {
  const [internal, setInternal] = useState(!!defaultOpen)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => {
    if (open === undefined) setInternal(v)
    onOpenChange?.(v)
  }
  return <SheetContext.Provider value={{ open: isOpen, setOpen }}>{children}</SheetContext.Provider>
}

interface ShadcnSheetTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnSheetTrigger({ className, children, onClick, ...props }: ShadcnSheetTriggerProps) {
  const ctx = useShadcnSheet()
  return (
    <button
      type="button"
      data-slot="shadcn-sheet-trigger"
      onClick={(e) => {
        ctx.setOpen(true)
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

interface ShadcnSheetContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom"
  showCloseButton?: boolean
}

function ShadcnSheetContent({ className, side = "right", showCloseButton = true, children, ...props }: ShadcnSheetContentProps) {
  const ctx = useShadcnSheet()
  if (!ctx.open) return null

  return (
    <div data-slot="shadcn-sheet" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => ctx.setOpen(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed z-10 flex flex-col bg-background p-6 text-foreground shadow-lg",
          side === "right" && "inset-y-0 right-0 w-full max-w-sm border-l border-border",
          side === "left" && "inset-y-0 left-0 w-full max-w-sm border-r border-border",
          side === "top" && "inset-x-0 top-0 max-h-[80vh] border-b border-border",
          side === "bottom" && "inset-x-0 bottom-0 max-h-[80vh] border-t border-border",
          className
        )}
        {...props}
      >
        {showCloseButton && (
          <button
            type="button"
            aria-label="Close"
            onClick={() => ctx.setOpen(false)}
            className="absolute right-4 top-4 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

interface ShadcnSheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSheetHeader({ className, ...props }: ShadcnSheetHeaderProps) {
  return <div data-slot="shadcn-sheet-header" className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />
}

interface ShadcnSheetTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnSheetTitle({ className, ...props }: ShadcnSheetTitleProps) {
  return <h2 data-slot="shadcn-sheet-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />
}

interface ShadcnSheetDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnSheetDescription({ className, ...props }: ShadcnSheetDescriptionProps) {
  return <p data-slot="shadcn-sheet-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnSheetFooterProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSheetFooter({ className, ...props }: ShadcnSheetFooterProps) {
  return <div data-slot="shadcn-sheet-footer" className={cn("mt-auto flex gap-2 pt-4", className)} {...props} />
}

interface ShadcnSheetCloseProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnSheetClose({ className, children, onClick, ...props }: ShadcnSheetCloseProps) {
  const ctx = useShadcnSheet()
  return (
    <button
      type="button"
      data-slot="shadcn-sheet-close"
      onClick={(e) => {
        ctx.setOpen(false)
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

export {
  ShadcnSheet,
  ShadcnSheetClose,
  ShadcnSheetContent,
  ShadcnSheetDescription,
  ShadcnSheetFooter,
  ShadcnSheetHeader,
  ShadcnSheetTitle,
  ShadcnSheetTrigger,
}
export type {
  ShadcnSheetCloseProps,
  ShadcnSheetContentProps,
  ShadcnSheetDescriptionProps,
  ShadcnSheetFooterProps,
  ShadcnSheetHeaderProps,
  ShadcnSheetProps,
  ShadcnSheetTitleProps,
  ShadcnSheetTriggerProps,
}
