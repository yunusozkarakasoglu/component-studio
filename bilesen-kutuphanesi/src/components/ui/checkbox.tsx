/**
 * Checkbox
 * HeroUI checkbox'tan uyarlanmış — saf React (bağımlılıksız).
 * CheckboxGroup içinde kullanılırsa grup state'ini paylaşır (context).
 *   <Checkbox label="Accept terms" defaultSelected onChange={...} />
 *   <Checkbox label={(sel) => sel ? "Terms accepted" : "Accept terms"} />
 * Özellikler: label (fonksiyon olabilir) · description · isSelected/defaultSelected
 * · isIndeterminate · isDisabled/isInvalid/isRequired · variant · indicator ·
 * name/value (form) · onChange.
 * @id 196
 * @category Checkbox
 */
import { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, Minus } from "@/components/ui/icons"

/* ---------- Group context ---------- */

interface GroupCtx {
  values: string[]
  toggle: (value: string) => void
  groupDisabled: boolean
}

const CheckboxGroupContext = createContext<GroupCtx | null>(null)

function useCheckboxGroupContext(): GroupCtx | null {
  return useContext(CheckboxGroupContext)
}

interface CheckboxState {
  isSelected: boolean
  isIndeterminate: boolean
  isDisabled: boolean
  isInvalid: boolean
  isRequired: boolean
}

interface CheckboxProps {
  /** Etiket — fonksiyon verilirse seçim durumunu alır */
  label?: ReactNode | ((state: CheckboxState) => ReactNode)
  /** Açıklama — fonksiyon verilirse seçim durumunu alır */
  description?: ReactNode | ((state: CheckboxState) => ReactNode)
  /** CheckboxGroup içinde grup değeri; tek başınaysa form değeri */
  value?: string
  name?: string
  isSelected?: boolean
  defaultSelected?: boolean
  isIndeterminate?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  variant?: "primary" | "secondary"
  /** Varsayılan işaret yerine özel içerik (fonksiyon state alır) */
  indicator?: ReactNode | ((state: CheckboxState) => ReactNode)
  onChange?: (selected: boolean) => void
  className?: string
}

function Checkbox({
  label,
  description,
  value,
  name,
  isSelected,
  defaultSelected,
  isIndeterminate,
  isDisabled,
  isInvalid,
  isRequired,
  variant = "primary",
  indicator,
  onChange,
  className,
}: CheckboxProps) {
  const group = useCheckboxGroupContext()
  const [internalSelected, setInternalSelected] = useState(defaultSelected ?? false)

  const inGroup = !!group
  const selected = inGroup ? group.values.includes(value ?? "") : (isSelected ?? internalSelected)
  const disabled = isDisabled || (inGroup && group.groupDisabled)

  const toggle = () => {
    if (disabled) return
    if (inGroup) {
      group.toggle(value ?? "")
    } else {
      const next = !selected
      if (isSelected === undefined) setInternalSelected(next)
      onChange?.(next)
    }
  }

  const state: CheckboxState = {
    isSelected: selected,
    isIndeterminate: !!isIndeterminate,
    isDisabled: disabled,
    isInvalid: !!isInvalid,
    isRequired: !!isRequired,
  }

  const labelNode = typeof label === "function" ? label(state) : label
  const descNode = typeof description === "function" ? description(state) : description
  const indicatorNode =
    typeof indicator === "function" ? indicator(state) : indicator

  return (
    <div data-slot="checkbox" data-selected={selected || undefined} data-disabled={disabled || undefined} className={cn("flex flex-col gap-0.5", disabled && "opacity-60", className)}>
      <label className="group flex w-fit cursor-pointer items-center gap-2.5 select-none">
        <input
          type="checkbox"
          className="sr-only"
          name={name}
          value={value}
          checked={selected}
          disabled={disabled}
          onChange={toggle}
          aria-invalid={isInvalid || undefined}
          aria-required={isRequired || undefined}
        />
        <span
          data-slot="checkbox-control"
          data-selected={selected || undefined}
          data-indeterminate={isIndeterminate || undefined}
          data-invalid={isInvalid || undefined}
          aria-hidden="true"
          className={cn(
            "flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
            selected
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-input bg-background",
            variant === "secondary" && !selected && "border-muted-foreground/40",
            isInvalid && !selected && "border-red-500",
            "group-hover:border-black/40",
            "focus-within:ring-3 focus-within:ring-ring/50"
          )}
        >
          {indicatorNode ?? (selected ? <Check className="size-3" /> : isIndeterminate ? <Minus className="size-3" /> : null)}
        </span>
        {labelNode && <span className="text-sm text-foreground">{labelNode}</span>}
      </label>
      {descNode && <p className="pl-6.5 text-xs text-muted-foreground">{descNode}</p>}
    </div>
  )
}

export { Checkbox, CheckboxGroupContext, useCheckboxGroupContext }
export type { CheckboxProps, CheckboxState, GroupCtx }
