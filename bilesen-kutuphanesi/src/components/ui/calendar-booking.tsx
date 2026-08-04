/**
 * CalendarBooking
 * Real-World örneği — rezervasyon takvimi (saf React).
 * @id 186
 * @category Takvim
 */
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

const bookedDays = [5, 6, 12, 13, 14, 20]

function isWeekend(date: string) {
  const day = new Date(date + "T00:00:00").getDay()
  return day === 0 || day === 6
}

function CalendarBooking() {
  const [selected, setSelected] = useState<string | null>(null)
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
  const unavailable = (date: string) => isWeekend(date) || bookedDays.includes(Number(date.slice(-2)))

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        minValue={today}
        isDateUnavailable={unavailable}
        value={selected}
        onChange={(v) => setSelected(v as string | null)}
        aria-label="Booking date"
      />
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-muted" /> Dolu</span>
        <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-muted" /> Hafta sonu</span>
      </div>
      {selected && <Button size="sm">Book {selected}</Button>}
    </div>
  )
}

export { CalendarBooking }
