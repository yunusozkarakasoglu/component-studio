/**
 * MtNumberInputSections
 * Bölümler (saf React, Mantine kaynaklı).
 * @id 1163
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputSections() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNumberInput label="With icon" placeholder="Amount" className="[&_input]:pl-9" />
    </div>
  )
}

export { MtNumberInputSections }
