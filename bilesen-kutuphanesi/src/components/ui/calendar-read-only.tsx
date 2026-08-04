/**
 * CalendarReadOnly
 * Read Only örneği (saf React).
 * @id 175
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function CalendarReadOnly() {
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar isReadOnly defaultValue={today} aria-label="Event date" />
      <p className="text-sm text-muted-foreground">Calendar is read-only</p>
    </div>
  )
}

export { CalendarReadOnly }
