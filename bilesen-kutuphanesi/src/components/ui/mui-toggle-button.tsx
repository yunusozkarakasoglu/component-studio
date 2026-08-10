/**
 * MuiToggleButton
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Seçim butonu — bir grubun üyesi, seçili/boş durumu.
 *   <MuiToggleButton value="left" selected={true}>…</MuiToggleButton>
 * MuiToggleButtonGroup içinde kullanılır (value + onChange).
 * color: standard | primary | secondary · size: small/medium/large
 * fullWidth · disabled
 * @id 1904
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiToggleButton
 * @source mui
 */
import { type ButtonHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiToggleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value: string | number
  selected?: boolean
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  color?: "standard" | "primary" | "secondary"
}

const SIZE: Record<string, string> = {
  small: "px-3 py-1 text-xs",
  medium: "px-4 py-1.5 text-sm",
  large: "px-5 py-2 text-base",
}

function MuiToggleButton({
  value,
  selected = false,
  size = "medium",
  fullWidth = false,
  color = "standard",
  className,
  children,
  type = "button",
  ...rest
}: MuiToggleButtonProps) {
  return (
    <button
      type={type}
      value={String(value)}
      aria-pressed={selected}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 border border-gray-300 bg-white font-medium transition-colors",
        "-ml-px first:ml-0 first:rounded-l-md last:rounded-r-md focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40",
        SIZE[size],
        fullWidth && "flex-1",
        selected
          ? color === "primary"
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : color === "secondary"
              ? "border-purple-600 bg-purple-50 text-purple-700"
              : "border-gray-500 bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export { MuiToggleButton }
export type { MuiToggleButtonProps }
