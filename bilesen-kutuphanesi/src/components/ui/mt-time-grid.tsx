/**
 * MtTimeGrid
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Saat ızgarası — satır/saat hücreleri, seçim.
 *   <MtTimeGrid value="14:30" onChange={setValue} />
 * @id 1592
 * @category Takvim
 * @subcategory MtTimeGrid
 * @source mantine
 */
import { useState } from "react"
import { cn } from "@/lib/utils"

interface MtTimeGridProps {
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  format?: "24" | "12"
  minTime?: string
  maxTime?: string
  className?: string
}

function parseT(h: string) {
  const [hh, mm] = h.split(":").map(Number)
  return hh * 60 + mm
}
function toT(min: number) {
  return `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`
}

function MtTimeGrid({ value, defaultValue = null, onChange, format = "24", minTime = "00:00", maxTime = "23:59", className }: MtTimeGridProps) {
  const [internal, setInternal] = useState<string | null>(defaultValue)
  const selected = value !== undefined ? value : internal

  const select = (t: string) => {
    if (value === undefined) setInternal(t)
    onChange?.(t)
  }

  const min = parseT(minTime)
  const max = parseT(maxTime)
  const hours: string[] = []
  for (let m = 0; m < 1440; m += 60) {
    const t = toT(m)
    if (m >= min && m <= max) hours.push(t)
  }

  return (
    <div data-slot="mt-time-grid" className={cn("grid max-h-64 grid-cols-4 gap-1 overflow-y-auto p-1", className)}>
      {hours.map((h) => {
        const active = selected === h
        const label = format === "12" ? `${parseInt(h.slice(0, 2), 10) % 12 || 12}:${h.slice(3)} ${+h.slice(0, 2) >= 12 ? "PM" : "AM"}` : h
        return (
          <button
            key={h}
            type="button"
            onClick={() => select(h)}
            className={cn(
              "cursor-pointer rounded-md px-2 py-1.5 text-xs tabular-nums transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
              active ? "bg-blue-600 font-semibold text-white" : "text-foreground hover:bg-muted"
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export { MtTimeGrid }
export type { MtTimeGridProps }
