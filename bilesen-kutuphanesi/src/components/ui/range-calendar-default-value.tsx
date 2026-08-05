/**
 * RangeCalendarDefaultValue
 * Varsayılan değerli örnek (saf React).
 * @id 564
 * @category Takvim
 * @subcategory RangeCalendar
 */
import { RangeCalendar } from "@/components/ui/range-calendar"

function RangeCalendarDefaultValue() {
  return <RangeCalendar aria-label="Proje süresi" defaultValue={["2025-02-01", "2025-02-14"]} />
}

export { RangeCalendarDefaultValue }
