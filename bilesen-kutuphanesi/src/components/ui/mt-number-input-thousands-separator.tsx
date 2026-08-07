/**
 * MtNumberInputThousandsSeparator
 * Binlik ayraç (saf React, Mantine kaynaklı).
 * @id 1160
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputThousandsSeparator() {
  return <MtNumberInput label="Large number" placeholder="1,000,000" defaultValue={1000000} className="max-w-sm" />
}

export { MtNumberInputThousandsSeparator }
