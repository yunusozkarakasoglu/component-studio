/**
 * MuiToggleButtonGroup
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Buton grubu — tekli (exclusive) veya çoklu seçim.
 *   <MuiToggleButtonGroup value={v} exclusive onChange={h} aria-label="…">…</MuiToggleButtonGroup>
 * exclusive: tek seçim (radio davranışı) · orientation: row/column
 * color: standard/primary/secondary · size · fullWidth
 * @id 1905
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiToggleButton
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiToggleButtonGroupProps {
  value?: string | string[] | number | null
  exclusive?: boolean
  onChange?: (value: string | null) => void
  orientation?: "row" | "column"
  color?: "standard" | "primary" | "secondary"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  ariaLabel?: string
  className?: string
  children?: ReactNode
}

function MuiToggleButtonGroup({
  value,
  exclusive = false,
  onChange,
  orientation = "row",
  color = "standard",
  size = "medium",
  fullWidth = false,
  ariaLabel,
  className,
  children,
}: MuiToggleButtonGroupProps) {
  // Çocuk butonlara selected/onClick inject et
  const kids = Array.isArray(children) ? children : [children]
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex",
        orientation === "column" ? "flex-col" : "flex-row",
        fullWidth && "w-full",
        className
      )}
    >
      {kids.filter(Boolean).map((kid, i) => {
        if (!kid || typeof kid !== "object" || !("props" in kid)) return kid
        const k = kid as { props: { value?: string | number; selected?: boolean; onClick?: () => void; size?: string } }
        const v = String(k.props.value ?? "")
        const selected = exclusive
          ? value === v
          : Array.isArray(value) && value.includes(v)
        return (
          <MuiToggleButton
            key={i}
            value={v}
            selected={selected}
            size={size}
            color={color}
            fullWidth={fullWidth}
            onClick={() => onChange?.(v)}
          >
            {(k.props as { children?: ReactNode }).children}
          </MuiToggleButton>
        )
      })}
    </div>
  )
}

export { MuiToggleButtonGroup }
export type { MuiToggleButtonGroupProps }
