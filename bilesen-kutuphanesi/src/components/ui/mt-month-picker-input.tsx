/**
 * MtMonthPickerInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Ay seçici girdisi — input + ay picker popover.
 *   <MtMonthPickerInput value={date} onChange={setDate} />
 * @id 1600
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon, X } from "@/components/ui/icons"
import { MtMonthPicker } from "@/components/ui/mt-month-picker"

interface MtMonthPickerInputProps {
  label?: ReactNode
  placeholder?: string
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  clearable?: boolean
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  error?: ReactNode
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
}

const sizes: Record<string, string> = { xs: "h-7 text-xs", sm: "h-8 text-sm", md: "h-9 text-sm", lg: "h-11 text-base" }

function MtMonthPickerInput({ label, placeholder = "Ay seçin", value, defaultValue = null, onChange, clearable, minDate, maxDate, disabled, error, size = "md", className }: MtMonthPickerInputProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue)
  const [opened, setOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = value !== undefined ? value : internal

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpened(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const select = (d: Date | null) => {
    if (value === undefined) setInternal(d)
    onChange?.(d)
    setOpened(false)
  }

  const label_ = selected ? new Intl.DateTimeFormat("tr-TR", { month: "long", year: "numeric" }).format(selected) : ""

  return (
    <div ref={ref} className={cn("relative w-fit", className)}>
      {label && <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>}
      <div className="relative">
        <input
          readOnly
          value={label_}
          placeholder={placeholder}
          disabled={disabled}
          onClick={() => setOpened((o) => !o)}
          className={cn(
            "w-40 cursor-pointer rounded-lg border border-border bg-background pr-8 pl-3 capitalize text-foreground outline-none transition-colors",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            error && "border-red-500",
            disabled && "cursor-not-allowed opacity-50",
            sizes[size]
          )}
        />
        <button type="button" tabIndex={-1} onClick={() => setOpened((o) => !o)} aria-label="Ay seçici"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground">
          {clearable && selected ? <X className="size-4" onClick={() => select(null)} /> : <CalendarIcon className="size-4" />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {opened && (
        <div className="absolute left-0 top-full z-20 mt-1">
          <MtMonthPicker value={selected} onChange={select} minDate={minDate} maxDate={maxDate} />
        </div>
      )}
    </div>
  )
}

export { MtMonthPickerInput }
export type { MtMonthPickerInputProps }
