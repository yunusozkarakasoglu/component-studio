/**
 * CalendarDisabled
 * Disabled örneği (saf React).
 * @id 174
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"

function CalendarDisabled() {
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar isDisabled defaultValue={today} aria-label="Event date" />
      <p className="text-sm text-muted-foreground">Calendar is disabled</p>
    </div>
  )
}

export { CalendarDisabled }
