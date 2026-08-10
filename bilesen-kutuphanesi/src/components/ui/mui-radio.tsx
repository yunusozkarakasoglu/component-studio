/**
 * MuiRadio
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Radyo butonu — tek seçim, grup içinde kullanılır.
 *   <MuiRadio checked onChange={h} />
 * color: primary | secondary | success | error · size: small/medium
 * @id 1946
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color"> {
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "default"
  size?: "small" | "medium"
}

const SIZE: Record<string, string> = {
  small: "size-4",
  medium: "size-5",
}

const COLOR: Record<string, string> = {
  primary: "border-blue-600 text-blue-600",
  secondary: "border-purple-600 text-purple-600",
  success: "border-green-600 text-green-600",
  error: "border-red-600 text-red-600",
  warning: "border-amber-600 text-amber-600",
  info: "border-sky-600 text-sky-600",
  default: "border-gray-700 text-gray-700",
}

function MuiRadio({ color = "primary", size = "medium", className, checked, defaultChecked, children, ...rest }: MuiRadioProps) {
  const active = checked ?? defaultChecked ?? false
  return (
    <label className={cn("inline-flex cursor-pointer select-none items-center gap-2", rest.disabled && "cursor-not-allowed opacity-50", className)}>
      <input type="radio" className="peer sr-only" checked={checked} defaultChecked={defaultChecked} {...rest} />
      <span
        aria-hidden
        className={cn(
          "flex items-center justify-center rounded-full border-2 bg-white transition-colors",
          SIZE[size],
          active ? COLOR[color] : "border-gray-400"
        )}
      >
        <span className={cn("rounded-full bg-current", size === "small" ? "size-2" : "size-2.5", active ? "opacity-100" : "opacity-0")} />
      </span>
      {children && <span className="text-sm text-gray-800">{children}</span>}
    </label>
  )
}

export { MuiRadio }
export type { MuiRadioProps }
