/**
 * Alert
 * Saf React bileşen (bağımlılıksız).
 * Status: default · accent · success · warning · danger.
 * Compound: <Alert><AlertIndicator /><AlertContent><AlertTitle/><AlertDescription/></AlertContent></Alert>
 * @id 116
 * @category Alert & Dialog
 */
import { createContext, useContext, type ComponentType, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle, CheckCircle, Info, OctagonX } from "@/components/ui/icons"

type AlertStatus = "default" | "accent" | "success" | "warning" | "danger"

interface AlertProps {
  status?: AlertStatus
  className?: string
  children?: ReactNode
}

const alertStatusClass: Record<AlertStatus, string> = {
  default: "border-border bg-muted/50 text-foreground",
  accent: "border-blue-200 bg-blue-50 text-blue-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  danger: "border-red-200 bg-red-50 text-red-900",
}

const alertStatusIcon: Record<AlertStatus, ComponentType<{ className?: string }>> = {
  default: Info,
  accent: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: OctagonX,
}

const AlertContext = createContext<AlertStatus>("default")

function Alert({ status = "default", className, children }: AlertProps) {
  return (
    <AlertContext.Provider value={status}>
      <div
        data-slot="alert"
        data-status={status}
        role="alert"
        className={cn("relative flex w-full gap-2.5 rounded-lg border p-3", alertStatusClass[status], className)}
      >
        {children}
      </div>
    </AlertContext.Provider>
  )
}

interface AlertIndicatorProps {
  /** Status ikonu yerine özel içerik (örn. Spinner) */
  children?: ReactNode
  className?: string
}

function AlertIndicator({ children, className }: AlertIndicatorProps) {
  const status = useContext(AlertContext)
  const Icon = alertStatusIcon[status]
  return (
    <span data-slot="alert-indicator" className={cn("shrink-0 pt-0.5", className)}>
      {children ?? <Icon className="size-4" aria-hidden="true" />}
    </span>
  )
}

interface AlertContentProps {
  className?: string
  children?: ReactNode
}

function AlertContent({ className, children }: AlertContentProps) {
  return <div data-slot="alert-content" className={cn("min-w-0 flex-1 space-y-1", className)}>{children}</div>
}

function AlertTitle({ className, children }: AlertContentProps) {
  return <div data-slot="alert-title" className={cn("text-sm font-medium", className)}>{children}</div>
}

function AlertDescription({ className, children }: AlertContentProps) {
  return <div data-slot="alert-description" className={cn("text-sm opacity-80", className)}>{children}</div>
}

export { Alert, AlertDescription, AlertContent, AlertIndicator, AlertTitle }
export type { AlertProps, AlertStatus }
