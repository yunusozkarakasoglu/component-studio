/**
 * MtComboboxWithLabel
 * Etiketli seçenekler (saf React, Mantine kaynaklı).
 * @id 1337
 * @category Combobox
 * @subcategory MtCombobox
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtCombobox, MtComboboxDropdown, MtComboboxOption, MtComboboxTarget } from "@/components/ui/mt-combobox"

function MtComboboxWithLabel() {
  return (
    <MtCombobox className="max-w-sm">
      <MtComboboxTarget>
        <MtButton variant="light" className="w-full justify-between">
          More actions
        </MtButton>
      </MtComboboxTarget>
      <MtComboboxDropdown>
        <div className="px-2.5 pt-1.5 pb-1 text-xs font-medium text-muted-foreground">Actions</div>
        <MtComboboxOption>Copy link</MtComboboxOption>
        <MtComboboxOption>Edit</MtComboboxOption>
        <MtComboboxOption>Archive</MtComboboxOption>
      </MtComboboxDropdown>
    </MtCombobox>
  )
}

export { MtComboboxWithLabel }
