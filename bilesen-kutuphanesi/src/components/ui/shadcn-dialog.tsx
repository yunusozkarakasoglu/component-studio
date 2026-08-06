/**
 * ShadcnDialog familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Dialog + Trigger + Content + Header/Title/Description + Footer + Close.
 *   <ShadcnDialog>
 *     <ShadcnDialogTrigger>Open Dialog</ShadcnDialogTrigger>
 *     <ShadcnDialogContent>
 *       <ShadcnDialogHeader>
 *         <ShadcnDialogTitle>…</ShadcnDialogTitle>
 *         <ShadcnDialogDescription>…</ShadcnDialogDescription>
 *       </ShadcnDialogHeader>
 *     </ShadcnDialogContent>
 *   </ShadcnDialog>
 * Özellikler: open/onOpenChange (kontrollü) · showCloseButton.
 * @id 782
 * @category Overlay
 * @subcategory ShadcnDialog
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface DialogContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

function useShadcnDialog(): DialogContextValue {
  const ctx = useContext(DialogContext)
  if (!ctx) throw new Error("ShadcnDialog parçaları, ShadcnDialog içinde kullanılmalı")
  return ctx
}

interface ShadcnDialogProps {
  children?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function ShadcnDialog({ children, open, defaultOpen, onOpenChange }: ShadcnDialogProps) {
  const [internal, setInternal] = useState(!!defaultOpen)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => {
    if (open === undefined) setInternal(v)
    onOpenChange?.(v)
  }
  return <DialogContext.Provider value={{ open: isOpen, setOpen }}>{children}</DialogContext.Provider>
}

interface ShadcnDialogTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnDialogTrigger({ className, children, onClick, ...props }: ShadcnDialogTriggerProps) {
  const ctx = useShadcnDialog()
  return (
    <button
      type="button"
      data-slot="shadcn-dialog-trigger"
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

interface ShadcnDialogContentProps extends HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean
}

function ShadcnDialogContent({ className, showCloseButton = true, children, ...props }: ShadcnDialogContentProps) {
  const ctx = useShadcnDialog()
  if (!ctx.open) return null

  return (
    <div data-slot="shadcn-dialog" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => ctx.setOpen(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-lg rounded-xl border border-border bg-background p-6 text-foreground shadow-lg",
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

interface ShadcnDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnDialogHeader({ className, ...props }: ShadcnDialogHeaderProps) {
  return <div data-slot="shadcn-dialog-header" className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />
}

interface ShadcnDialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnDialogTitle({ className, ...props }: ShadcnDialogTitleProps) {
  return <h2 data-slot="shadcn-dialog-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />
}

interface ShadcnDialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnDialogDescription({ className, ...props }: ShadcnDialogDescriptionProps) {
  return <p data-slot="shadcn-dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnDialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnDialogFooter({ className, ...props }: ShadcnDialogFooterProps) {
  return <div data-slot="shadcn-dialog-footer" className={cn("mt-4 flex justify-end gap-2", className)} {...props} />
}

interface ShadcnDialogCloseProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnDialogClose({ className, children, onClick, ...props }: ShadcnDialogCloseProps) {
  const ctx = useShadcnDialog()
  return (
    <button
      type="button"
      data-slot="shadcn-dialog-close"
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
  ShadcnDialog,
  ShadcnDialogClose,
  ShadcnDialogContent,
  ShadcnDialogDescription,
  ShadcnDialogFooter,
  ShadcnDialogHeader,
  ShadcnDialogTitle,
  ShadcnDialogTrigger,
}
export type {
  ShadcnDialogCloseProps,
  ShadcnDialogContentProps,
  ShadcnDialogDescriptionProps,
  ShadcnDialogFooterProps,
  ShadcnDialogHeaderProps,
  ShadcnDialogProps,
  ShadcnDialogTitleProps,
  ShadcnDialogTriggerProps,
}
