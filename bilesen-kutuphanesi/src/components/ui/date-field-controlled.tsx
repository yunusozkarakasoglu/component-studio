/**
 * DateFieldControlled
 * Kontrollü örnek (saf React).
 * @id 266
 * @category Tarih
 * @subcategory DateField
 */
import { useState } from "react"
import { DateField } from "@/components/ui/date-field"

function DateFieldControlled() {
  const [value, setValue] = useState<string | null>("2025-02-14")
  return (
    <div className="flex flex-col gap-2">
      <DateField className="w-[256px]" value={value} onChange={setValue} label="Date (controlled)" />
      <p className="text-sm text-muted-foreground">Value: <code className="font-mono">{value ?? "(none)"}</code></p>
    </div>
  )
}

export { DateFieldControlled }
