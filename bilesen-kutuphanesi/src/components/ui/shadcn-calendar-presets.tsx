/**
 * ShadcnCalendarWithPresets
 * Hazır aralıklar + takvim (saf React, shadcn kaynaklı).
 * @id 889
 * @category Takvim
 * @subcategory ShadcnCalendar
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCalendar, type ShadcnDateRange } from "@/components/ui/shadcn-calendar"

function ShadcnCalendarWithPresets() {
  const [range, setRange] = useState<ShadcnDateRange | undefined>(undefined)

  const presets: { label: string; days: number }[] = [
    { label: "Today", days: 0 },
    { label: "Last 7 days", days: 7 },
    { label: "Last 30 days", days: 30 },
  ]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => {
              const to = new Date()
              const from = new Date()
              from.setDate(from.getDate() - p.days)
              setRange({ from, to })
            }}
            className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            {p.label}
          </button>
        ))}
      </div>
      <ShadcnCalendar mode="range" selected={range} onSelect={(v) => v && "from" in v && setRange(v)} numberOfMonths={2} className="rounded-lg border" />
    </div>
  )
}

export { ShadcnCalendarWithPresets }
