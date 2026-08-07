/**
 * ShadcnAlert familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Uyarı bildirimi — Alert + Title + Description + Action (variant).
 *   <ShadcnAlert variant="destructive">
 *     <ShadcnAlertTitle>Payment failed</ShadcnAlertTitle>
 *     <ShadcnAlertDescription>…</ShadcnAlertDescription>
 *     <ShadcnAlertAction>…</ShadcnAlertAction>
 *   </ShadcnAlert>
 * variant: default | destructive.
 * @id 870
 * @category Alert & Dialog
 * @subcategory ShadcnAlert
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}

function ShadcnAlert({ className, variant = "default", ...props }: ShadcnAlertProps) {
  return (
    <div
      role="alert"
      data-slot="shadcn-alert"
      data-variant={variant}
      className={cn(
        "relative flex w-full flex-col gap-1 rounded-lg border p-4 text-sm",
        variant === "default" && "border-border bg-muted/40 text-foreground",
        variant === "destructive" && "border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnAlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnAlertTitle({ className, ...props }: ShadcnAlertTitleProps) {
  return <h5 data-slot="shadcn-alert-title" className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
}

interface ShadcnAlertDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAlertDescription({ className, ...props }: ShadcnAlertDescriptionProps) {
  return <div data-slot="shadcn-alert-description" className={cn("text-sm opacity-90", className)} {...props} />
}

interface ShadcnAlertActionProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAlertAction({ className, ...props }: ShadcnAlertActionProps) {
  return <div data-slot="shadcn-alert-action" className={cn("mt-1", className)} {...props} />
}

export { ShadcnAlert, ShadcnAlertAction, ShadcnAlertDescription, ShadcnAlertTitle }
export type { ShadcnAlertActionProps, ShadcnAlertDescriptionProps, ShadcnAlertProps, ShadcnAlertTitleProps }
