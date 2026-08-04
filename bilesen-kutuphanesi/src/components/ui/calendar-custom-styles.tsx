/**
 * CalendarCustomStyles
 * Tailwind CSS örneği — özelleştirilmiş görünüm (saf React).
 * Gerektirir: calendar
 * @id 187
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function CalendarCustomStyles() {
  return <Calendar className="w-fit rounded-2xl border border-border/80 bg-background p-3 shadow-sm" aria-label="Custom styled calendar" />
}

export { CalendarCustomStyles }
