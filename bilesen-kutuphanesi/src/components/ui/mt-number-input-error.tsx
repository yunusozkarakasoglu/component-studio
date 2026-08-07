/**
 * MtNumberInputError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1153
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNumberInput label="Boolean error" placeholder="Boolean error" error />
      <MtNumberInput label="With message" placeholder="With message" error="Invalid number" />
    </div>
  )
}

export { MtNumberInputError }
