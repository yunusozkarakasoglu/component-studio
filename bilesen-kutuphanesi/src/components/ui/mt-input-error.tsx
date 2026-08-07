/**
 * MtInputError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1193
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtInputWrapper label="Boolean error" error>
        <MtInput placeholder="Boolean error" isInvalid />
      </MtInputWrapper>
      <MtInputWrapper label="With message" error="Invalid input">
        <MtInput placeholder="With message" isInvalid />
      </MtInputWrapper>
    </div>
  )
}

export { MtInputError }
