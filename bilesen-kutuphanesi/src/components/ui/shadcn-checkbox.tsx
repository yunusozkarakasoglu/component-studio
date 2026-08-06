/**
 * ShadcnCheckbox
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Onay kutusu — kontrollü (checked/onCheckedChange) veya kontrollüsüz (defaultChecked).
 *   <ShadcnCheckbox id="terms" defaultChecked />
 * Etiket için: ShadcnFieldLabel htmlFor veya Label bileşeni (saf React).
 * @id 699
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import type { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/ui/icons"

interface ShadcnCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "defaultChecked"> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  isDisabled?: boolean
}

function ShadcnCheckbox({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  isDisabled,
  type,
  ...props
}: ShadcnCheckboxProps) {
  return (
    <label
      data-slot="shadcn-checkbox"
      className={cn(
        "group/checkbox inline-flex cursor-pointer items-center gap-2",
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
          "flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-border bg-background shadow-xs transition-colors",
          "peer-checked:border-blue-600 peer-checked:bg-blue-600",
          "peer-focus-visible:ring-3 peer-focus-visible:ring-ring/40",
          "aria-invalid:border-red-500"
        )}
      >
        <Check className="size-3 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
    </label>
  )
}

export { ShadcnCheckbox }
export type { ShadcnCheckboxProps }
