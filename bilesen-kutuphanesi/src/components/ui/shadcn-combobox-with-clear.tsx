/**
 * ShadcnComboboxWithClear
 * Temizleme butonlu seçim (saf React, shadcn kaynaklı).
 * @id 902
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

const statuses = ["Todo", "In Progress", "Done", "Cancelled"]

function ShadcnComboboxWithClear() {
  const [value, setValue] = useState<string>("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={statuses} value={value} onChange={(v) => setValue(v as string)} placeholder="Select status" clearable />
      <p className="text-sm text-muted-foreground">{value ? `Status: ${value}` : "No status selected"}</p>
    </div>
  )
}

export { ShadcnComboboxWithClear }
