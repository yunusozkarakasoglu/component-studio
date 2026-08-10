/**
 * MuiButtonGroup
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Buton grubu — birleşik kenarlıklı butonlar.
 *   <MuiButtonGroup variant="contained" aria-label="…">…</MuiButtonGroup>
 * variant: text | contained | outlined · orientation: row/column
 * size: small/medium/large · fullWidth · disabled
 * @id 1909
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButtonGroup
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiButtonGroupProps {
  variant?: "text" | "contained" | "outlined"
  orientation?: "row" | "column"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  disabled?: boolean
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "inherit"
  ariaLabel?: string
  className?: string
  children?: ReactNode
}

const GROUP_VARIANT: Record<string, string> = {
  contained: "border border-gray-300",
  outlined: "border border-gray-300",
  text: "",
}

function MuiButtonGroup({
  variant = "contained",
  orientation = "row",
  size = "medium",
  fullWidth = false,
  disabled = false,
  color = "primary",
  ariaLabel,
  className,
  children,
}: MuiButtonGroupProps) {
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
      {Array.isArray(children)
        ? children.filter(Boolean).map((kid, i) => {
            if (!kid || typeof kid !== "object" || !("props" in kid)) return kid
            const k = kid as { props: { variant?: string; color?: string; size?: string; className?: string; children?: ReactNode } }
            return (
              <span
                key={i}
                className={cn(
                  "first:rounded-l-md last:rounded-r-md",
                  orientation === "column" && "first:rounded-t-md last:rounded-b-md",
                  "-ml-px first:ml-0",
                  GROUP_VARIANT[variant],
                  "not-first:border-l-0",
                  "not-last:border-r"
                )}
              >
                <MuiButton
                  variant={variant}
                  color={color}
                  size={size}
                  disabled={disabled}
                  fullWidth
                  className="!rounded-none !border-0"
                >
                  {(k.props as { children?: ReactNode }).children}
                </MuiButton>
              </span>
            )
          })
        : children}
    </div>
  )
}

export { MuiButtonGroup }
export type { MuiButtonGroupProps }
