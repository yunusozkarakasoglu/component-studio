/**
 * RangeCalendarControlled
 * Kontrollü örnek — seçilen aralık gösterimi (saf React).
 * @id 565
 * @category Takvim
 * @subcategory RangeCalendar
 */
import { useState } from "react"
import { RangeCalendar } from "@/components/ui/range-calendar"

function RangeCalendarControlled() {
  const [range, setRange] = useState<[string, string] | null>(["2025-02-01", "2025-02-14"])

  return (
    <div className="flex flex-col gap-3">
      <RangeCalendar value={range} onChange={(v) => setRange(Array.isArray(v) && v.length === 2 ? [v[0], v[1]] : null)} />
      <p className="text-sm text-muted-foreground">
        Aralık:{" "}
        <code className="font-mono">
          {range ? `${range[0]} → ${range[1]}` : "(seçilmedi)"}
        </code>
      </p>
    </div>
  )
}

export { RangeCalendarControlled }
