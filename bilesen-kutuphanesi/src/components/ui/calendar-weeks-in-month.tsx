/**
 * CalendarWeeksInMonth
 * Weeks in Month örneği — sabit 6 hafta (saf React).
 * Gerektirir: calendar
 * @id 180
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function CalendarWeeksInMonth() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar weeksInMonth={6} aria-label="Event date" />
      <p className="text-sm text-muted-foreground">Always shows 6 weeks per month to avoid layout shift</p>
    </div>
  )
}

export { CalendarWeeksInMonth }
