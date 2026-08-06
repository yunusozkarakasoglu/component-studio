/**
 * ShadcnSwitch
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Açma/kapama anahtarı — kontrollü veya kontrollüsüz.
 *   <ShadcnSwitch id="airplane-mode" defaultChecked />
 * size: sm | default (varsayılan).
 * @id 709
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import type { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "defaultChecked"> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  isDisabled?: boolean
  size?: "sm" | "default"
}

function ShadcnSwitch({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  isDisabled,
  size = "default",
  type,
  ...props
}: ShadcnSwitchProps) {
  return (
    <label
      data-slot="shadcn-switch"
      className={cn(
        "inline-flex cursor-pointer items-center",
        isDisabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={isDisabled}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        {...props}
      />
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent bg-muted-foreground/30 transition-colors",
          "peer-checked:bg-blue-600",
          "peer-focus-visible:ring-3 peer-focus-visible:ring-ring/40",
          "aria-invalid:border-red-500",
          size === "default" && "h-5 w-9",
          size === "sm" && "h-4 w-7"
        )}
      >
        <span
          className={cn(
            "pointer-events-none block rounded-full bg-white shadow-lg transition-transform",
            size === "default" && "size-4 peer-checked:translate-x-4",
            size === "sm" && "size-3 peer-checked:translate-x-3"
          )}
        />
      </span>
    </label>
  )
}

export { ShadcnSwitch }
export type { ShadcnSwitchProps }
