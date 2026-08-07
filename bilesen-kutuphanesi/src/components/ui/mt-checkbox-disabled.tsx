/**
 * MtCheckboxDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1218
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <MtCheckbox label="Disabled unchecked" disabled />
      <MtCheckbox label="Disabled checked" defaultChecked disabled />
    </div>
  )
}

export { MtCheckboxDisabled }
