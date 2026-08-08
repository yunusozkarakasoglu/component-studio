/**
 * MtTimePicker
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Saat seçici — input + saat ızgarası popover.
 *   <MtTimePicker value="14:30" onChange={setValue} />
 * @id 1602
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Clock, X } from "@/components/ui/icons"
import { MtTimeGrid } from "@/components/ui/mt-time-grid"

interface MtTimePickerProps {
  label?: ReactNode
  placeholder?: string
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  clearable?: boolean
  format?: "24" | "12"
  minTime?: string
  maxTime?: string
  disabled?: boolean
  error?: ReactNode
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
}

const sizes: Record<string, string> = { xs: "h-7 text-xs", sm: "h-8 text-sm", md: "h-9 text-sm", lg: "h-11 text-base" }

function MtTimePicker({ label, placeholder = "Saat seçin", value, defaultValue = null, onChange, clearable, format = "24", minTime, maxTime, disabled, error, size = "md", className }: MtTimePickerProps) {
  const [internal, setInternal] = useState<string | null>(defaultValue)
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

  const select = (v: string | null) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
    setOpened(false)
  }

  const label_ = selected
    ? format === "12"
      ? `${parseInt(selected.slice(0, 2), 10) % 12 || 12}:${selected.slice(3)} ${+selected.slice(0, 2) >= 12 ? "PM" : "AM"}`
      : selected
    : ""

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
            "w-32 cursor-pointer rounded-lg border border-border bg-background pr-8 pl-3 tabular-nums text-foreground outline-none transition-colors",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            error && "border-red-500",
            disabled && "cursor-not-allowed opacity-50",
            sizes[size]
          )}
        />
        <button type="button" tabIndex={-1} onClick={() => setOpened((o) => !o)} aria-label="Saat seçici"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground">
          {clearable && selected ? <X className="size-4" onClick={() => select(null)} /> : <Clock className="size-4" />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {opened && (
        <div className="absolute left-0 top-full z-20 mt-1 rounded-lg border border-border bg-background shadow-lg">
          <MtTimeGrid value={selected} onChange={select} format={format} minTime={minTime} maxTime={maxTime} />
        </div>
      )}
    </div>
  )
}

export { MtTimePicker }
export type { MtTimePickerProps }
