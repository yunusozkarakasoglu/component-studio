/**
 * CalendarMultipleSelection
 * Multiple Selection örneği — birden çok tarih (saf React).
 * Gerektirir: calendar
 * @id 181
 * @category Takvim
 */
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

function CalendarMultipleSelection() {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar selectionMode="multiple" value={value} onChange={(v) => setValue((v ?? []) as string[])} aria-label="Event dates" />
      <p className="text-sm text-muted-foreground">
        {value.length ? `${value.length} tarih seçildi` : "Select multiple dates"}
      </p>
    </div>
  )
}

export { CalendarMultipleSelection }
