/**
 * MtComboboxSearchable
 * Aranabilir kombobox (saf React, Mantine kaynaklı).
 * @id 1335
 * @category Combobox
 * @subcategory MtCombobox
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtCombobox, MtComboboxDropdown, MtComboboxOption, MtComboboxTarget } from "@/components/ui/mt-combobox"

function MtComboboxSearchable() {
  const [value, setValue] = useState("")

  return (
    <MtCombobox className="max-w-sm">
      <MtComboboxTarget>
        <MtButton variant="default" className="w-full justify-between">
          {value || "Pick framework"}
        </MtButton>
      </MtComboboxTarget>
      <MtComboboxDropdown>
        {["React", "Vue", "Angular", "Svelte"].map((f) => (
          <MtComboboxOption key={f} onSelect={() => setValue(f)}>
            {f}
          </MtComboboxOption>
        ))}
      </MtComboboxDropdown>
    </MtCombobox>
  )
}

export { MtComboboxSearchable }
