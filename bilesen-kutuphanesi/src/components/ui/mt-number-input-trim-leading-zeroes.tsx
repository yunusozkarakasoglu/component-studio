/**
 * MtNumberInputTrimLeadingZeroes
 * Baştaki sıfırları temizle (saf React, Mantine kaynaklı).
 * @id 1162
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputTrimLeadingZeroes() {
  return <MtNumberInput label="Trim leading zeroes" placeholder="007 → 7" className="max-w-sm" />
}

export { MtNumberInputTrimLeadingZeroes }
