/**
 * MuiCheckbox
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Onay kutusu — checked/indeterminate/disabled durumları.
 *   <MuiCheckbox checked onChange={h} />
 * color: primary | secondary | success | error | warning | info · size: small/medium
 * indeterminate: yarım işaretli (üç durumlu liste)
 * @id 1936
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { useRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Check, Minus } from "@/components/ui/icons"

interface MuiCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color"> {
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "default"
  size?: "small" | "medium"
  indeterminate?: boolean
}

const SIZE: Record<string, string> = {
  small: "size-4",
  medium: "size-5",
}

const CHECKED_COLOR: Record<string, string> = {
  primary: "border-blue-600 bg-blue-600",
  secondary: "border-purple-600 bg-purple-600",
  success: "border-green-600 bg-green-600",
  error: "border-red-600 bg-red-600",
  warning: "border-amber-600 bg-amber-600",
  info: "border-sky-600 bg-sky-600",
  default: "border-gray-700 bg-gray-700",
}

function MuiCheckbox({
  color = "primary",
  size = "medium",
  indeterminate = false,
  className,
  children,
  checked,
  defaultChecked,
  onChange,
  ...rest
}: MuiCheckboxProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const active = checked ?? defaultChecked ?? false
  const visualActive = active || indeterminate
  return (
    <label className={cn("inline-flex cursor-pointer select-none items-center gap-2", rest.disabled && "cursor-not-allowed opacity-50", className)}>
      <input
        ref={(n) => {
          inputRef.current = n
          if (n) n.indeterminate = indeterminate
        }}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className="peer sr-only"
        {...rest}
      />
      <span
        aria-hidden
        className={cn(
          "flex items-center justify-center rounded-[4px] border-2 text-white transition-colors",
          SIZE[size],
          visualActive ? CHECKED_COLOR[color] : "border-gray-400 bg-white"
        )}
      >
        {indeterminate ? <Minus className="size-3.5" /> : active ? <Check className="size-3.5" /> : null}
      </span>
      {children && <span className="text-sm text-gray-800">{children}</span>}
    </label>
  )
}

export { MuiCheckbox }
export type { MuiCheckboxProps }
