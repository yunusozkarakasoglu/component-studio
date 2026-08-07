/**
 * MtInputUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1192
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputUsage() {
  return (
    <MtInputWrapper label="Input label" className="max-w-sm">
      <MtInput placeholder="Input placeholder" />
    </MtInputWrapper>
  )
}

export { MtInputUsage }
