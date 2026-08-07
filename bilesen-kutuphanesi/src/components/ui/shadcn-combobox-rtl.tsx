/**
 * ShadcnComboboxRtl
 * RTL örneği — Arapça seçim (saf React, shadcn kaynaklı).
 * @id 906
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

function ShadcnComboboxRtl() {
  const [value, setValue] = useState<string>("")

  return (
    <div dir="rtl" className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={["إطار عمل", "مكتبة", "أداة بناء"]} value={value} onChange={(v) => setValue(v as string)} placeholder="اختر عنصرًا" />
    </div>
  )
}

export { ShadcnComboboxRtl }
