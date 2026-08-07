/**
 * MtNumberInputStrictClamp
 * Sıkı sınırlama (saf React, Mantine kaynaklı).
 * @id 1161
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputStrictClamp() {
  return <MtNumberInput label="0-10 only" placeholder="0-10" min={0} max={10} className="max-w-sm" />
}

export { MtNumberInputStrictClamp }
