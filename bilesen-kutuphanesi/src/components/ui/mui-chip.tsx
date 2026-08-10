/**
 * MuiChip
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Etiket/çip — küçük bilgi parçası, silinebilir/tıklanabilir.
 *   <MuiChip label="Etiket" onDelete={h} />
 * variant: filled (varsayılan) | outlined · color · size: small/medium
 * avatar/icon: solda · onDelete: silme (x) · onClick: tıklama
 * @id 1964
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MuiChipProps {
  label?: ReactNode
  variant?: "filled" | "outlined"
  color?: "default" | "primary" | "secondary" | "success" | "error" | "warning" | "info"
  size?: "small" | "medium"
  avatar?: ReactNode
  icon?: ReactNode
  onDelete?: () => void
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const FILLED: Record<string, string> = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-blue-600 text-white",
  secondary: "bg-purple-600 text-white",
  success: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
  warning: "bg-amber-600 text-white",
  info: "bg-sky-600 text-white",
}

const OUTLINED: Record<string, string> = {
  default: "border border-gray-400 text-gray-800",
  primary: "border border-blue-500 text-blue-700",
  secondary: "border border-purple-500 text-purple-700",
  success: "border border-green-500 text-green-700",
  error: "border border-red-500 text-red-700",
  warning: "border border-amber-500 text-amber-800",
  info: "border border-sky-500 text-sky-700",
}

function MuiChip({
  label = "Çip",
  variant = "filled",
  color = "default",
  size = "medium",
  avatar,
  icon,
  onDelete,
  onClick,
  disabled = false,
  className,
}: MuiChipProps) {
  const colorCls = variant === "outlined" ? OUTLINED[color] : FILLED[color]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium transition-colors",
        size === "small" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        colorCls,
        onClick && !disabled && "cursor-pointer hover:opacity-80",
        disabled && "opacity-50",
        className
      )}
      onClick={disabled ? undefined : onClick}
    >
      {avatar && <span className="shrink-0">{avatar}</span>}
      {icon && !avatar && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <button
          type="button"
          aria-label="Kaldır"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="ml-0.5 shrink-0 cursor-pointer rounded-full opacity-70 transition-opacity hover:opacity-100"
        >
          <X className={size === "small" ? "size-3" : "size-3.5"} />
        </button>
      )}
    </span>
  )
}

export { MuiChip }
export type { MuiChipProps }
