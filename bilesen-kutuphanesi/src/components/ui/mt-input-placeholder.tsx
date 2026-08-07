/**
 * MtInputPlaceholder
 * Placeholder stilleri (saf React, Mantine kaynaklı).
 * @id 1197
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputPlaceholder() {
  return (
    <MtInputWrapper label="Custom placeholder" className="max-w-sm">
      <MtInput placeholder="Custom placeholder" className="placeholder:italic placeholder:text-blue-400" />
    </MtInputWrapper>
  )
}

export { MtInputPlaceholder }
