/**
 * RangeCalendarUnavailable
 * Kullanılamayan tarihler örneği — hafta sonları (saf React).
 * @id 567
 * @category Takvim
 * @subcategory RangeCalendar
 */
import { RangeCalendar } from "@/components/ui/range-calendar"

function RangeCalendarUnavailable() {
  const isWeekend = (date: string) => {
    const d = new Date(date)
    const day = d.getDay()
    return day === 0 || day === 6
  }

  return <RangeCalendar aria-label="Toplantı tarihleri" isDateUnavailable={isWeekend} />
}

export { RangeCalendarUnavailable }
