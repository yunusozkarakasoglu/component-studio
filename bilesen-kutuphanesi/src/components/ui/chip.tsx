/**
 * Chip
 * HeroUI chip'ten uyarlanmış — saf React (bağımlılıksız).
 * Küçük bilgi rozetleri: color × variant × size.
 *   <Chip color="success" variant="soft"><Check /> <ChipLabel>Active</ChipLabel></Chip>
 * @id 221
 * @category Butonlar & Aksiyonlar
 * @subcategory Chips
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ChipColor = "default" | "accent" | "success" | "warning" | "danger"
type ChipVariant = "primary" | "secondary" | "tertiary" | "soft"

const chipSizeClass: Record<string, string> = {
  sm: "h-5 px-2 text-[11px] gap-1",
  md: "h-6 px-2.5 text-xs gap-1",
  lg: "h-7 px-3 text-sm gap-1.5",
}

const chipVariantColor: Record<ChipVariant, Record<ChipColor, string>> = {
  primary: {
    default: "bg-muted text-foreground",
    accent: "bg-blue-600 text-white",
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-600 text-white",
    danger: "bg-red-600 text-white",
  },
  secondary: {
    default: "border border-border bg-muted/40 text-foreground",
    accent: "border border-blue-200 bg-blue-50 text-blue-700",
    success: "border border-emerald-200 bg-emerald-50 text-emerald-700",
    warning: "border border-amber-200 bg-amber-50 text-amber-700",
    danger: "border border-red-200 bg-red-50 text-red-700",
  },
  tertiary: {
    default: "text-muted-foreground",
    accent: "text-blue-700",
    success: "text-emerald-700",
    warning: "text-amber-700",
    danger: "text-red-700",
  },
  soft: {
    default: "bg-muted/50 text-foreground",
    accent: "bg-blue-100 text-blue-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-red-100 text-red-700",
  },
}

interface ChipProps {
  color?: ChipColor
  variant?: ChipVariant
  size?: "sm" | "md" | "lg"
  className?: string
  children?: ReactNode
}

function Chip({ color = "default", variant = "secondary", size = "md", className, children }: ChipProps) {
  return (
    <span
      data-slot="chip"
      data-color={color}
      data-variant={variant}
      data-size={size}
      className={cn(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        chipSizeClass[size],
        chipVariantColor[variant][color],
        className
      )}
    >
      {children}
    </span>
  )
}

function ChipLabel({ className, children }: { className?: string; children?: ReactNode }) {
  return <span data-slot="chip-label" className={cn("leading-none", className)}>{children}</span>
}

export { Chip, ChipLabel }
export type { ChipColor, ChipProps, ChipVariant }
