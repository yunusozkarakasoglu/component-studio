/**
 * MtActionIcon
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İkon butonu — kare, size (xs-xl), variant, loading.
 *   <MtActionIcon size="lg" aria-label="Settings"><Icon /></MtActionIcon>
 * @id 1075
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtActionIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "default" | "light" | "outline" | "transparent"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  loading?: boolean
}

const sizes: Record<string, string> = {
  xs: "size-4",
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
  xl: "size-12",
}

const iconVariants: Record<string, string> = {
  filled: "bg-blue-600 text-white hover:bg-blue-700",
  default: "border border-border bg-background text-foreground hover:bg-muted",
  light: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  transparent: "text-foreground hover:bg-muted",
}

function MtActionIcon({
  className,
  variant = "filled",
  size = "md",
  loading,
  disabled,
  children,
  ...props
}: MtActionIconProps) {
  return (
    <button
      type="button"
      data-slot="mt-action-icon"
      disabled={disabled || loading}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/40",
        "disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        iconVariants[variant],
        className
      )}
      {...props}
    >
      {loading ? <span className="size-1/2 animate-spin rounded-full border-2 border-current border-t-transparent" /> : children}
    </button>
  )
}

export { MtActionIcon }
export type { MtActionIconProps }
