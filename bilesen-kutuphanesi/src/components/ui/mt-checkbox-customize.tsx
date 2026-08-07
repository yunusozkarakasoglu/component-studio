/**
 * MtCheckboxCustomize
 * Özelleştirme — çizgi stili (saf React, Mantine kaynaklı).
 * @id 1227
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxCustomize() {
  return <MtCheckbox label="Dashed style" defaultChecked className="[&_span]:rounded-sm [&_span]:border-dashed" />
}

export { MtCheckboxCustomize }
