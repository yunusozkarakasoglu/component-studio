/**
 * MtCheckbox
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Onay kutusu — label, checked, indeterminate, size, error.
 *   <MtCheckbox label="Accept terms" defaultChecked />
 * @id 1211
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import type { InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, Minus } from "@/components/ui/icons"

interface MtCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  isIndeterminate?: boolean
  error?: ReactNode
}

const boxSizes: Record<string, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-4.5",
  lg: "size-5",
  xl: "size-6",
}

const iconSizes: Record<string, string> = {
  xs: "size-2",
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5",
  xl: "size-4",
}

function MtCheckbox({
  className,
  label,
  size = "sm",
  isIndeterminate,
  error,
  disabled,
  ...props
}: MtCheckboxProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className={cn("inline-flex cursor-pointer items-center gap-2", disabled && "cursor-not-allowed opacity-60")}>
        <input
          type="checkbox"
          className="peer sr-only"
          disabled={disabled}
          {...props}
        />
        <span
          data-slot="mt-checkbox"
          className={cn(
            "flex shrink-0 items-center justify-center rounded border border-border bg-background text-transparent transition-colors",
            "peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30",
            boxSizes[size]
          )}
        >
          {isIndeterminate ? <Minus className={iconSizes[size]} /> : <Check className={iconSizes[size]} />}
        </span>
        {label && <span className="text-sm text-foreground">{label}</span>}
      </label>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtCheckbox }
export type { MtCheckboxProps }
