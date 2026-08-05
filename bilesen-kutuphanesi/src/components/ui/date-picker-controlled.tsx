/**
 * DatePickerControlled
 * Kontrollü örnek (saf React).
 * @id 270
 * @category Tarih
 * @subcategory DatePicker
 */
import { useState } from "react"
import { DatePicker } from "@/components/ui/date-picker"

function DatePickerControlled() {
  const [value, setValue] = useState<string | null>("2025-12-25")
  return (
    <div className="flex flex-col gap-2">
      <DatePicker className="w-[256px]" value={value} onChange={setValue} label="Date (controlled)" />
      <p className="text-sm text-muted-foreground">Selected: <code className="font-mono">{value ?? "(none)"}</code></p>
    </div>
  )
}

export { DatePickerControlled }
