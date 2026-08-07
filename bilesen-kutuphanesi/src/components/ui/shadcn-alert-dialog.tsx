/**
 * ShadcnAlertDialog familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Onay diyaloğu — AlertDialog + Trigger + Content (size) + Media +
 * Header/Title/Description + Footer + Cancel/Action.
 *   <ShadcnAlertDialog>
 *     <ShadcnAlertDialogTrigger>Show Dialog</ShadcnAlertDialogTrigger>
 *     <ShadcnAlertDialogContent>
 *       <ShadcnAlertDialogHeader>
 *         <ShadcnAlertDialogTitle>Are you sure?</ShadcnAlertDialogTitle>
 *         <ShadcnAlertDialogDescription>…</ShadcnAlertDialogDescription>
 *       </ShadcnAlertDialogHeader>
 *       <ShadcnAlertDialogFooter>
 *         <ShadcnAlertDialogCancel>Cancel</ShadcnAlertDialogCancel>
 *         <ShadcnAlertDialogAction>Continue</ShadcnAlertDialogAction>
 *       </ShadcnAlertDialogFooter>
 *     </ShadcnAlertDialogContent>
 *   </ShadcnAlertDialog>
 * @id 877
 * @category Alert & Dialog
 * @subcategory ShadcnAlertDialog
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface AlertDialogContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null)

function useShadcnAlertDialog(): AlertDialogContextValue {
  const ctx = useContext(AlertDialogContext)
  if (!ctx) throw new Error("ShadcnAlertDialog parçaları, ShadcnAlertDialog içinde kullanılmalı")
  return ctx
}

interface ShadcnAlertDialogProps {
  children?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function ShadcnAlertDialog({ children, open, defaultOpen, onOpenChange }: ShadcnAlertDialogProps) {
  const [internal, setInternal] = useState(!!defaultOpen)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => {
    if (open === undefined) setInternal(v)
    onOpenChange?.(v)
  }
  return <AlertDialogContext.Provider value={{ open: isOpen, setOpen }}>{children}</AlertDialogContext.Provider>
}

interface ShadcnAlertDialogTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnAlertDialogTrigger({ className, children, onClick, ...props }: ShadcnAlertDialogTriggerProps) {
  const ctx = useShadcnAlertDialog()
  return (
    <button
      type="button"
      data-slot="shadcn-alert-dialog-trigger"
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

interface ShadcnAlertDialogContentProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm"
  showCloseButton?: boolean
}

function ShadcnAlertDialogContent({ className, size = "default", showCloseButton = true, children, ...props }: ShadcnAlertDialogContentProps) {
  const ctx = useShadcnAlertDialog()
  if (!ctx.open) return null

  return (
    <div data-slot="shadcn-alert-dialog" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => ctx.setOpen(false)} />
      <div
        role="alertdialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full rounded-xl border border-border bg-background p-6 text-foreground shadow-lg",
          size === "default" ? "max-w-lg" : "max-w-sm",
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

interface ShadcnAlertDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAlertDialogHeader({ className, ...props }: ShadcnAlertDialogHeaderProps) {
  return <div data-slot="shadcn-alert-dialog-header" className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />
}

interface ShadcnAlertDialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnAlertDialogTitle({ className, ...props }: ShadcnAlertDialogTitleProps) {
  return <h2 data-slot="shadcn-alert-dialog-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />
}

interface ShadcnAlertDialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnAlertDialogDescription({ className, ...props }: ShadcnAlertDialogDescriptionProps) {
  return <p data-slot="shadcn-alert-dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnAlertDialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAlertDialogFooter({ className, ...props }: ShadcnAlertDialogFooterProps) {
  return <div data-slot="shadcn-alert-dialog-footer" className={cn("mt-4 flex justify-end gap-2", className)} {...props} />
}

interface ShadcnAlertDialogCancelProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnAlertDialogCancel({ className, children, onClick, ...props }: ShadcnAlertDialogCancelProps) {
  const ctx = useShadcnAlertDialog()
  return (
    <button
      type="button"
      data-slot="shadcn-alert-dialog-cancel"
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

interface ShadcnAlertDialogActionProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnAlertDialogAction({ className, children, onClick, ...props }: ShadcnAlertDialogActionProps) {
  const ctx = useShadcnAlertDialog()
  return (
    <button
      type="button"
      data-slot="shadcn-alert-dialog-action"
      onClick={(e) => {
        ctx.setOpen(false)
        onClick?.(e)
      }}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 text-sm font-medium text-white transition-colors outline-none",
        "hover:bg-red-700 focus-visible:ring-3 focus-visible:ring-red-500/40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnAlertDialogMediaProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAlertDialogMedia({ className, ...props }: ShadcnAlertDialogMediaProps) {
  return <div data-slot="shadcn-alert-dialog-media" className={cn("mb-4 flex size-10 items-center justify-center rounded-full bg-muted", className)} {...props} />
}

export {
  ShadcnAlertDialog,
  ShadcnAlertDialogAction,
  ShadcnAlertDialogCancel,
  ShadcnAlertDialogContent,
  ShadcnAlertDialogDescription,
  ShadcnAlertDialogFooter,
  ShadcnAlertDialogHeader,
  ShadcnAlertDialogMedia,
  ShadcnAlertDialogTitle,
  ShadcnAlertDialogTrigger,
}
export type {
  ShadcnAlertDialogActionProps,
  ShadcnAlertDialogCancelProps,
  ShadcnAlertDialogContentProps,
  ShadcnAlertDialogDescriptionProps,
  ShadcnAlertDialogFooterProps,
  ShadcnAlertDialogHeaderProps,
  ShadcnAlertDialogMediaProps,
  ShadcnAlertDialogProps,
  ShadcnAlertDialogTitleProps,
  ShadcnAlertDialogTriggerProps,
}
