/**
 * CalendarMultipleMonths
 * Multiple Months örneği — yan yana iki ay (saf React).
 * İki ayrı Calendar (focusedValue ile 1 ay kaydırılmış) — seçim bağımsızdır.
 * @id 185
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function nextMonthKey() {
  const t = new Date()
  t.setMonth(t.getMonth() + 1)
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}`
}

function CalendarMultipleMonths() {
  return (
    <div className="flex gap-6 overflow-x-auto">
      <div className="w-fit">
        <Calendar aria-label="Trip dates" />
      </div>
      <div className="w-fit">
        <Calendar focusedValue={nextMonthKey()} aria-label="Trip dates (next month)" />
      </div>
    </div>
  )
}

export { CalendarMultipleMonths }
