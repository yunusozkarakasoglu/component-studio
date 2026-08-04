/**
 * CalendarFocusedValue
 * Focused Value örneği — görüntülenen ayı programatik kontrol (saf React).
 * Gerektirir: calendar
 * @id 182
 * @category Takvim
 */
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

function CalendarFocusedValue() {
  const [focused, setFocused] = useState("2025-06")
  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar focusedValue={focused} onFocusChange={setFocused} aria-label="Event date" />
      <p className="text-sm text-muted-foreground">Focused: {focused}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <Button size="sm" variant="secondary" onPress={() => setFocused("2025-01")}>Go to Jan</Button>
        <Button size="sm" variant="secondary" onPress={() => setFocused("2025-06")}>Go to Jun</Button>
        <Button size="sm" variant="secondary" onPress={() => setFocused("2025-12")}>Go to Christmas</Button>
      </div>
    </div>
  )
}

export { CalendarFocusedValue }
