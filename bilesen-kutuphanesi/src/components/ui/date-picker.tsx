/**
 * DatePicker
 * Saf React bileşen (bağımlılıksız).
 * Tarih seçici — input görünümlü trigger + Calendar popover.
 *   <DatePicker defaultValue="2025-02-14" label="Date" />
 * Değerler içte "YYYY-MM-DD" string.
 * Gerektirir (ortak çekirdek): calendar
 * @id 267
 * @category Tarih
 * @subcategory DatePicker
 */
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { CalendarDays, X } from "@/components/ui/icons"
import { Calendar } from "@/components/ui/calendar"

function formatTR(iso: string): string {
  const [y, m, d] = iso.split("-")
  return `${d}.${m}.${y}`
}

function DatePicker({
  value,
  defaultValue,
  onChange,
  label,
  description,
  minValue,
  maxValue,
  isDisabled,
  className,
}: {
  value?: string | null
  defaultValue?: string
  onChange?: (value: string | null) => void
  label?: string
  description?: string
  minValue?: string
  maxValue?: string
  isDisabled?: boolean
  className?: string
}) {
  const [internal, setInternal] = useState<string | null>(defaultValue ?? null)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const controlled = value !== undefined
  const current = controlled ? value : internal

  const setDate = (v: string | null) => {
    if (!controlled) setInternal(v)
    onChange?.(v)
  }

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [open])

  return (
    <div ref={rootRef} className={cn("relative flex flex-col gap-1.5", isDisabled && "opacity-60", className)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(
          "flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-2.5 text-sm outline-none transition-colors hover:border-black/40 focus-visible:ring-3 focus-visible:ring-ring/50",
          isDisabled && "cursor-not-allowed"
        )}
      >
        <CalendarDays className="size-4 shrink-0 text-muted-foreground" />
        <span className={cn("min-w-0 flex-1 truncate text-left", !current && "text-muted-foreground")}>
          {current ? formatTR(current) : "Tarih seç"}
        </span>
        {current && (
          <span
            role="button"
            tabIndex={-1}
            aria-label="Temizle"
            onClick={(e) => { e.stopPropagation(); setDate(null) }}
            className="flex size-5 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-3.5" />
          </span>
        )}
      </button>

      {open && (
        <div className="absolute top-full z-40 mt-1.5 rounded-xl border border-border bg-popover p-2 shadow-lg">
          <Calendar
            value={current}
            onChange={(v) => { setDate(v as string | null); setOpen(false) }}
            minValue={minValue}
            maxValue={maxValue}
          />
        </div>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

export { DatePicker }
