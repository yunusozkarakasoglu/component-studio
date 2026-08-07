/**
 * MtNumberInputAllowDecimal
 * Ondalık izni (saf React, Mantine kaynaklı).
 * @id 1157
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputAllowDecimal() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNumberInput label="With decimal" placeholder="0.00" step={0.1} />
      <MtNumberInput label="Without decimal" placeholder="0" step={1} />
    </div>
  )
}

export { MtNumberInputAllowDecimal }
