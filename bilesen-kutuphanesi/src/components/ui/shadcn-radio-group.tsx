/**
 * ShadcnRadioGroup + ShadcnRadioGroupItem
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Radyo grubu — tek seçim; kontrollü (value/onValueChange) veya kontrollüsüz (defaultValue).
 *   <ShadcnRadioGroup defaultValue="comfortable">
 *     <ShadcnRadioGroupItem value="comfortable" id="r2" />
 *   </ShadcnRadioGroup>
 * @id 717
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RadioGroupContextValue {
  value: string | null
  setValue: (v: string) => void
  groupDisabled: boolean
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useShadcnRadioGroup(): RadioGroupContextValue {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error("ShadcnRadioGroupItem, ShadcnRadioGroup içinde kullanılmalı")
  return ctx
}

interface ShadcnRadioGroupProps {
  children?: ReactNode
  className?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  isDisabled?: boolean
}

function ShadcnRadioGroup({
  children,
  className,
  value,
  defaultValue,
  onValueChange,
  isDisabled,
}: ShadcnRadioGroupProps) {
  const [internal, setInternal] = useState<string | null>(defaultValue ?? null)
  const current = value !== undefined ? value : internal

  const setValue = (v: string) => {
    if (value === undefined) setInternal(v)
    onValueChange?.(v)
  }

  return (
    <RadioGroupContext.Provider value={{ value: current, setValue, groupDisabled: !!isDisabled }}>
      <div data-slot="shadcn-radio-group" role="radiogroup" className={cn("flex flex-col gap-2", className)}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

interface ShadcnRadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value"> {
  value: string
  isDisabled?: boolean
}

function ShadcnRadioGroupItem({ value, id, isDisabled, className, ...props }: ShadcnRadioGroupItemProps) {
  const ctx = useShadcnRadioGroup()
  const disabled = isDisabled || ctx.groupDisabled

  return (
    <label
      data-slot="shadcn-radio-group-item"
      className={cn("inline-flex cursor-pointer items-center", disabled && "cursor-not-allowed opacity-50", className)}
    >
      <input
        type="radio"
        id={id}
        value={value}
        className="peer sr-only"
        checked={ctx.value === value}
        disabled={disabled}
        onChange={() => ctx.setValue(value)}
        {...props}
      />
      <span
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-xs transition-colors",
          "peer-checked:border-blue-600",
          "peer-focus-visible:ring-3 peer-focus-visible:ring-ring/40",
          "aria-invalid:border-red-500"
        )}
      >
        <span className="size-2 rounded-full bg-blue-600 opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
    </label>
  )
}

export { ShadcnRadioGroup, ShadcnRadioGroupItem }
export type { ShadcnRadioGroupItemProps, ShadcnRadioGroupProps }
