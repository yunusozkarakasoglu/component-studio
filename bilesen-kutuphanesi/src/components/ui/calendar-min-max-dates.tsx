/**
 * CalendarMinMaxDates
 * Min and Max Dates örneği (saf React).
 * Gerektirir: calendar
 * @id 178
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function CalendarMinMaxDates() {
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
  const max = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate())
  const maxDate = `${max.getFullYear()}-${String(max.getMonth() + 1).padStart(2, "0")}-${String(max.getDate()).padStart(2, "0")}`
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar minValue={today} maxValue={maxDate} aria-label="Appointment date" />
      <p className="text-sm text-muted-foreground">Select a date between today and {maxDate}</p>
    </div>
  )
}

export { CalendarMinMaxDates }
