/**
 * MtCheckboxCustomSize
 * Özel boyut — sınıf ile (saf React, Mantine kaynaklı).
 * @id 1224
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxCustomSize() {
  return <MtCheckbox label="Custom size" className="[&_span]:size-6" />
}

export { MtCheckboxCustomSize }
