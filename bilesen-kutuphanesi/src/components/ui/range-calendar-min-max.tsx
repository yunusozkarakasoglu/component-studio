/**
 * RangeCalendarMinMax
 * Min/max tarih kısıtı örneği (saf React).
 * @id 566
 * @category Takvim
 * @subcategory RangeCalendar
 */
import { RangeCalendar } from "@/components/ui/range-calendar"

function RangeCalendarMinMax() {
  return <RangeCalendar aria-label="Rezervasyon" minValue="2025-01-01" maxValue="2025-12-31" />
}

export { RangeCalendarMinMax }
