/**
 * MtNumberInputMinMax
 * Min/max sınırları (saf React, Mantine kaynaklı).
 * @id 1151
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputMinMax() {
  return <MtNumberInput label="Age" placeholder="Age" min={0} max={120} className="max-w-sm" />
}

export { MtNumberInputMinMax }
