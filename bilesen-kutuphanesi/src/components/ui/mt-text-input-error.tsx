/**
 * MtTextInputError
 * Hata durumları (saf React, Mantine kaynaklı).
 * @id 1124
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextInput label="Boolean error" placeholder="Boolean error" error />
      <MtTextInput label="With error message" placeholder="With error message" error="Invalid name" />
    </div>
  )
}

export { MtTextInputError }
