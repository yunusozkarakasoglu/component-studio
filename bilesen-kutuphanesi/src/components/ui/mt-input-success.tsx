/**
 * MtInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1194
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputSuccess() {
  return (
    <MtInputWrapper label="Success input" className="max-w-sm">
      <MtInput placeholder="Looks good" isSuccess />
    </MtInputWrapper>
  )
}

export { MtInputSuccess }
