/**
 * MtSwitch
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Açma/kapama anahtarı — label, size, onLabel/offLabel, thumbIcon.
 *   <MtSwitch label="Enable notifications" defaultChecked />
 * @id 1213
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import type { InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  onLabel?: ReactNode
  offLabel?: ReactNode
  thumbIcon?: ReactNode
  error?: ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const trackSizes: Record<string, string> = {
  xs: "h-3 w-6",
  sm: "h-4 w-8",
  md: "h-5 w-10",
  lg: "h-6 w-12",
  xl: "h-7 w-14",
}

const thumbSizes: Record<string, string> = {
  xs: "size-2 translate-x-0.5 peer-checked:translate-x-3",
  sm: "size-3 translate-x-0.5 peer-checked:translate-x-4",
  md: "size-4 translate-x-0.5 peer-checked:translate-x-5",
  lg: "size-5 translate-x-0.5 peer-checked:translate-x-6",
  xl: "size-6 translate-x-0.5 peer-checked:translate-x-7",
}

function MtSwitch({
  className,
  label,
  size = "md",
  onLabel,
  offLabel,
  thumbIcon,
  error,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...props
}: MtSwitchProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className={cn("inline-flex cursor-pointer items-center gap-2", disabled && "cursor-not-allowed opacity-60")}>
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span
          data-slot="mt-switch"
          className={cn(
            "relative inline-flex shrink-0 items-center rounded-full bg-gray-300 transition-colors",
            "peer-checked:bg-blue-600",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30",
            trackSizes[size]
          )}
        >
          {onLabel && (
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-medium text-white">
              <span className="ml-2">{onLabel}</span>
            </span>
          )}
          <span
            className={cn(
              "pointer-events-none absolute inline-flex items-center justify-center rounded-full bg-white shadow transition-transform",
              thumbSizes[size]
            )}
          >
            {thumbIcon}
          </span>
        </span>
        {label && <span className="text-sm text-foreground">{label}</span>}
      </label>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtSwitch }
export type { MtSwitchProps }
