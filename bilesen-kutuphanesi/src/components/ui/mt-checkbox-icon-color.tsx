/**
 * MtCheckboxIconColor
 * İkon rengi (saf React, Mantine kaynaklı).
 * @id 1225
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxIconColor() {
  return <MtCheckbox label="Green checkbox" defaultChecked className="[&_span]:peer-checked:border-emerald-600 [&_span]:peer-checked:bg-emerald-600" />
}

export { MtCheckboxIconColor }
