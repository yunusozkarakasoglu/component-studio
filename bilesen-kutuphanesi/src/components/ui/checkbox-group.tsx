/**
 * CheckboxGroup
 * HeroUI checkbox-group'ten uyarlanmış — saf React (bağımlılıksız).
 * Birden çok checkbox'ı ortak değer listesiyle yönetir.
 *   <CheckboxGroup label="Interests" value={sel} onChange={setSel}>
 *     <Checkbox value="coding" label="Coding" />
 *   </CheckboxGroup>
 * Özellikler: value/defaultValue/onChange · isDisabled/isRequired · name · variant.
 * @id 197
 * @category Checkbox
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { CheckboxGroupContext, useCheckboxGroupContext } from "./checkbox"

interface CheckboxGroupProps {
  label?: ReactNode
  description?: ReactNode
  /** Seçili değerler (kontrollü) */
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  isDisabled?: boolean
  isRequired?: boolean
  name?: string
  variant?: "primary" | "secondary"
  className?: string
  children?: ReactNode
}

function CheckboxGroup({
  label,
  description,
  value,
  defaultValue,
  onChange,
  isDisabled,
  isRequired,
  className,
  children,
}: CheckboxGroupProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue ?? [])
  const controlled = value !== undefined
  const values = controlled ? value : internal

  const toggle = (v: string) => {
    if (isDisabled) return
    const next = values.includes(v) ? values.filter((x) => x !== v) : [...values, v]
    if (!controlled) setInternal(next)
    onChange?.(next)
  }

  return (
    <CheckboxGroupContext.Provider value={{ values, toggle, groupDisabled: !!isDisabled }}>
      <div data-slot="checkbox-group" role="group" aria-required={isRequired || undefined}
        className={cn("flex flex-col gap-2", className)}>
        {label && <span className="text-sm font-medium text-foreground">{label}</span>}
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

/** CheckboxGroup içinde kullanılmak üzere context'i dışa aktar (Checkbox tarafından kullanılır) */
export { CheckboxGroup, useCheckboxGroupContext }
export type { CheckboxGroupProps }
