/**
 * ShadcnComboboxDisabled
 * Devre dışı seçim (saf React, shadcn kaynaklı).
 * @id 905
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

function ShadcnComboboxDisabled() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={["One", "Two", "Three"]} placeholder="Disabled combobox" isDisabled />
    </div>
  )
}

export { ShadcnComboboxDisabled }
