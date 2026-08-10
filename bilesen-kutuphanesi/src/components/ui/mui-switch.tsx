/**
 * MuiSwitch
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Açma/kapama anahtarı — slide thumb animasyonu.
 *   <MuiSwitch checked onChange={h} />
 * color: primary | secondary | success | error | warning · size: small/medium
 * defaultChecked · disabled
 * @id 1941
 * @category Seçim
 * @subcategory MuiSwitch
 * @source mui
 */
import { type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color"> {
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "default"
  size?: "small" | "medium"
}

const SIZE: Record<string, { w: string; h: string; thumb: string }> = {
  small: { w: "w-9", h: "h-5", thumb: "size-3.5" },
  medium: { w: "w-11", h: "h-6", thumb: "size-4.5" },
}

const COLOR: Record<string, string> = {
  primary: "peer-checked:bg-blue-600",
  secondary: "peer-checked:bg-purple-600",
  success: "peer-checked:bg-green-600",
  error: "peer-checked:bg-red-600",
  warning: "peer-checked:bg-amber-600",
  info: "peer-checked:bg-sky-600",
  default: "peer-checked:bg-gray-700",
}

function MuiSwitch({ color = "primary", size = "medium", className, ...rest }: MuiSwitchProps) {
  const s = SIZE[size]
  return (
    <label className={cn("inline-flex cursor-pointer select-none items-center", rest.disabled && "cursor-not-allowed opacity-50", className)}>
      <input type="checkbox" role="switch" className="peer sr-only" {...rest} />
      <span
        aria-hidden
        className={cn(
          "relative inline-flex rounded-full bg-gray-300 transition-colors peer-checked:" + " " + (COLOR[color] ?? COLOR.primary),
          s.w,
          s.h
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow transition-transform peer-checked:translate-x-[calc(100%+2px)]",
            s.thumb
          )}
          style={{ transform: "translateY(-50%)" }}
        />
      </span>
    </label>
  )
}

export { MuiSwitch }
export type { MuiSwitchProps }
