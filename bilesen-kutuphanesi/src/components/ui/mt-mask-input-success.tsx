/**
 * MtMaskInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1174
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

function MtMaskInputSuccess() {
  return <MtMaskInput label="Phone" placeholder="555 000 00 00" success="Looks good" className="max-w-sm" />
}

export { MtMaskInputSuccess }
