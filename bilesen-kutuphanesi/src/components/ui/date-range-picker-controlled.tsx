/**
 * DateRangePickerControlled
 * Kontrollü örnek (saf React).
 * @id 274
 * @category Tarih
 * @subcategory DateRange
 */
import { useState } from "react"
import { DateRangePicker } from "@/components/ui/date-range-picker"

function DateRangePickerControlled() {
  const [value, setValue] = useState<[string, string] | null>(["2025-02-01", "2025-02-14"])
  return (
    <div className="flex flex-col gap-2">
      <DateRangePicker className="w-[280px]" value={value} onChange={setValue} label="Tarih aralığı (controlled)" />
      <p className="text-sm text-muted-foreground">
        Range: <code className="font-mono">{value ? `${value[0]} → ${value[1]}` : "(none)"}</code>
      </p>
    </div>
  )
}

export { DateRangePickerControlled }
