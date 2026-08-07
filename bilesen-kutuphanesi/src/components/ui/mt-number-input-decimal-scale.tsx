/**
 * MtNumberInputDecimalScale
 * Ondalık basamak sayısı (saf React, Mantine kaynaklı).
 * @id 1159
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputDecimalScale() {
  return <MtNumberInput label="Two decimals" placeholder="0.00" step={0.01} className="max-w-sm" />
}

export { MtNumberInputDecimalScale }
