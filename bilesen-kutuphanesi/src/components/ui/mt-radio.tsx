/**
 * MtRadioGroup + MtRadio
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Radyo grubu — tek seçim, yatay/dikey.
 *   <MtRadioGroup defaultValue="react">
 *     <MtRadio value="react" label="React" />
 *   </MtRadioGroup>
 * @id 1212
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { createContext, useContext, useState, type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RadioContextValue {
  value: string
  setValue: (v: string) => void
  name: string
  disabled?: boolean
}

const RadioContext = createContext<RadioContextValue | null>(null)

interface MtRadioGroupProps {
  children?: ReactNode
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  name?: string
  orientation?: "horizontal" | "vertical"
  disabled?: boolean
  className?: string
  label?: ReactNode
}

function MtRadioGroup({
  children,
  value,
  defaultValue,
  onChange,
  name,
  orientation = "vertical",
  disabled,
  label,
  className,
}: MtRadioGroupProps) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const current = value !== undefined ? value : internal

  const setValue = (v: string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  return (
    <RadioContext.Provider value={{ value: current, setValue, name: name ?? "mt-radio", disabled }}>
      {label && <div className="mb-1 text-sm font-medium text-foreground">{label}</div>}
      <div
        role="radiogroup"
        data-slot="mt-radio-group"
        className={cn("flex", orientation === "vertical" ? "flex-col gap-2" : "flex-row gap-4", className)}
      >
        {children}
      </div>
    </RadioContext.Provider>
  )
}

interface MtRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  value: string
  label?: ReactNode
}

function MtRadio({ className, value, label, ...props }: MtRadioProps) {
  const ctx = useContext(RadioContext)
  if (!ctx) throw new Error("MtRadio, MtRadioGroup içinde kullanılmalı")
  const checked = ctx.value === value
  const disabled = props.disabled || ctx.disabled

  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-2", disabled && "cursor-not-allowed opacity-60", className)}>
      <input
        type="radio"
        name={ctx.name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => ctx.setValue(value)}
        className="peer sr-only"
        {...props}
      />
      <span
        data-slot="mt-radio"
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors",
          "peer-checked:border-blue-600",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30"
        )}
      >
        <span className={cn("size-2 rounded-full bg-blue-600 transition-opacity", checked ? "opacity-100" : "opacity-0")} />
      </span>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  )
}

export { MtRadio, MtRadioGroup }
export type { MtRadioGroupProps, MtRadioProps }
