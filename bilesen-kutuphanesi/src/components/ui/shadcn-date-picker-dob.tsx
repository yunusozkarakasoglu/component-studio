/**
 * ShadcnDatePickerDateOfBirth
 * Doğum tarihi seçici (saf React, shadcn kaynaklı).
 * @id 895
 * @category Takvim
 * @subcategory ShadcnDatePicker
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnDatePicker } from "@/components/ui/shadcn-date-picker"

function ShadcnDatePickerDateOfBirth() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-2">
      <ShadcnDatePicker mode="single" value={date} onChange={(v) => v instanceof Date && setDate(v)} placeholder="Date of birth" />
      <p className="text-sm text-muted-foreground">
        {date ? `Born: ${date.toLocaleDateString()}` : "Pick your date of birth"}
      </p>
    </div>
  )
}

export { ShadcnDatePickerDateOfBirth }
