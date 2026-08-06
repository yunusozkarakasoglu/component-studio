/**
 * ShadcnDrawer familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Alt panel — Drawer + Trigger + Content + Header/Title/Description + Footer + Close.
 *   <ShadcnDrawer>
 *     <ShadcnDrawerTrigger>Open</ShadcnDrawerTrigger>
 *     <ShadcnDrawerContent>
 *       <ShadcnDrawerHeader>…</ShadcnDrawerHeader>
 *     </ShadcnDrawerContent>
 *   </ShadcnDrawer>
 * side: bottom (varsayılan) | left | right | top · showHandle (varsayılan true).
 * @id 826
 * @category Overlay
 * @subcategory ShadcnDrawer
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface DrawerContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

function useShadcnDrawer(): DrawerContextValue {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error("ShadcnDrawer parçaları, ShadcnDrawer içinde kullanılmalı")
  return ctx
}

interface ShadcnDrawerProps {
  children?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function ShadcnDrawer({ children, open, defaultOpen, onOpenChange }: ShadcnDrawerProps) {
  const [internal, setInternal] = useState(!!defaultOpen)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => {
    if (open === undefined) setInternal(v)
    onOpenChange?.(v)
  }
  return <DrawerContext.Provider value={{ open: isOpen, setOpen }}>{children}</DrawerContext.Provider>
}

interface ShadcnDrawerTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnDrawerTrigger({ className, children, onClick, ...props }: ShadcnDrawerTriggerProps) {
  const ctx = useShadcnDrawer()
  return (
    <button
      type="button"
      data-slot="shadcn-drawer-trigger"
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

interface ShadcnDrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "bottom" | "left" | "right" | "top"
  showHandle?: boolean
  showCloseButton?: boolean
}

function ShadcnDrawerContent({ className, side = "bottom", showHandle = true, showCloseButton = true, children, ...props }: ShadcnDrawerContentProps) {
  const ctx = useShadcnDrawer()
  if (!ctx.open) return null

  return (
    <div data-slot="shadcn-drawer" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => ctx.setOpen(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed z-10 flex flex-col bg-background p-6 text-foreground shadow-lg",
          side === "bottom" && "inset-x-0 bottom-0 mx-auto max-w-lg rounded-t-xl border-t border-border",
          side === "left" && "inset-y-0 left-0 w-full max-w-sm border-r border-border",
          side === "right" && "inset-y-0 right-0 w-full max-w-sm border-l border-border",
          side === "top" && "inset-x-0 top-0 max-h-[80vh] border-b border-border",
          className
        )}
        {...props}
      >
        {showHandle && side === "bottom" && (
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-muted" />
        )}
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

interface ShadcnDrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnDrawerHeader({ className, ...props }: ShadcnDrawerHeaderProps) {
  return <div data-slot="shadcn-drawer-header" className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />
}

interface ShadcnDrawerTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnDrawerTitle({ className, ...props }: ShadcnDrawerTitleProps) {
  return <h2 data-slot="shadcn-drawer-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />
}

interface ShadcnDrawerDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnDrawerDescription({ className, ...props }: ShadcnDrawerDescriptionProps) {
  return <p data-slot="shadcn-drawer-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnDrawerFooterProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnDrawerFooter({ className, ...props }: ShadcnDrawerFooterProps) {
  return <div data-slot="shadcn-drawer-footer" className={cn("mt-auto flex gap-2 pt-4", className)} {...props} />
}

interface ShadcnDrawerCloseProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnDrawerClose({ className, children, onClick, ...props }: ShadcnDrawerCloseProps) {
  const ctx = useShadcnDrawer()
  return (
    <button
      type="button"
      data-slot="shadcn-drawer-close"
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
  ShadcnDrawer,
  ShadcnDrawerClose,
  ShadcnDrawerContent,
  ShadcnDrawerDescription,
  ShadcnDrawerFooter,
  ShadcnDrawerHeader,
  ShadcnDrawerTitle,
  ShadcnDrawerTrigger,
}
export type {
  ShadcnDrawerCloseProps,
  ShadcnDrawerContentProps,
  ShadcnDrawerDescriptionProps,
  ShadcnDrawerFooterProps,
  ShadcnDrawerHeaderProps,
  ShadcnDrawerProps,
  ShadcnDrawerTitleProps,
  ShadcnDrawerTriggerProps,
}
