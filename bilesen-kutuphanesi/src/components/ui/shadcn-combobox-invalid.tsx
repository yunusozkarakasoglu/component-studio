/**
 * ShadcnComboboxInvalid
 * Geçersiz durum (saf React, shadcn kaynaklı).
 * @id 904
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

function ShadcnComboboxInvalid() {
  const [value, setValue] = useState<string>("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={["Alpha", "Beta", "Gamma"]} value={value} onChange={(v) => setValue(v as string)} placeholder="Required field" isInvalid />
      <p className="text-sm text-red-500">This field is required.</p>
    </div>
  )
}

export { ShadcnComboboxInvalid }
