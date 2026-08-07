/**
 * MtComboboxWithIcon
 * İkonlu seçenekler (saf React, Mantine kaynaklı).
 * @id 1336
 * @category Combobox
 * @subcategory MtCombobox
 * @source mantine
 */
import { useState } from "react"
import { Check } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtCombobox, MtComboboxDropdown, MtComboboxOption, MtComboboxTarget } from "@/components/ui/mt-combobox"

function MtComboboxWithIcon() {
  const [value, setValue] = useState("")

  return (
    <MtCombobox className="max-w-sm">
      <MtComboboxTarget>
        <MtButton variant="default" className="w-full justify-between">
          {value || "Select color"}
        </MtButton>
      </MtComboboxTarget>
      <MtComboboxDropdown>
        {["Red", "Green", "Blue"].map((c) => (
          <MtComboboxOption key={c} onSelect={() => setValue(c)}>
            <span className="flex-1">{c}</span>
            {value === c && <Check className="size-4 text-blue-600" />}
          </MtComboboxOption>
        ))}
      </MtComboboxDropdown>
    </MtCombobox>
  )
}

export { MtComboboxWithIcon }
