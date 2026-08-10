/**
 * MuiAlert
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Uyarı bildirimi — duruma göre renkli bilgi kutusu.
 *   <MuiAlert severity="success">İşlem başarılı</MuiAlert>
 * severity: success | info | warning | error
 * variant: standard (varsayılan) | filled | outlined
 * action: sağda özel aksiyon (ör. kapatma butonu) · icon: özel ikon
 * @id 1917
 * @category Alert & Dialog
 * @subcategory MuiAlert
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, Info, AlertTriangle, AlertOctagon, X } from "@/components/ui/icons"

interface MuiAlertProps {
  severity?: "success" | "info" | "warning" | "error"
  variant?: "standard" | "filled" | "outlined"
  action?: ReactNode
  icon?: ReactNode
  onClose?: () => void
  className?: string
  children?: ReactNode
}

const SEVERITY: Record<string, { icon: ReactNode; standard: string; filled: string; outlined: string }> = {
  success: {
    icon: <CheckCircle className="size-5" />,
    standard: "bg-green-50 text-green-900",
    filled: "bg-green-600 text-white",
    outlined: "border border-green-400 bg-green-50 text-green-900",
  },
  info: {
    icon: <Info className="size-5" />,
    standard: "bg-sky-50 text-sky-900",
    filled: "bg-sky-600 text-white",
    outlined: "border border-sky-400 bg-sky-50 text-sky-900",
  },
  warning: {
    icon: <AlertTriangle className="size-5" />,
    standard: "bg-amber-50 text-amber-900",
    filled: "bg-amber-600 text-white",
    outlined: "border border-amber-400 bg-amber-50 text-amber-900",
  },
  error: {
    icon: <AlertOctagon className="size-5" />,
    standard: "bg-red-50 text-red-900",
    filled: "bg-red-600 text-white",
    outlined: "border border-red-400 bg-red-50 text-red-900",
  },
}

function MuiAlert({
  severity = "success",
  variant = "standard",
  action,
  icon,
  onClose,
  className,
  children,
}: MuiAlertProps) {
  const s = SEVERITY[severity]
  const bg = variant === "filled" ? s.filled : variant === "outlined" ? s.outlined : s.standard
  return (
    <div role="alert" className={cn("flex w-full items-start gap-2 rounded-lg px-4 py-3 text-sm", bg, className)}>
      <span aria-hidden className="mt-0.5 shrink-0">{icon ?? s.icon}</span>
      <div className="flex-1">{children}</div>
      {action}
      {onClose && (
        <button
          type="button"
          aria-label="Kapat"
          onClick={onClose}
          className="shrink-0 rounded p-0.5 opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

export { MuiAlert }
export type { MuiAlertProps }
