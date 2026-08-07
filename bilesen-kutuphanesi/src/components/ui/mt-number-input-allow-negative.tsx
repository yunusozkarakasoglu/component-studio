/**
 * MtNumberInputAllowNegative
 * Negatif izni (saf React, Mantine kaynaklı).
 * @id 1158
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputAllowNegative() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNumberInput label="Negative allowed" placeholder="Any number" />
      <MtNumberInput label="Positive only" placeholder="0+" min={0} />
    </div>
  )
}

export { MtNumberInputAllowNegative }
