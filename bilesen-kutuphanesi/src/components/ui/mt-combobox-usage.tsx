/**
 * MtComboboxUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1334
 * @category Combobox
 * @subcategory MtCombobox
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtCombobox, MtComboboxDropdown, MtComboboxOption, MtComboboxTarget } from "@/components/ui/mt-combobox"

function MtComboboxUsage() {
  return (
    <MtCombobox className="max-w-sm">
      <MtComboboxTarget>
        <MtButton variant="default" className="w-full justify-between">
          Select option
        </MtButton>
      </MtComboboxTarget>
      <MtComboboxDropdown>
        <MtComboboxOption>React</MtComboboxOption>
        <MtComboboxOption>Vue</MtComboboxOption>
        <MtComboboxOption>Angular</MtComboboxOption>
      </MtComboboxDropdown>
    </MtCombobox>
  )
}

export { MtComboboxUsage }
