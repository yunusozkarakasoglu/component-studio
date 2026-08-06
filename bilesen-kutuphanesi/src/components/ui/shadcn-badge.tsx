/**
 * ShadcnBadge
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Rozet — durum/etiket göstergesi.
 *   <ShadcnBadge variant="secondary">Secondary</ShadcnBadge>
 * variant: default | secondary | destructive | outline | ghost
 * @id 774
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost"
}

const badgeVariants: Record<string, string> = {
  default: "border-transparent bg-blue-600 text-white",
  secondary: "border-transparent bg-muted text-foreground",
  destructive: "border-transparent bg-red-600 text-white",
  outline: "border-border bg-background text-foreground",
  ghost: "border-transparent bg-transparent text-muted-foreground",
}

function ShadcnBadge({ className, variant = "default", ...props }: ShadcnBadgeProps) {
  return (
    <span
      data-slot="shadcn-badge"
      data-variant={variant}
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap",
        "data-[icon=inline-start]:[&_svg]:mr-1 data-[icon=inline-end]:[&_svg]:ml-1",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { ShadcnBadge }
export type { ShadcnBadgeProps }
