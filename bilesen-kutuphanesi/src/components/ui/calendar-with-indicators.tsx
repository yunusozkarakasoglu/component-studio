/**
 * CalendarWithIndicators
 * Cell Indicators örneği — etkinlik noktaları (saf React).
 * Gerektirir: calendar
 * @id 183
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function calendarIndicators(fy: number, fm: number) {
  const out: string[] = []
  for (const day of [3, 7, 12, 15, 21, 28]) {
    out.push(`${fy}-${String(fm + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`)
  }
  return out
}

function CalendarWithIndicators() {
  const now = new Date()
  const indicators = calendarIndicators(now.getFullYear(), now.getMonth())
  return <Calendar indicatorDates={indicators} aria-label="Event date" />
}

export { CalendarWithIndicators }
