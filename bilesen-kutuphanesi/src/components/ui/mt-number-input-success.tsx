/**
 * MtNumberInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1155
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputSuccess() {
  return <MtNumberInput label="Quantity" placeholder="Quantity" success="Valid number" className="max-w-sm" />
}

export { MtNumberInputSuccess }
