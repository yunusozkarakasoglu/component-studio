/**
 * CalendarControlled
 * Controlled örneği — value + kısayollar (saf React).
 * @id 177
 * @category Takvim
 */
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

function todayKey(offsetMonths = 0) {
  const t = new Date()
  t.setMonth(t.getMonth() + offsetMonths)
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`
}

function CalendarControlled() {
  const [value, setValue] = useState<string | null>(null)
  const [focused, setFocused] = useState<string>(todayKey(0).slice(0, 7))
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <Button size="sm" variant="secondary" onPress={() => { const d = todayKey(0); setValue(d); setFocused(d.slice(0, 7)) }}>Today</Button>
        <Button size="sm" variant="secondary" onPress={() => { const d = todayKey(1); setValue(d); setFocused(d.slice(0, 7)) }}>Next Month</Button>
        <Button size="sm" variant="tertiary" onPress={() => setValue(null)}>Clear</Button>
      </div>
      <Calendar value={value} focusedValue={focused} onFocusChange={setFocused} onChange={(v) => setValue(v as string | null)} aria-label="Event date" />
      <p className="text-sm text-muted-foreground">Selected: {value ?? "(none)"}</p>
    </div>
  )
}

export { CalendarControlled }
