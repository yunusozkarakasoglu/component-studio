/**
 * RangeCalendar
 * Saf React bileşen (bağımlılıksız).
 * Tarih aralığı seçimli takvim — Calendar'ın range modu.
 *   <RangeCalendar value={[start, end]} onChange={setRange} />
 * Özellikler: value (["YYYY-MM-DD","YYYY-MM-DD"]) · defaultValue · onChange ·
 * minValue/maxValue · isDateUnavailable · isDisabled · focusedValue.
 * @id 561
 * @category Takvim
 * @subcategory RangeCalendar
 */
import { Calendar, type CalendarProps } from "@/components/ui/calendar"

type RangeCalendarProps = Omit<CalendarProps, "selectionMode">

function RangeCalendar(props: RangeCalendarProps) {
  return <Calendar {...props} selectionMode="range" />
}

export { RangeCalendar }
export type { RangeCalendarProps }
