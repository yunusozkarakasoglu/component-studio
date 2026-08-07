/**
 * MtInputWrapperOrder
 * Sıralama — hata üstte (saf React, Mantine kaynaklı).
 * @id 1206
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputWrapperOrder() {
  return (
    <MtInputWrapper label="Ordered wrapper" error="Error above" className="max-w-sm">
      <MtInput placeholder="Input" isInvalid />
    </MtInputWrapper>
  )
}

export { MtInputWrapperOrder }
