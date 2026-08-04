/**
 * CalendarCustomIcons
 * HeroUI Custom Navigation Icons örneği — özel ikonlar (saf React, kendi setimizden).
 * @id 184
 * @category Takvim
 */
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeft, ArrowRight } from "@/components/ui/icons"

function CalendarCustomIcons() {
  return (
    <Calendar
      navIconPrev={<ArrowLeft className="size-4" />}
      navIconNext={<ArrowRight className="size-4" />}
      aria-label="Event date"
    />
  )
}

export { CalendarCustomIcons }
