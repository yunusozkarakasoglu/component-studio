/**
 * ShadcnDatePickerRtl
 * RTL örneği — Arapça tarih seçici (saf React, shadcn kaynaklı).
 * @id 897
 * @category Takvim
 * @subcategory ShadcnDatePicker
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnDatePicker } from "@/components/ui/shadcn-date-picker"

function ShadcnDatePickerRtl() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div dir="rtl">
      <ShadcnDatePicker mode="single" value={date} onChange={(v) => v instanceof Date && setDate(v)} placeholder="اختر تاريخًا" />
    </div>
  )
}

export { ShadcnDatePickerRtl }
