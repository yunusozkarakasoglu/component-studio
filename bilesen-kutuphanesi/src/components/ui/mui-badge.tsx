/**
 * MuiBadge
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Rozet — köşede küçük sayaç/durum göstergesi.
 *   <MuiBadge badgeContent={5}><Bell /></MuiBadge>
 * badgeContent: sayı/öğe · color · max (sayı üst sınırı) · invisible
 * variant: standard | dot (nokta) · anchorOrigin
 * @id 2010
 * @category Veri Gösterimi
 * @subcategory MuiBadge
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiBadgeProps {
  badgeContent?: ReactNode
  max?: number
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "default"
  variant?: "standard" | "dot"
  invisible?: boolean
  className?: string
  children?: ReactNode
}

const COLOR: Record<string, string> = {
  primary: "bg-blue-600",
  secondary: "bg-purple-600",
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-amber-500",
  info: "bg-sky-600",
  default: "bg-gray-600",
}

function MuiBadge({
  badgeContent,
  max = 99,
  color = "primary",
  variant = "standard",
  invisible = false,
  className,
  children,
}: MuiBadgeProps) {
  const content = typeof badgeContent === "number" && badgeContent > max ? `${max}+` : badgeContent
  return (
    <span className={cn("relative inline-flex", className)}>
      {children}
      {!invisible && (
        <span
          className={cn(
            "absolute -right-1.5 -top-1.5 z-10 flex items-center justify-center rounded-full text-white",
            variant === "dot" ? "size-3" : "min-w-4 px-1 text-[10px] font-semibold",
            COLOR[color]
          )}
        >
          {variant === "dot" ? null : content}
        </span>
      )}
    </span>
  )
}

export { MuiBadge }
export type { MuiBadgeProps }
