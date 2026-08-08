/**
 * MtAlert
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Uyarı — title, color, variant, icon, withCloseButton.
 *   <MtAlert title="Dikkat" color="red" icon={<AlertIcon/>}>…</MtAlert>
 * @id 1511
 * @category Alert & Dialog
 * @subcategory MtAlert
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtAlertProps {
  title?: ReactNode
  color?: string
  variant?: "light" | "filled" | "outline" | "transparent"
  icon?: ReactNode
  withCloseButton?: boolean
  onClose?: () => void
  children?: ReactNode
  className?: string
}

const lightBg: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-800", red: "border-red-200 bg-red-50 text-red-800",
  green: "border-green-200 bg-green-50 text-green-800", yellow: "border-yellow-200 bg-yellow-50 text-yellow-800",
  teal: "border-teal-200 bg-teal-50 text-teal-800", gray: "border-gray-200 bg-gray-50 text-gray-800",
}
const filledBg: Record<string, string> = {
  blue: "border-blue-600 bg-blue-600 text-white", red: "border-red-600 bg-red-600 text-white",
  green: "border-green-600 bg-green-600 text-white", yellow: "border-yellow-500 bg-yellow-500 text-white",
  teal: "border-teal-600 bg-teal-600 text-white", gray: "border-gray-600 bg-gray-600 text-white",
}
const lightIcon: Record<string, string> = {
  blue: "text-blue-600", red: "text-red-600", green: "text-green-600", yellow: "text-yellow-600",
  teal: "text-teal-600", gray: "text-gray-600",
}

function MtAlert({ title, color = "blue", variant = "light", icon, withCloseButton, onClose, children, className }: MtAlertProps) {
  const [closed, setClosed] = useState(false)
  if (closed) return null

  const bg = variant === "filled" ? filledBg[color] ?? filledBg.blue : variant === "outline" ? "border border-gray-300 bg-background text-foreground" : variant === "transparent" ? "text-foreground" : lightBg[color] ?? lightBg.blue

  return (
    <div data-slot="mt-alert" className={cn("flex items-start gap-3 rounded-lg border px-4 py-3 text-sm", bg, className)} role="alert">
      {icon && <span className={cn("mt-0.5 shrink-0", variant === "filled" ? "text-white" : lightIcon[color] ?? lightIcon.blue)}>{icon}</span>}
      <div className="min-w-0 flex-1">
        {title && <p className="mb-0.5 font-semibold">{title}</p>}
        <div className="opacity-90">{children}</div>
      </div>
      {withCloseButton && (
        <button type="button" aria-label="Close" onClick={() => { setClosed(true); onClose?.() }} className="cursor-pointer rounded p-0.5 opacity-70 transition-opacity hover:opacity-100">
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

export { MtAlert }
export type { MtAlertProps }
