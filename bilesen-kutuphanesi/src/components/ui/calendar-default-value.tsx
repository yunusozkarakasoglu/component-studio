/**
 * CalendarDefaultValue
 * HeroUI Default Value örneği — önceden seçili tarih (saf React).
 * @id 176
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function CalendarDefaultValue() {
  return <Calendar defaultValue="2025-02-14" aria-label="Event date" />
}

export { CalendarDefaultValue }
