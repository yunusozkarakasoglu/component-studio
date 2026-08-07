/**
 * MtMaskInputError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1173
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

function MtMaskInputError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtMaskInput label="Boolean error" placeholder="Boolean error" error />
      <MtMaskInput label="With message" placeholder="With message" error="Invalid phone number" />
    </div>
  )
}

export { MtMaskInputError }
