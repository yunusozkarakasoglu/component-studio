/**
 * CalendarUnavailableDates
 * HeroUI Unavailable Dates örneği — hafta sonları engelli (saf React).
 * @id 179
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function isWeekend(date: string) {
  const d = new Date(date + "T00:00:00")
  const day = d.getDay()
  return day === 0 || day === 6
}

function CalendarUnavailableDates() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar isDateUnavailable={isWeekend} aria-label="Appointment date" />
      <p className="text-sm text-muted-foreground">Weekends are unavailable</p>
    </div>
  )
}

export { CalendarUnavailableDates }
