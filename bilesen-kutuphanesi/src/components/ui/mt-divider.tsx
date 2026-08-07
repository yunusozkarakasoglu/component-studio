/**
 * MtDivider
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Ayraç — yatay/dikey, etiketli, varyantlar (solid/dashed/dotted), boyutlar.
 *   <MtDivider label="Label" labelPosition="center" />
 * @id 1028
 * @category Genel
 * @subcategory MtDivider
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtDividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  label?: ReactNode
  labelPosition?: "left" | "center" | "right"
  variant?: "solid" | "dashed" | "dotted"
  size?: string | number
}

const borderStyles: Record<string, string> = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
}

function MtDivider({
  className,
  orientation = "horizontal",
  label,
  labelPosition = "left",
  variant = "solid",
  size,
  style,
  ...props
}: MtDividerProps) {
  const borderWidth = typeof size === "number" ? size : size === "xs" ? 1 : size === "sm" ? 2 : size === "md" ? 3 : size === "lg" ? 4 : size === "xl" ? 5 : 1

  if (label) {
    return (
      <div
        data-slot="mt-divider"
        className={cn("flex w-full items-center gap-3 text-muted-foreground", className)}
        style={style}
        {...props}
      >
        {labelPosition === "right" && <span className="flex-1 border-t" style={{ borderTopWidth: borderWidth, borderStyle: variant }} />}
        {labelPosition === "center" && <span className="flex-1 border-t" style={{ borderTopWidth: borderWidth, borderStyle: variant }} />}
        <span className="flex items-center gap-1 text-sm whitespace-nowrap">{label}</span>
        {labelPosition !== "right" && <span className="flex-1 border-t" style={{ borderTopWidth: borderWidth, borderStyle: variant }} />}
      </div>
    )
  }

  if (orientation === "vertical") {
    return (
      <div
        data-slot="mt-divider"
        className={cn("w-px self-stretch", borderStyles[variant], className)}
        style={{ borderLeftWidth: borderWidth, borderLeftStyle: variant, borderColor: "var(--color-border)", ...style }}
        {...props}
      />
    )
  }

  return (
    <div
      data-slot="mt-divider"
      className={cn("w-full", borderStyles[variant], className)}
      style={{ borderTopWidth: borderWidth, borderTopStyle: variant, borderColor: "var(--color-border)", ...style }}
      {...props}
    />
  )
}

export { MtDivider }
export type { MtDividerProps }
